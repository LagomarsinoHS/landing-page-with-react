import React from "react";

export function Footer(props) {
    return (
        <footer class="py-5 bg-dark">
            <div class="container">
                <p class="m-0 text-center text-white">{props.copyright}</p>
            </div>
        </footer>
    )
}