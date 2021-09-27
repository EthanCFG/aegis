import React, {Component} from "react";
import ProfilePicture from "./ProfilePicture";

function CardTotalPoints () {
    return (
        <div class="card" style={{ marginTop: 20, marginBottom: 0 }}>
            <header class="card-header">
                <p class="card-header-title">
                Total Points
                </p>
                <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
            <div class="card-content">
                <div class="content has-text-centered">
                    <p class="title">2,500</p>
                </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">View Points History</a>
            </footer>
        </div>
    )
}

export default CardTotalPoints;