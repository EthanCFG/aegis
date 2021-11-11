import React, { useState, useEffect } from 'react';
import NavBarSponsor from './NavBarSponsor';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function PageDriverApplications (props) {

  const [driverapplications, setDriverApplications] = useState([]);
  //selectedDriver initialized to -1 to prevent erroneous post request on component load.
  //This -1 value is handled within the ocrresponding useEffect.
  const [selectedDriver, setSelectedDriver] = useState(-1);
  const [rejectedDriver, setRejectedDriver] = useState(-1);
  const [dataHasChanged, setDataHasChanged] = useState(false);

  useEffect(() => {

    async function fetchApps() {
      const app_response = await axios.post("http://localhost:3001/sponsor_application_list", {
        org_name: localStorage.getItem('sponsorname')
      })
      console.log(app_response.data);
      setDriverApplications(app_response.data);
    }

    fetchApps();
  }, [dataHasChanged]);

  useEffect(() => {
    async function getDriver() {
      const driver_response = await axios.post("http://localhost:3001/get_driver_data", {
        driver_id: selectedDriver
      })

      const add_driver_response = await axios.post("http://localhost:3001/accept_driver_application", {
        org_id1: driver_response.data[0].Organization_ID1,
        org_id2: driver_response.data[0].Organization_ID2,
        current_organization: localStorage.getItem('sponsorid'),
        driver_id: selectedDriver,
      })

      const remove_application_response = await axios.post("http://localhost:3001/remove_driver_application", {
        driver_id: selectedDriver,
        org_name: localStorage.getItem('sponsorname')
      })

      //using dataHasChanged state variable to reload and display updated data
      if (dataHasChanged == false) {
        setDataHasChanged(true);
      }
      else {
        setDataHasChanged(false);
      }
    }

    if (selectedDriver != -1) {
      getDriver();
    }
  }, [selectedDriver]);

  useEffect(() => {
    async function rejectDriver() {
      const remove_application_response = await axios.post("http://localhost:3001/remove_driver_application", {
        driver_id: rejectedDriver,
        org_name: localStorage.getItem('sponsorname')
      })

      //using dataHasChanged state variable to reload and display updated data
      if (dataHasChanged == false) {
        setDataHasChanged(true);
      }
      else {
        setDataHasChanged(false);
      }
    }

    if (rejectedDriver != -1) {
      rejectDriver();
    }
  }, [rejectedDriver]);
    

    return (
      <div>
        <NavBarSponsor></NavBarSponsor>
        <div class="container">
          <div class="columns is-centered">
            <div class="columns is-half">
              <div class="notification is-white py-3 my-6">
                <h1 class="signup-header py-2 is-size-2 has-text-weight-semibold" style={{
                  marginBottom: 30
                }}>Pending Driver Applications</h1>

                {driverapplications.map((application) => {
                  const ApplicationID = application.Application_ID;
                  const DriverID = application.Driver_ID;
                  const Reason = application.Application_Reason
                  return (
                    <div class="box" key={ApplicationID}>
                      <strong>Driver ID: </strong> <small>{DriverID}</small>
                      <p><strong>Application Reason: </strong> <weak>{Reason}</weak></p>
                      <Button onClick={() => setSelectedDriver(DriverID)}>Accept</Button> <Button onClick={() => setRejectedDriver(DriverID)}>Reject</Button>
                    </div>
                  )
                })}
              </div>
            </div>
        	</div>
          </div>
			  </div>
    )
}

export default PageDriverApplications;