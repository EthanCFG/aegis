import React, { Component } from "react";
import CardCurrentSponsor from "./CardCurrentSponsor";
import CardTotalPoints from "./CardTotalPoints";
import CatalogItem from "./CatalogItem";
import axios from "axios";

class PageDriverCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.fetchCatalogItems(), loading: true };
  }

  async fetchCatalogItems() {
    const catalog_response = await axios.post(
      "http://localhost:3001/get_catalog",
      {
        organizationID: 1,
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
              <div class="notification is-white py-6 my-6"></div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
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
      );
    }
  }
}

export default PageDriverCatalog;
