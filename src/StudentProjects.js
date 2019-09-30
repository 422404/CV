import React from "react";
import {Table} from "reactstrap";

export default function StudentProjects() {
    return (
        <Table hover dark>
            <tbody>
                <tr>
                    <th scope="row">Robot explorateur de canalisation</th>
                    <td>2016</td>
                    <td>
                        Création d’un robot explorateur de canalisations avec caméra embarquée. 
                        Utilisation d’une Raspberry Pi programmée avec du C et du Bash
                    </td>
                </tr>
                <tr>
                    <th scope="row">La cybercriminalité</th>
                    <td>Sept. 2016 à Janv. 2017</td>
                    <td>
                        Création d’un <a href="http://cybercriminalite.toile-libre.org">site web</a> présentant la cybercriminalité.
                        <br />
                        Utilisation de HTML/CSS et JavaScript (avec Angular.JS).
                    </td>
                </tr>
                <tr>
                    <th scope="row">Jeu du pendu web</th>
                    <td>Fev. à Mai 2017</td>
                    <td>
                        Création d’un jeu du pendu web avec système de comptes et serveur codé en Node.js.
                        <br />
                        <a href="https://github.com/422404/Pendu-JS">Voir sur github</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">Appli d'aide aux infirmiers pour pélerinage</th>
                    <td>Oct. à Juin 2017</td>
                    <td>
                        Projet tuteuré pour l’Hospitalité Aveyronnais consistant au 
                        développement d’une partie du site réservé aux infirmiers pour aider 
                        à l’administration de soins aux malades lors des pèlerinages annuels.
                        <br />
                        Utilisation de HTML/CSS, JavaScript (avec Angular.JS) et PHP (avec Symfony 2.x).
                    </td>
                </tr>
                <tr>
                    <th scope="row">sens<span className="text-warning">OC</span>ampus</th>
                    <td>2018</td>
                    <td>
                        Conception d’un logiciel de  visualisation en temps réel de capteurs 
                        placés partout sur le campus avec analyse à postériori avec Java et Swing.
                    </td>
                </tr>
                <tr>
                    <th scope="row">ne<span className="text-warning">OC</span>om</th>
                    <td>2019</td>
                    <td>
                        Conception d’une application web de gestion des écrans connectés 
                        du campus de Paul Sabatier à l’aide de Python avec Django.
                        <br />
                        L'application s'inscrit dans l'initiative ne<span className="text-warning">OC</span>ampus 
                        qui vise à faire un campus connecté au service des étudiants et du personnel.
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
