import { cardData } from "../Components/dataHome";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Image1 from "../assets/porsche_manthey_2025_bak.jpg";

function Home() {
    return (
        <>
            <Header />
            <section className="home">
                <div className="container">
                    <div className="home-header">
                        <span>Join Us</span>
                        <h1>Das Bestes Projeckt für immer</h1>
                        <p>das ist ein Projeckt, das ich ihm mit Reactjs gearbeitet habe, und das ist mein erster Project</p>   
                    </div>
                    <div className="btn-container">
                            <a href="#" className="btn btn-red">Lesen Sie weiter </a>
                            <a href="#" className="btn btn-transparent">Jetzt mit Lernen starten </a>
                        </div>
                    <div className="card-container">
                        {cardData.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div className="card" key={card.id}>
                                    <div
                                        className="icon"
                                        style={{ backgroundColor: card.bgColor, color: card.color }}
                                    >
                                        <Icon size={28} />
                                    </div>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <div className="underline"></div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section >
            <section>
                <>
                    <h1 className="h1">Über uns</h1>
                    <div className="homeüberuns">
                        <img src={Image1} alt="porsche" />
                        <div className="wir">
                            <h3> Wir arbeiten mit namhaften Partnern zusammen</h3> <br></br>
                            <p>Wir kooperieren mit renommierten Marken, <br></br>um außergewöhnliche Ergebnisse zu erzielen und gemeinsam wirkungsvolle Marketingstrategien zu entwickeln.<br></br>
                                Für die Umsetzung unserer Projekte setzen wir auf moderne Technologien und kreative Werkzeuge wie<br></br> Adobe Illustrator, Photoshop, HTML5, JavaScript, React, WordPress und Flutter<br></br> für digitale Lösungen, die nicht nur funktionieren, sondern begeistern.</p>
                            <br></br> <br></br> <br></br>
                            <a href="#" className="btn btn-red">Lesen Sie weiter </a>
                        </div>

                    </div>
                </>
            </section>
            <Footer />
        </>
    )
}
export default Home;