import React from "react";
import {Container, Card, CardTitle,
        CardText, CardLink, CardBody} from "reactstrap";

export default function MyProjects() {
    let cardStyle = {
        backgroundColor: "rgba(255,255,255, 0.075)",
        textAlign: "justify"
    };
    return (
        <Container className="pb-5">
            <Card inverse style={{...cardStyle, flexDirection: "row"}} className="my-4">
                <img height="200rem" width="200rem" src="https://avatars1.githubusercontent.com/u/22260771" className="d-none d-lg-inline-block" alt="Github profile pic" />
                <CardBody>
                    <CardTitle>422404</CardTitle>
                    <CardText>
                        C'est mon profile Github qui me sert pour mes projets personnels ou étudiants.
                        <br />
                        Il y a de grandes chances que ce que je programme soit ici.
                        <br />
                        <CardLink href="https://github.com/422404" className="btn btn-primary mt-3 stretched-link">
                            Voir sur github
                        </CardLink>
                    </CardText>
                </CardBody>
            </Card>

            <h2 className="mt-5">Mes projets actifs</h2>
            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>PipouScript</CardTitle>
                <CardText>
                    J'ai pour projet de construire mon propre langage de programmation.
                    <br />
                    Pour celà je suis en train de programmer un interprêteur en C à mes heures
                    perdues. PipouScript aura un modèle objet semblable à JavaScript et une
                    syntaxe proche de SmallTalk qui est pour moi une des plus belles.
                    <br />
                    <CardLink href="https://github.com/422404/PipouScript" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>GameStreaming</CardTitle>
                <CardText>
                    Afin d'apprendre à utiliser Docker je compte essayer de construire
                    un mini service de jeu vidéo à la demande. Dans l'idéal ce projet
                    aurait une forte ressemblance avec la Google Stadia dans le sens
                    où je souhaiterai faire un site web qui permet de lancer des conteneurs
                    qui sont constitués d'un jeu vidéo et de tout le nécéssaire pour streamer
                    l'image du jeu et recevoir les entrées clavier/souris du joueur.
                    <br />
                    <CardLink href="https://github.com/422404/GameStreaming" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>MinecraftLauncherCLI</CardTitle>
                <CardText>
                    Un petit launcher minecraft en ligne de commande programmé en Python
                    et qui s'inscrit dans le cadre de mon plus vaste projet GameStreaming !
                    <br />
                    <CardLink href="https://github.com/422404/MinecraftLauncherCLI" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            <h2 className="mt-5">Mes projets stoppés</h2>
            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>Lang</CardTitle>
                <CardText>
                    Premier jet d'idées de compilateur/interprêteur. Lang aurait été un
                    language fonctionnant un peu comme SmallTalk mais en moins élégant.
                    Ce projet de compilateur qui ne s'est arré qu'à la transformation du
                    code en AST m'a permis de me familiariser avec le language Rust.
                    <br />
                    <CardLink href="https://github.com/422404/MinecraftLauncherCLILang" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>Fr4mework</CardTitle>
                <CardText>
                    A la suite de la découverte de React.js et Hyperapp je me suis mis
                    en tête d'éssayer de faire ma propre petite librairie qui gère un DOM virtuel
                    et qui utilise JSX.
                    <br />
                    <CardLink href="https://github.com/422404/Fr4mework" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            <Card body inverse style={cardStyle} className="my-4">
                <CardTitle>MuchServer</CardTitle>
                <CardText>
                    Après avoir utilisé Symfony pour mon projet tuteuré de seconde année de DUT
                    Informatique j'ai voulu éssayer de faire un tout petit framework web en Node.JS
                    qui gère les templates avec un langage de template créé pour l'occasion et un système
                    de routes.
                    <i>En y réfléchissant, c'est peut-être là que mon idée d'interprêteur est née.</i>
                    <br />
                    <CardLink href="https://github.com/422404/MuchServer" className="btn btn-primary mt-3">
                        Voir sur github
                    </CardLink>
                </CardText>
            </Card>

            { /*<Mobile.Yes>
                <div style={{display: "inline-flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <a href="https://github.com"
                            className="d-inline-block btn btn-primary m-1">Hello world!</a>
                    <a href="https://reddit.com"
                            className="d-inline-block btn btn-primary m-1">Wow!</a>
                </div>
            </Mobile.Yes>
            <Mobile.No>
                <GithubLinks light>
                    <a href="https://github.com"
                            className="d-inline-block btn btn-primary m-1">Hello world!</a>
                    <a href="https://reddit.com"
                            className="d-inline-block btn btn-primary m-1">Wow!</a>
                </GithubLinks>
            </Mobile.No>*/ }
        </Container>
    );
}
