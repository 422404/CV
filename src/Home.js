import React from "react";
import {Container} from "reactstrap";
import GithubLinks from './GithubLinks';

export default function Home() {
    return (
        <Container>
            <GithubLinks>
                <a href="https://github.com" style={{display: "inline-block"}}>Hello world!</a>
                <a href="https://reddit.com" style={{display: "inline-block"}}>Wow!</a>
            </GithubLinks>
        </Container>
    );
}
