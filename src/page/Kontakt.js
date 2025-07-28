import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
export default Kontakt;
function Kontakt() {
    return (
        <>
            <Header />
            <section className="kontakt">
                <div>
                    <h1>Kontaktieren Sie uns</h1>
                    <p>Wir freuen uns, von Ihnen zu hören! Bitte füllen Sie das unten</p>
                    <p>stehende Formular aus, um uns zu kontaktieren. Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                </div>
            
            <div className="kontakt-formular">
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <br></br>
                    <label htmlFor="email">E-Mail:</label>
                    <input type="email" id="email" name="email" required />
                    <br></br>
                    <label htmlFor="nachricht">Nachricht:</label>
                    <textarea id="nachricht" name="nachricht" rows="4" required></textarea>

                    <button type="submit" className="btn btn-red">Absenden</button>
                </form>
            </div>
        </section>
          
        </>
    );
}