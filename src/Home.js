import React from "react";
import {Container} from "reactstrap";
import GithubLinks from './GithubLinks';
import Mobile from "./Mobile";

export default function Home() {
    return (
        <Container>
            <h2>Qui suis-je ?</h2>
            <p>
                Je suis passionné de programmation depuis plusieurs années déjà.
                Je suis toujours motivé à apprendre de nouvelles techniques ou technologies par conséquent
                je me fixe souvent de petits projets afin de m'amuser et apprendre en même temps.
            </p>

            <h2>Mes études</h2>
            <ul>
                <li>
                    2019/2020 Etudiant M1 <a href="https://master-developpement-logiciel.fr" target="_blank">
                    Master Développement Logiciel</a> à l’université <a href="https://univ-tlse3.fr" target="_blank">
                    Paul Sabatier</a> de Toulouse
                </li>
                <li>
                    2018/2019 Etudiant 3ème année de Licence Informatique à l’université 
                    <a href="https://univ-tlse3.fr" target="_blank">Paul Sabatier</a> de Toulouse
                </li>
                <li>
                    2017/2018 Etudiant 2ème année Informatique à l’<a href="https://iut-rodez.fr" target="_blank">IUT de Rodez</a>
                </li>
                <li>
                    2016/2017 Etudiant 1ère année Informatique à l’<a href="https://iut-rodez.fr" target="_blank">IUT de Rodez</a>
                </li>
                <li>
                    2016 BAC STI2D SIN mention Bien au Lycée Alexis Monteil à Rodez
                </li>
            </ul>
            <Mobile.Yes>
                <div style={{display: "inline-flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <a href="https://github.com" style={{display: "inline-block"}}>Hello world!</a>
                    <a href="https://reddit.com" style={{display: "inline-block"}}>Wow!</a>
                </div>
            </Mobile.Yes>
            <Mobile.No>
                <GithubLinks>
                    <a href="https://github.com" style={{display: "inline-block"}}>Hello world!</a>
                    <a href="https://reddit.com" style={{display: "inline-block"}}>Wow!</a>
                </GithubLinks>
            </Mobile.No>
        </Container>
    );
}
