import React from "react";
import {Table} from "reactstrap";
import {layoutGenerator} from "react-break";
import {Card, CardText, CardTitle, CardSubtitle} from "reactstrap";


const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
});

const Small = layout.is("mobile");
const Large = layout.isAtLeast("phablet");

export let StudentProject = (props) => (
    <>
        <Large>
            <tr>
                <th scope="row">{props.title}</th>
                <td>{props.date}</td>
                <td>{props.children}</td>
            </tr>
        </Large>
        <Small>
            <Card body inverse style={{backgroundColor: "#333"}} className="my-4">
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText className="mt-3">{props.children}</CardText>
            </Card>
        </Small>
    </>
);

let StudentProjectsList = (props) => (
    <>
        <Large>
            <Table hover dark>
                <tbody>
                    {props.children}
                </tbody>
            </Table>
        </Large>
        <Small>
            {props.children}
        </Small>
    </>
);

export default function StudentProjects(props) {
    return (
        <StudentProjectsList>
            <StudentProject title="Robot explorateur de canalisation" date="2016">
                Création d’un robot explorateur de canalisations avec caméra embarquée. 
                Utilisation d’une Raspberry Pi programmée avec du C et du Bash.
            </StudentProject>
            <StudentProject title="La cybercriminalité" date="Sept. 2016 à Janv. 2017">
                Création d’un <a href="http://cybercriminalite.toile-libre.org">site web</a> présentant la cybercriminalité.
                <br />
                Utilisation de HTML/CSS et JavaScript (avec Angular.JS).
            </StudentProject>
            <StudentProject title="Jeu du pendu web" date="Fev. à Mai 2017">
                Création d’un jeu du pendu web avec système de comptes et serveur codé en Node.js.
                <br />
                <a href="https://github.com/422404/Pendu-JS">Voir sur github</a>
            </StudentProject>
            <StudentProject title="Appli d'aide aux infirmiers pour pélerinage" date="Oct. à Juin 2017">
                Projet tuteuré pour l’Hospitalité Aveyronnais consistant au 
                développement d’une partie du site réservé aux infirmiers pour aider 
                à l’administration de soins aux malades lors des pèlerinages annuels.
                <br />
                Utilisation de HTML/CSS, JavaScript (avec Angular.JS) et PHP (avec Symfony 2.x).
            </StudentProject>
            <StudentProject title="sensOCampus" date="2018">
                Conception d’un logiciel de  visualisation en temps réel de capteurs 
                placés partout sur le campus avec analyse à postériori avec Java et Swing.
            </StudentProject>
            <StudentProject title="neOCom" date="2019">
                Conception d’une application web de gestion des écrans connectés 
                du campus de Paul Sabatier à l’aide de Python avec Django.
                <br />
                L'application s'inscrit dans l'initiative ne<span className="text-warning">OC</span>ampus 
                qui vise à faire un campus connecté au service des étudiants et du personnel.
            </StudentProject>
        </StudentProjectsList>
    );
}
