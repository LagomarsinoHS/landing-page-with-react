import React from "react";
import { Card } from "./card";

export function ContenedorCard() {
    return <div class="row text-center">
        <Card title="titulo1" descripcion="Descripcion 1" botonTxt="TextodeBoton1" />
        <Card title="titulo2" descripcion="Descripcion 2" botonTxt="TextodeBoton2" />
        <Card title="titulo3" descripcion="Descripcion 3" botonTxt="TextodeBoton3" />
        <Card title="titulo4" descripcion="Descripcion 4" botonTxt="TextodeBoton4" />
    </div>
}