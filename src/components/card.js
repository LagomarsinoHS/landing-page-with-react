import React from "react";

export function Card(props) {
    return (
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <img className="card-img-top" src="http://placehold.it/500x325" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.descripcion}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary">{props.botonTxt}</button>
                </div>
            </div>
        </div>
    );
}
