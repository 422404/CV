import React from "react";
import {Container, Badge} from "reactstrap";
import {NavLink} from "react-router-dom";
import BadgeList from "./BadgeList";
import StudentProjects from "./StudentProjects";

export default function Home() {
    return (
        <Container className="pb-5">
            <h2>Qui suis-je ?</h2>
            <p>
                Je suis un passionné de programmation depuis plusieurs années.
                Je suis toujours motivé pour apprendre de nouvelles techniques ou technologies, par conséquent
                je me fixe souvent de <NavLink to="/projets" exact>petits projets</NavLink> afin de m'amuser et apprendre en même temps.
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
                <Badge className="mx-2" color="light" pill>Rust</Badge>
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

            <h2 className="mt-5 mb-3">Mes projets scolaires</h2>
            <StudentProjects />

            <h2 className="mt-5 mb-3">Concours</h2>
            <ul>
                <li>Coding Battle 2017: Arrivé 546 sur 3090</li>
                <li>App’s Challenge 2017: 4ème place obtenue avec le thème «Négawatt City»</li>
            </ul>
        </Container>
    );
}
