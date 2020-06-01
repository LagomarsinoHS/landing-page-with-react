import React from "react";

export function Jumbotron(props) {
    return (
        <header class="jumbotron my-4">
            <h1 class="display-3">{props.pageName}</h1>
            <p class="lead">{props.description}</p>
            <a href="#" class="btn btn-primary btn-lg">{props.callToAction}</a>
        </header>
    )
}