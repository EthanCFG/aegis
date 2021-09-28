import React, { Component } from "react";

function ProfilePicture(props) {
    return (
        <div class="profile-page-image-cropper">
            <figure class="image">
                <img src={props.pic}></img>
            </figure>
        </div>
    )
}

export default ProfilePicture;