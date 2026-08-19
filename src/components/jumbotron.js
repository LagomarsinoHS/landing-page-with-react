import React from "react";

export function Jumbotron(props) {
    return (
        <header className="p-5 mb-4 bg-light rounded-3 my-4">
            <h1 className="display-3">{props.pageName}</h1>
            <p className="lead">{props.description}</p>
            <button type="button" className="btn btn-primary btn-lg">{props.callToAction}</button>
        </header>
    );
}
