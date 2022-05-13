import React from 'react'

export default function Home() {
    return (
        <div className="hero">
            {/* border-0 para tirar borda */}
            <div className="card bg-dark text-white border-0">
                {/* heigth 550 para alterar tamanho */}
                <img src="/assets/img/bg.jpg" className="card-img" alt="background" height="550px" />
                {/* colocado d-flex flex-column justify-content-center  para justificar vertical */}
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    {/* criada class container e passada todo o conteudo para dentro dela*/}
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SESSION ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS.</p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
