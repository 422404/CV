import React from "react";
import ReactDOM from "react-dom"

class LinkGrabber {
    constructor(canvas, x, y, r, grabDistance, aNode, light) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.r = r;
        this.grabDistance = grabDistance;
        this.aNode = aNode;
        this.color = light ? "#f8f9fa" : "#343a40";
    }

    getDist(cursorX, cursorY) {
        let xDist = Math.abs(cursorX - this.x);
        let yDist = Math.abs(cursorY - this.y);
        let hyp = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        return hyp;
    }

    canGrab(cursorX, cursorY) {
        return this.getDist(cursorX, cursorY) <= this.grabDistance
        && cursorX > this.x + this.r;
    }
    
    click(e) {
        if (e.target.classList.contains("github-links-clickable")) {
            this.aNode.click();
            console.log(e);
        }
    }

    renderGrab(cursorX, cursorY) {
        let xDist = Math.abs(cursorX - this.x);
        let yDist = Math.abs(cursorY - this.y);
        let tan = Math.atan2(yDist, xDist);
        let angle;
        if (this.x <= cursorX && this.y <= cursorY) {
            angle = tan;
        } else if (this.x <= cursorX && this.y >= cursorY) {
            angle = -tan;
        } else if (this.x >= cursorX && this.y >= cursorY) {
            angle = tan + Math.PI;
        } else if (this.x >= cursorX && this.y <= cursorY) {
            angle = -tan - Math.PI;
        }

        // Repaint the grabber
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.x, this.y, this.r, angle + 0.7, angle - 0.7);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r / 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();

        // Paint the line to the cursor
        this.ctx.beginPath();
        this.ctx.lineWidth = 4;
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(cursorX, cursorY);
        this.ctx.stroke();
        
        // Paint the dot under the cursor
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(cursorX , cursorY, this.r / 2, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = 2;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}

export default class GithubLinks extends React.Component {
    constructor(props) {
        super(props);
        this.grabbers = [];
        this.canvas = this.ctx = this.canvas = null;
        this.wrapperRef = React.createRef();
        this.GRAB_DISTANCE = Number.MAX_VALUE;

        // event handlers
        this.resize = () => {
            let wrapperRect = this.wrapperRef.current.getBoundingClientRect();
            this.canvas.width = wrapperRect.right - wrapperRect.left;
            this.canvas.height = wrapperRect.bottom - wrapperRect.top;
        };

        this.handleMouseMove = e => {
            let canvasRect = this.canvas.getBoundingClientRect();
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            let x = e.clientX - canvasRect.left;
            let y = e.clientY - canvasRect.top;
            let minDist;
            let minGrabber = null;
            for (let grabber of this.grabbers) {
                if (grabber.canGrab(x, y)) {
                    if (!minGrabber || grabber.getDist(x, y) < minDist) {
                        if (minGrabber) this.setGrabberInactive(minGrabber);
                        minDist = grabber.getDist(x, y);
                        minGrabber = grabber;
                    } else {
                        this.setGrabberInactive(grabber);
                    }
                } else {
                    this.setGrabberInactive(grabber);
                }
            }
            if (minGrabber) this.setGrabberActive(minGrabber, x, y);
        }
    
        this.handleMouseLeave = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (let grabber of this.grabbers) {
                this.setGrabberInactive(grabber);
            }
        }
    }

    componentDidMount() {
        this.canvas = this.wrapperRef.current.querySelector(".github-links-canvas");
        this.ctx = this.canvas.getContext("2d");
        window.addEventListener("resize", this.resize);
        this.resize();
        this.createGrabbers();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    setGrabberInactive(grabber) {
        this.wrapperRef.current.style.cursor = "initial";
        this.wrapperRef.current.onclick = null;
    }

    setGrabberActive(grabber, x, y) {
        grabber.renderGrab(x, y);
        this.wrapperRef.current.style.cursor = "pointer";
        this.wrapperRef.current.onclick = grabber.click.bind(grabber);
    }

    createGrabbers() {
        let canvasRect = this.canvas.getBoundingClientRect();
        // we can access the links via their refs
        for (let i = 0; i < this.props.children.length; i++) {
            let aNode = ReactDOM.findDOMNode(this.refs[i]);
            let aRect = aNode.getBoundingClientRect();
            let height = aRect.bottom - aRect.top - 2;
            let grabber = new LinkGrabber(
                this.canvas,
                aRect.right + 0 + height - canvasRect.left,
                aRect.top + height / 2 - canvasRect.top,
                height / 2,
                this.GRAB_DISTANCE,
                aNode,
                this.props.light
            );
            this.grabbers.push(grabber);
        }
    }

    render() {
        return (
            <div className="github-links-wrapper" ref={this.wrapperRef}
                    onMouseMove={this.handleMouseMove}
                    onMouseLeave={this.handleMouseLeave}>
                <canvas
                    className="github-links-canvas"
                    style={{position: "absolute", zIndex: 0}}>
                </canvas>
                <div className="github-links-clickable"
                        style={{position: "relative", zIndex: 1}}>
                    <div style={{...this.props.style,
                            display: "inline-flex",
                            flexDirection: "column",
                            textAlign: "left",
                            paddingTop: "20px",
                            paddingBottom: "20px"}}>
                        {React.Children.map(this.props.children, (element, i) => {
                            // we assign a ref to each link
                            return React.cloneElement(element, { ref: i });
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
