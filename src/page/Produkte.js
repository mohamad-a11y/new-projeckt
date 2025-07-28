import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { cardData } from "../Components/dataProdukte";
import { cardData1 } from "../Components/dataProdukte1";
import Image1 from "../assets/porsche_manthey_2025_bak.jpg";


function Produkte() {
    return (
        <>
            <Header />
            <section className="home">

                <div className="container">
                    <div className="home-header">
                        <span>Join Us</span>
                        <h1>Alle Informationen für die Produkte</h1>
                        <p>Bei und ist Alles günstig</p>
                    </div>
                    <div className="btn-container">
                        <a href="#" className="btn btn-red">jetzt kaufen </a>
                        <a href="#" className="btn btn-transparent">Mehrere Produkte entdecken </a>
                    </div>
                    <div className="card-container">
                        {cardData.map((card) => {
                            const Icon = card.icon;
                            return (
                                <>
                                    <div className="card1" key={card.id}>
                                        <div
                                            className="icon1"
                                            style={{ backgroundColor: card.bgColor, color: card.color }}
                                        >
                                            <Icon size={28} />
                                        </div>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                        <div className="underline"></div>
                                        <button className={card.buttonClass}>{card.buttonText}</button>
                                    </div>

                                </>
                            );
                        })}

                    </div>
                </div>
            </section >
            <section>
                <>
                    <div className="zwei">
                        <h3>Unsere Produkte</h3>
                        <p className="p1">Hier Können Sie unsere produkte entdecken</p>
                        <div className="card-container2">
                            {cardData1.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div className="card2" key={card.id}>
                                        <div className="icon1" style={{ backgroundColor: card.bgColor, color: card.color }}>
                                            <Icon size={28} />
                                        </div>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                        <div className="underline"></div>
                                        <button className={card.buttonClass}>{card.buttonText}</button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            </section>
            <section className="preiserabatte">
                <>
                    <h1 className="h1">Rabatte</h1>
                    <div className="homeüberuns">
                        <p>Unsere Rabatte ist die beste Möglichkeit, um unsere Produkte zu kaufen</p>
                    </div><br></br>
                    <div className="btn-container1">
                        <a href="#" className="btn btn-transparent1">Lesen Sie weiter </a>
                    </div>
                </>
            </section>

            <Footer />
        </>
    );
}


export default Produkte;
