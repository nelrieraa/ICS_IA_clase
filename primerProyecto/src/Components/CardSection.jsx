import React from "react";

function CardsSection() {
  const cards = Array(4).fill({
    img: "https://via.placeholder.com/150", // reemplaza con tu imagen real
    title: "Explora la Naturaleza",
    text: "Descubre cómo cuidar el medio ambiente y conectar con la vida natural."
  });

  return (
    <section id="proyectos" className="py-5" style={{backgroundColor: "#e8f5e9"}}>
      <div className="container">
        <div className="row">
          {cards.map((card, i) => (
            <div key={i} className="col-md-3 mb-4">
              <div className="card shadow-sm">
                <img src="/images/foto1.jpg" alt="Naturaleza" />
                <div className="card-body">
                  <h5 className="card-title text-success">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardsSection;
