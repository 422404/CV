import React from "react";
import {Container, Card, CardText, CardImg, CardBody} from "reactstrap";

export default function Hacking() {
    let cardStyle = {
        backgroundColor: "rgba(255,255,255, 0.075)",
        textAlign: "justify"
    };
    return (
        <Container className="pb-5">
            <h2 className="mt-5">La Nintendo 3DS</h2>
            <Card body inverse style={cardStyle} className="m-4">
                <CardText>
                    J'ai programmé en C et assembleur ARM sur la console  portable Nintendo 3DS 
                    au moment où la scène du hacking sur cette console battait son plein, ce qui 
                    m'a permis de davantage comprendre l'architecture de la console.
                    Certain de <a href="https://github.com/422404?tab=repositories">mes dépôts</a> sont 
                    des forks de programmes/librairies fait(es) par la communauté pour la 3DS.
                    C'est ainsi que j'ai amélioré ma compréhension du matériel, de 
                    la mémoire, des tâches du kernel, de la manipulation de mémoire et des 
                    instructions de processus.
                    <br />
                    C'était fun !
                </CardText>
            </Card>

            <h2 className="mt-5">Microcorruption CTF</h2>
            <Card inverse style={cardStyle} className="m-4">
                <CardImg top src="/microcorruption.png"
                    style={{cursor: "pointer"}}
                    onClick={() => window.location = "/microcorruption.png"} />
                <CardBody>
                    <CardText>
                        Le site <a href="microcorruption.com">microcorruption.com</a> met
                        en scène l'ouverture de cadenas connectés en abusant de leurs failles
                        logicielles avec l'aide d'un debugger qui permet la visualisation 
                        de la mémoire de ces derniers.
                        Les défis mis à disposition vont en difficulté croissante
                        au fur et à mesure que des protections sont ajoutées.
                        <br />
                        J'ai trouvé ce CTF très intérêssant même si je n'ai pas terminé tous
                        les niveaux (15 sur 19) et j'ai réussi à faire un bon classement (1432 sur 62312).
                        Je comptes bien le finir un jour !
                    </CardText>
                </CardBody>
            </Card>
        </Container>
    );
}
