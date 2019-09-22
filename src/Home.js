import React from "react";
import {Container, Badge} from "reactstrap";
import GithubLinks from './GithubLinks';
import Mobile from "./Mobile";
import BadgeList from "./BadgeList";

export default function Home() {
    return (
        <Container className="pb-3">
            <h2>Qui suis-je ?</h2>
            <p>
                Je suis un passionné de programmation depuis plusieurs années.
                Je suis toujours motivé pour apprendre de nouvelles techniques ou technologies, par conséquent
                je me fixe souvent de petits projets afin de m'amuser et apprendre en même temps.
            </p>

            <h2 className="mt-5">Mes études</h2>
            <ul>
                <li>
                    2019/2020: Je suis actuellement étudiant en M1 <a href="https://www.master-developpement-logiciel.fr">
                    Développement Logiciel</a> à l’université <a href="https://univ-tlse3.fr">Paul Sabatier</a> de Toulouse
                </li>
                <li>
                    2019: J'ai obtenu ma L3 Informatique à l’université <a href="https://univ-tlse3.fr">
                    Paul Sabatier</a> de Toulouse
                </li>
                <li>
                    2018: J'ai obtenu mon DUT Informatique  à l’<a href="https://www.iut-rodez.fr">IUT de Rodez</a>
                </li>
                <li>
                    2016: J'ai obtenu mon BAC STI2D SIN mention Bien au Lycée Alexis Monteil à Rodez
                </li>
            </ul>


            <BadgeList title="Mes Langages">
                <Badge className="mx-2" color="light" pill>Java</Badge>
                <Badge className="mx-2" color="light" pill>HTML/CSS</Badge>
                <Badge className="mx-2" color="light" pill>JavaScript (Navigateur et Node.js)</Badge>
                <Badge className="mx-2" color="light" pill>C/C++</Badge>
                <Badge className="mx-2" color="light" pill>Python 3</Badge>
                <Badge className="mx-2" color="light" pill>OCaml</Badge>
                <Badge className="mx-2" color="light" pill>PHP</Badge>
                <Badge className="mx-2" color="light" pill>Bash</Badge>
                <Badge className="mx-2" color="light" pill>Go</Badge>
            </BadgeList>

            <BadgeList title="Mes outils">
                <Badge className="mx-2" color="light" pill>Visual Studio</Badge>
                <Badge className="mx-2" color="light" pill>Visual Studio Code</Badge>
                <Badge className="mx-2" color="light" pill>Eclipse</Badge>
                <Badge className="mx-2" color="light" pill>Netbeans</Badge>
                <Badge className="mx-2" color="light" pill>SQL Developer</Badge>
                <Badge className="mx-2" color="light" pill>Unity</Badge>
                <Badge className="mx-2" color="light" pill>PHPStorm</Badge>
            </BadgeList>

            <BadgeList title="Mes OS">
                <Badge className="mx-2" color="light" pill>Windows 7</Badge>
                <Badge className="mx-2" color="light" pill>Windows 10</Badge>
                <Badge className="mx-2" color="light" pill>Kali Linux</Badge>
                <Badge className="mx-2" color="light" pill>Manjaro Linux</Badge>
                <Badge className="mx-2" color="light" pill>Ubuntu</Badge>
                <Badge className="mx-2" color="light" pill>Raspbian</Badge>
            </BadgeList>

            <h2 className="mt-5">Mes projets scolaires</h2>
            <Mobile.Yes>
                <div style={{display: "inline-flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <a href="https://github.com" style={{display: "inline-block"}}>Hello world!</a>
                    <a href="https://reddit.com" style={{display: "inline-block"}}>Wow!</a>
                </div>
            </Mobile.Yes>
            <Mobile.No>
                <GithubLinks light>
                    <a href="https://github.com" style={{display: "inline-block"}}>Hello world!</a>
                    <a href="https://reddit.com" style={{display: "inline-block"}}>Wow!</a>
                </GithubLinks>
            </Mobile.No>
        </Container>
    );
}
