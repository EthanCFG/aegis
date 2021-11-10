import React, { Component } from "react";
import NavBarSponsor from "./NavBarSponsor";
import axios from "axios";
import CatalogItem from "./CatalogItem";

class PageSponsorCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: this.startAPI(),
      items: this.fetchCatalogItems(),
      loading: true,
    };
  }

  async startAPI() {
    const response = await axios.post("http://localhost:3001/etsy");
    console.log(response);
  }

  async fetchCatalogItems() {
    console.log(localStorage.getItem("activeorg"));
    const catalog_response = await axios.post(
      "http://localhost:3001/get_catalog",
      {
        organizationID: localStorage.getItem("activeorg")
          ? localStorage.getItem("activeorg")
          : 1,
      }
    );
    this.setState({ items: catalog_response.data, loading: false });
  }

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
              
        <div class="container">
          <div class="columns">
            <div class="column is-centered">
              <div class="notification is-white py-6 my-6">
                <ul>
                  {this.state.items.map((item) => {
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
    }
  }
}

export default PageSponsorCatalog;
