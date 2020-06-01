import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { ContenedorCard } from "./contenedorCard";
import { Footer} from "./footer";


export function Main() {
    return (
        <>
            {/* Navbar */}
            <Navbar menu1={"Inicio"} menu2={"Equipos"} menu3={"Historia"} menu1={"Contacto"} />
            {/* fin Navbar */}
            <div class="container">
                {/* Jumbotron  */}
                < Jumbotron pageName={"Primera página en React"} description={"Realizada por Humberto, Leonardo y Eugenio"} callToAction={"Haz click aquí!"}/>                
                {/* Fin Jumbotron */}
                <ContenedorCard />
            </div>
            {/* Footer */}
            <Footer copyright={`Copyright \u00a9 Your Website 2019`}/>
            {/* Fin Footer */}
        </>
    )
}


//default export contenedor;