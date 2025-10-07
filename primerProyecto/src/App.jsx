import React from "react";
import Navbar from "./Components/Navbar";
import CardsSection from "./Components/CardSection";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import Formulario from "./Components/Formulario";

function App() {
  return (
    <>
      <Navbar />
      <CardsSection />
      <h2 className="text-center mt-5">Contacto</h2>
      <div className="container my-4">
        <Formulario /> {/* Aquí se renderiza el formulario */}
      </div>
      <Footer />
    </>
  );
}

export default App;