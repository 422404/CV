import React from "react";

export default function BadgeList(props) {
    return (
        <>
            <h2 className="mt-5">{props.title}</h2>
            <div style={{textAlign: "center", fontSize: "1.2em"}}>
                {props.children}
            </div>
        </>
    );
}
