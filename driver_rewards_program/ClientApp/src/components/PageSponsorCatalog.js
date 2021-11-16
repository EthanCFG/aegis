import React, { Component, useEffect, useState } from "react";
import NavBarSponsor from "./NavBarSponsor";
<<<<<<< HEAD
import "bulma/css/bulma.min.css";
import axios from "axios";
import CatalogItemSponsor from "./CatalogItemSponsor";
import { Modal, Button } from "react-bootstrap";

class PageSponsorCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.fetchCatalogItems(),
      loading: true,
      showModal: false,
      ID: null,
    };
  }

  async addItem() {
    const response = await axios.post("http://localhost:3001/etsy", {
      listingID: this.state.ID,
      organizationID: localStorage.getItem("sponsorid"),
=======
import 'bulma/css/bulma.min.css';
import axios from "axios";
import CatalogItem from "./CatalogItem";
import { Modal, Button } from 'react-bootstrap';    


function PageSponsorCatalog () {

  const [temp, setTemp] = useState(null);
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [itemToAdd, setItemToAdd] = useState('');


  async function startAPI() {
    const response = await axios.post("http://localhost:3001/etsy", {
      id: localStorage.getItem('orgid'),
      listing: itemToAdd
>>>>>>> 3f7e4f87c212e452633edc55c5515fc12e3726b7
    });
    console.log(response);
  }

<<<<<<< HEAD
  async fetchCatalogItems() {
    const catalog_response = await axios.post(
      "http://localhost:3001/get_catalog",
      {
        organizationID: localStorage.getItem("sponsorid"),
=======
  async function fetchCatalogItems() {
    console.log(localStorage.getItem("orgid"));
    const catalog_response = await axios.post(
      "http://localhost:3001/get_catalog",
      {
        organizationID: localStorage.getItem("orgid")
>>>>>>> 3f7e4f87c212e452633edc55c5515fc12e3726b7
      }
    );
    setItems(catalog_response.data);
    setLoading(false);
  }

<<<<<<< HEAD
  showModalBox() {
    this.setState({ showModal: true });
  }

  hideModalBox() {
    this.setState({ showModal: false });
  }

  setItemToAdd(id) {
    this.setState({ ID: id });
    console.log(this.state.ID);
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <NavBarSponsor></NavBarSponsor>
          <div class="columns">
            <div class="notification is-white py-6 my-6">
              <div class="column is one-quarter">
                <p class="menu-label">Sponsor Catalog</p>
                <div class="buttons">
                  <button class="button">Add Item</button>
                </div>
                <div class="buttons">
                  <button class="button">Delete Item</button>
                </div>
                <div class="buttons">
                  <a href="sponsor_catalog">
                    <button class="button">Refresh Items</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="columns">
              <div class="column is-centered">
                <div class="notification is-white py-6 my-6">
                  <h1>Loading...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            {this.state.showModal ? (
              <Modal
                show={() => this.showModalBox()}
                onHide={() => this.hideModalBox()}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Item to the Catalog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Enter the items Listing ID from the Etsy Store"
                      onChange={(e) => this.setItemToAdd(e.target.value)}
                    ></input>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => this.hideModalBox()}
                  >
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => this.addItem()}>
                    Add Item
                  </Button>
                </Modal.Footer>
              </Modal>
            ) : null}
          </div>
          <NavBarSponsor></NavBarSponsor>
          <div class="columns">
            <div class="notification is-white py-6 my-6">
              <div class="column is one-quarter">
                <p class="menu-label">Sponsor Catalog</p>
                <div class="buttons">
                  <button class="button" onClick={() => this.showModalBox()}>
                    Add Item{" "}
                  </button>
                </div>
                <div class="buttons">
                  <a href="sponsor_catalog">
                    <button class="button">Refresh Items</button>
                  </a>
                </div>
              </div>
            </div>

            <div class="container">
              <div class="columns">
                <div class="column is-centered">
                  <div class="notification is-white py-6 my-6">
                    <ul>
                      {this.state.items.map((item) => {
                        console.log(item);
                        return (
                          <CatalogItemSponsor
                            Catalog_Item_Image_URL={item.Catalog_Item_Image_URL}
                            Catalog_Item_Name={item.Catalog_Item_Name}
                            Catalog_Item_Price={item.Catalog_Item_Price}
                            Catalog_Item_ID={item.Catalog_Item_ID}
                            Catalog_Item_Listing_URL={
                              item.Catalog_Item_Listing_URL
                            }
                            Catalog_Item_Inventory={item.Catalog_Item_Inventory}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
=======
  useEffect(() => {
    setItems(fetchCatalogItems);
  } ,[])

  // render() {
  //   return (
  //     <div>
  //       <NavBarSponsor></NavBarSponsor>
  //       <div class="columns">
  //         <div class="notification is-white py-6 my-6">
  //           <div class="column is one-quarter">
  //             <p class="menu-label">Sponsor Catalog</p>
  //             <div class="buttons">
  //               <button class="button">Add Item</button>
  //             </div>
  //             <div class="buttons">
  //               <button class="button">Delete Item</button>
  //             </div>
  //             <div class="buttons">
  //               <a href="sponsor_catalog">
  //                 <button class="button">Refresh Items</button>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div class="column is three-quarter">
  //           <div class="notification is-white py-6 my-6">
  //             <p class="title is-5">Sponsor Catalog</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div class="column">
  //         <div class="box"></div>
  //       </div>
  //     </div>
  //   );
  // }
  if (loading) {
    return (
      <div>
      <NavBarSponsor></NavBarSponsor>
      <div class="columns">
        <div class="notification is-white py-6 my-6">
          <div class="column is one-quarter">
            <p class="menu-label">Sponsor Catalog</p>
            <div class="buttons">
              <button class="button" onClick={() => setShowModal(true)}>Add Item</button>
            </div>
            <div class="buttons">
              <button class="button">Delete Item</button>
            </div>
            <div class="buttons">
              <a href="sponsor_catalog">
                <button class="button">Refresh Items</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-centered">
            <div class="notification is-white py-6 my-6">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  } else {
    return (
      
      //div
      //modal
      //</div>
      <div>
        <div>
          {showModal ? <Modal show={showModal}>
							<Modal.Header closeButton>
								<Modal.Title>Add Item to the Catalog</Modal.Title>
							</Modal.Header>
						<Modal.Body>
							<div class="control">
								<input class="input" type="text" placeholder="Enter the items Listing ID from the Etsy Store" onChange={e => setItemToAdd(e.target.value)}></input>
							</div>
						</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setShowModal(false)}>
									Close
								</Button>
								<Button variant="primary" onClick = {() => startAPI()}>
									Add Item
								</Button>
							</Modal.Footer>
					</Modal> : null}
        </div>
      <NavBarSponsor></NavBarSponsor>
      <div class="columns">
        <div class="notification is-white py-6 my-6">
          <div class="column is one-quarter">
            <p class="menu-label">Sponsor Catalog</p>
            <div class="buttons">
              <button class="button" onClick={() => setShowModal(true)}>Add Item</button>
            </div>
            <div class="buttons">
              <button class="button">Delete Item</button>
            </div>
            <div class="buttons">
              <a href="sponsor_catalog">
                <button class="button">Refresh Items</button>
              </a>
            </div>
          </div>
        </div>
            
      <div class="container">
        <div class="columns">
          <div class="column is-centered">
            <div class="notification is-white py-6 my-6">
              <ul>
                {items.map((item) => {
                  return new CatalogItem(item);
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
>>>>>>> 3f7e4f87c212e452633edc55c5515fc12e3726b7
  }
}

export default PageSponsorCatalog;
