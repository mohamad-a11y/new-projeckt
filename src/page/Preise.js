import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { cardData } from "../Components/dataPreis";


function Preise() {
    return (
        <>
            <Header />
            <section className="home">

                <div className="container">
                    <div className="home-header">
                        <span>Join Us</span>
                        <h1>Die Preise für die Produkte</h1>
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
                                <div className="card2" key={card.id}>
                                    <div
                                        className="icon"
                                        style={{ backgroundColor: card.bgColor, color: card.color }}
                                    >

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
            </section >
            
            <Footer />
        </>
    );
}



export default Preise;
