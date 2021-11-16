import React, { Component } from "react";
import CardCurrentSponsor from "./CardCurrentSponsor";
import CardTotalPoints from "./CardTotalPoints";
import CatalogItem from "./CatalogItemDriver";
import axios from "axios";

class PageDriverCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.fetchCatalogItems(),
      loading: true,
    };
  }

  async fetchCatalogItems() {
    console.log("Active Org: " + localStorage.getItem("orgactive_ID"));
    const catalog_response = await axios.post(
      "http://localhost:3001/get_catalog",
      {
        organizationID: localStorage.getItem("orgactive_ID"),
      }
    );
    this.setState({ items: catalog_response.data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div class="container">
          <div class="columns">
            <div class="column is-centered">
              <div class="notification is-white py-6 my-6">
                <h1>Loading...</h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class="container">
          <div class="columns">
            <div class="column is-one-half">
              <div class="notification is-white py-6 my-6">
                <CardTotalPoints
                  points={localStorage.getItem("activepoints")}
                />

                <ul>
                  {this.state.items.map((item) => {
                    return (
                      <CatalogItem
                        Catalog_Item_Image_URL={item.Catalog_Item_Image_URL}
                        Catalog_Item_Name={item.Catalog_Item_Name}
                        Catalog_Item_Price={item.Catalog_Item_Price}
                        Catalog_Item_ID={item.Catalog_Item_ID}
                        Catalog_Item_Listing_URL={item.Catalog_Item_Listing_URL}
                        Catalog_Item_Inventory={item.Catalog_Item_Inventory}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PageDriverCatalog;