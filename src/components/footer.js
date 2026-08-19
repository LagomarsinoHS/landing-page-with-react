import React from "react";

export function Footer(props) {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <p className="m-0 text-center text-white">{props.copyright}</p>
            </div>
        </footer>
    );
}
