import React, {Component} from "react";

function CardCurrentSponsor (props) {
    return (
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Current Sponsor
                </p>
                <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
            <div class="card-content">
                <div class="content">
                    <img src={props.sponsor_image_url}></img>
                    <br></br>
                </div>
            </div>
            <div class="card-content has-text-centered">
              <h1><strong>{props.sponsor}</strong></h1>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Change</a>
              <a href="#" class="card-footer-item">Visit Sponsor</a>
            </footer>
        </div>
    )
}

export default CardCurrentSponsor;