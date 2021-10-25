import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageWelcome from './components/PageWelcome';
import PageCreateAccount from './components/PageCreateAccount';
import PageCreateSponsorAccount from './components/PageCreateSponsorAccount';
import NavBar from './components/NavBar';
import PageDriverProfile from './components/PageDriverProfile';
import PageDriverHome from './components/PageDriverHome';
import PageSponsorProfile from './components/PageSponsorProfile';
import PageSponsorHome from './components/PageSponsorHome';
import PageUserType from './components/PageUserType';
import PageDriverCatalog from './components/PageDriverCatalog';
import PageSponsorCatalog from './components/PageSponsorCatalog';
import './custom.css';
import axios from 'axios';
import PageApplyToSponsor from './components/PageApplyToSponsor';

//Axios will be used to post user data to backend.

function App() {

    const [orgactive, setOrgActive] = useState(localStorage.getItem('orgactive'));
    const [pointsactive, setPointsActive] = useState(localStorage.getItem('activepoints'));

    const createDriverAccountHandler = (userData) => {
      console.log(userData);
    }

    const createSponsorAccountHandler = (sponsorData) => {
      console.log(sponsorData);
    }

    const [token, setToken] = useState();

    /*if (!token) {
      return ( 
        <PageWelcome setToken={setToken}></PageWelcome>
      )
    }*/

    
      return (
        <div>
          <Route exact path="/">
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <PageWelcome setToken={setToken}></PageWelcome>
          </Route>
          <Route path="/user_type">
            <PageUserType></PageUserType>
          </Route>
          <Route path="/driver_signup">
            <PageCreateAccount onCreateAccount={createDriverAccountHandler}></PageCreateAccount>
          </Route>
          <Route path="/sponsor_signup">
            <PageCreateSponsorAccount onCreateSponsorAccount={createSponsorAccountHandler}></PageCreateSponsorAccount>
          </Route>
          <Route path="/driver_home">
            <NavBar pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'} setActiveOrg={setOrgActive} setActivePoints={setPointsActive}></NavBar>
            <PageDriverHome
              active_org={orgactive}
              points={pointsactive}
              sponsor_image_url={'https://thumbs.dreamstime.com/b/letter-v-orange-red-rectangles-business-logo-placeholder-name-company-name-geometric-vector-logo-design-elements-169170579.jpg'}>
            </PageDriverHome>
          </Route>
          <Route path="/driver_profile">
            <NavBar pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'} setActiveOrg={setOrgActive} setActivePoints={setPointsActive}></NavBar>
            <PageDriverProfile
              pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'}
              points={pointsactive}>
            </PageDriverProfile>
          </Route>
          <Route path="/sponsor_home">
            <PageSponsorHome></PageSponsorHome>
          </Route>
          <Route path="/sponsor_profile">
            <PageSponsorProfile></PageSponsorProfile>
          </Route>
          <Route path="/driver_catalog">
            <NavBar pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'} setActiveOrg={setOrgActive} setActivePoints={setPointsActive}></NavBar>
            <PageDriverCatalog></PageDriverCatalog>
          </Route>
          <Route path="/sponsor_catalog">
            <PageSponsorCatalog></PageSponsorCatalog>
          </Route>
          <Route path="/sponsor_application">
            <NavBar pic={'https://cdn.britannica.com/70/211670-050-69254076/Jerry-Seinfeld-2019.jpg'} setActiveOrg={setOrgActive} setActivePoints={setPointsActive}></NavBar>
            <PageApplyToSponsor></PageApplyToSponsor>
          </Route>
      </div>
      )
    }
  

  export default App;