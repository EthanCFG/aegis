import React, { Component } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import LoginButton from './LoginButton';

function PageSignIn () {
    return (
        <div class="container">
          <div class="columns is-centered">
            <div class="columns is-half">
              <div class="notification is-white py-3 my-6">
                <h1 class="login-header py-2 is-size-3 has-text-weight-semibold" style={{
                  marginBottom: 30
                }}>Sign In</h1>
                <EmailForm></EmailForm>
                <PasswordForm></PasswordForm>
                <LoginButton></LoginButton>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PageSignIn;