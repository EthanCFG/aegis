import React, { Component, useState } from 'react';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import SelectDriver from './SelectDriver';
import SelectSponsor from './SelectSponsor';
import FirstNameForm from './FirstNameForm';
import LastNameForm from './LastNameForm';
import AddressForm from './AddressForm';
import StateDropDown from './StateDropDown';
import CityForm from './CityForm';
import ZipForm from './ZipCodeForm';
import PhoneNumberForm from './PhoneNumberForm';
import SignupButton from './SignupButton';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function PageCreateSponsorAccount (props) {

    let history = useHistory();

    const [enteredEmail, setEnteredEmail] = useState('');
      
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }


    const [enteredPassword, setEnteredPassword] = useState('');
        
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    }


    const [enteredFirstName, setEnteredFirstName] = useState('');
        
    const firstNameChangeHandler = (event) => {
      setEnteredFirstName(event.target.value);
    }


    const [enteredLastName, setEnteredLastName] = useState('');

    const lastNameChangeHandler = (event) => {
      setEnteredLastName(event.target.value);
    }


    const [enteredPhone, setEnteredPhone] = useState('');

    const phoneChangeHandler = (tempPhone) => {
      const selectedPhone = {
        tempPhone
      }
      setEnteredPhone(Object.values(selectedPhone)[0]);
    }


    const submitHandler = (event) => {
      event.preventDefault();
    
      const newSponsorData = {
        email: enteredEmail,
        password: enteredPassword,
        first: enteredFirstName,
        last: enteredLastName,
        phone: enteredPhone,
      }
    
      axios.post("http://localhost:3001/signup", {
        email: enteredEmail,
        password: enteredPassword,
        isSponsor: true,
        firstName: enteredFirstName,
        lastName: enteredLastName,
        phone: enteredPhone,
      }).then((resp) => {
        console.log(resp);
      });

      props.onCreateSponsorAccount(newSponsorData);
      history.push("/welcome");
    }

    return (
      <form onSubmit={submitHandler}>
        <div class="container">
          <div class="columns is-centered">
            <div class="columns is-half">
              <div class="notification is-white py-3 my-6">
                <h1 class="signup-header py-2 is-size-3 has-text-weight-semibold" style={{
                  marginBottom: 30
                }}>Account Creation</h1>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address..." onChange={emailChangeHandler} />
                    </Form.Group> 
                  </Form>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Choose a password..." onChange={passwordChangeHandler} />
                    </Form.Group> 
                  </Form>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20
                }}>

                <SelectDriver></SelectDriver>
                <SelectSponsor></SelectSponsor>
                </div>
                
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="name" placeholder="Enter first name..." onChange={firstNameChangeHandler} />
                    </Form.Group> 
                  </Form>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="name" placeholder="Enter last name..." onChange={lastNameChangeHandler} />
                        </Form.Group> 
                    </Form>
                </div>

                <PhoneNumberForm onPhoneEntered={phoneChangeHandler}></PhoneNumberForm>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 6,
                    marginBottom: 6,
                }}>
                    
                          <Button type='submit'>Sign Up</Button>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
}

export default PageCreateSponsorAccount;

//<Link to="/driver_home">
//</Link>