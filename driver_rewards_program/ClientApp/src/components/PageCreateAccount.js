import React, { Component, useState } from 'react';
import StateDropDown from './StateDropDown';
import CityForm from './CityForm';
import ZipForm from './ZipCodeForm';
import PhoneNumberForm from './PhoneNumberForm';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function PageCreateAccount (props) {

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

    
    const [enteredAddress, setEnteredAddress] = useState('');

    const addressChangeHandler = (event) => {
      setEnteredAddress(event.target.value);
    }


    const [currentState, setCurrentState] = useState('');

    const saveStateDataHandler = (enteredSelectedState) => {
      const selectedState = {
        enteredSelectedState
      }
      setCurrentState(Object.values(selectedState)[0]);
    }


    const [enteredCity, setEnteredCity] = useState('');

    const cityChangeHandler = (tempCity) => {
      const selectedCity = {
        tempCity
      }
      setEnteredCity(Object.values(selectedCity)[0]);
    }


    const [enteredZip, setEnteredZip] = useState('');

    const zipChangeHandler = (tempZip) => {
      const selectedZip = {
        tempZip
      }
      setEnteredZip(Object.values(selectedZip)[0]);
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
    
      const newUserData = {
        email: enteredEmail,
        password: enteredPassword,
        first: enteredFirstName,
        last: enteredLastName,
        address: enteredAddress,
        state: currentState,
        city: enteredCity,
        zip: enteredZip,
        phone: enteredPhone,
      }
    
      axios.post("http://localhost:3001/signup", {
        email: enteredEmail,
        password: enteredPassword,
        isDriver: true,
        firstName: enteredFirstName,
        lastName: enteredLastName,
        address: enteredAddress,
        state: currentState,
        city: enteredCity,
        zip: enteredZip,
        phone: enteredPhone,
      }).then((resp) => {
        console.log(resp);
      })
      .catch(error => console.error(error));

      props.onCreateAccount(newUserData);
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

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address:</Form.Label>
                        <Form.Control type="address" placeholder="Enter street address..." onChange={addressChangeHandler} />
                        </Form.Group>
                    </Form>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "normal",
                  justifyContent: "center",
                  gap: 20
                }}>
                  <StateDropDown onSaveStateData={saveStateDataHandler} ></StateDropDown>
                  <CityForm onCityEntered={cityChangeHandler}></CityForm>
                  <ZipForm onZipEntered={zipChangeHandler}></ZipForm>
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

export default PageCreateAccount;

//<Link to="/driver_home">
//</Link>