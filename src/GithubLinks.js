import React from "react";
import ReactDOM from "react-dom"

class LinkGrabber {
    constructor(canvas, x, y, r, grabDistance, aNode) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.r = r;
        this.grabDistance = grabDistance;
        this.aNode = aNode;
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
        if (e.target.classList.contains("github-links-wrapper")) {
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
        this.ctx.arc(this.x, this.y, this.r, angle + 0.7, angle - 0.7);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r / 2, 0, 2 * Math.PI);
        this.ctx.fillColor = "black";
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
        this.ctx.fillColor = "black";
        this.ctx.fill();
        this.ctx.stroke();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.lineWidth = 2;
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
}

export default class GithubLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.grabbers = [];
        this.canvas = this.ctx = this.canvas = null;

        // Todo -> props
        this.GRAB_DISTANCE = 200;
    }

    componentDidMount() {
        this.canvas = this.refs.wrapper.querySelector(".github-links-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvasRect = this.canvas.getBoundingClientRect();
        window.addEventListener("resize", () => this.resize());
        this.resize();
        this.createGrabbers();
    }

    shouldComponentUpdate() {
        return false;
    }

    resize() {
        let wrapperRect = this.refs.wrapper.getBoundingClientRect();
        this.canvas.width = wrapperRect.right - wrapperRect.left;
        this.canvas.height = wrapperRect.bottom - wrapperRect.top;
    }

    setGrabberInactive(grabber) {
        // grabber.render();
        this.refs.wrapper.style.cursor = "initial";
        this.refs.wrapper.onclick = null;
    }

    setGrabberActive(grabber, x, y) {
        grabber.renderGrab(x, y);
        this.refs.wrapper.style.cursor = "pointer";
        this.refs.wrapper.onclick = grabber.click.bind(grabber);
    }

    createGrabbers() {
        // we can access the links via their refs
        for (let i = 0; i < this.props.children.length; i++) {
            let aNode = ReactDOM.findDOMNode(this.refs[i]);
            let aRect = aNode.getBoundingClientRect();
            let height = aRect.bottom - aRect.top - 2;
            let grabber = new LinkGrabber(
                this.canvas,
                aRect.right + 0 + height - this.canvasRect.left,
                aRect.top + height / 2 - this.canvasRect.top,
                height / 2,
                this.GRAB_DISTANCE,
                aNode
            );
            // grabber.render();
            this.grabbers.push(grabber);
        }
    }

    handleMouseMove(e) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let x = e.clientX - this.canvasRect.left;
        let y = e.clientY - this.canvasRect.top;
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

    handleMouseLeave() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let grabber of this.grabbers) {
            this.setGrabberInactive(grabber);
        }
    }

    render() {
        return (
            <div className="github-links-wrapper" ref="wrapper"
                    style={{height: "100%"}}
                    onMouseMove={this.handleMouseMove.bind(this)}
                    onMouseLeave={this.handleMouseLeave.bind(this)}>
                <canvas
                    className="github-links-canvas"
                    width="300"
                    height="150"
                    style={{position: "absolute",
                            zIndex: -1}}>
                </canvas>
                <div style={{display: "inline-flex",
                        flexDirection: "column",
                        textAlign: "left"}}>
                    {React.Children.map(this.props.children, (element, i) => {
                        // we assign a ref to each link
                        return React.cloneElement(element, { ref: i });
                    })}
                </div>
            </div>
        );
    }
}
