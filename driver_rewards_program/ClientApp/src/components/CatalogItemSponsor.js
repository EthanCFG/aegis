import React, { Component } from "react";
import axios from "axios";

export default class CatalogItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Catalog_Item_Image_URL: props.Catalog_Item_Image_URL,
      Catalog_Item_Name: props.Catalog_Item_Name,
      Catalog_Item_Price: props.Catalog_Item_Price,
      Catalog_Item_ID: props.Catalog_Item_ID,
      Catalog_Item_Listing_URL: props.Catalog_Item_Listing_URL,
      Catalog_Item_Inventory: props.Catalog_Item_Inventory,
      value: 0,
      buttonDisabled: true,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePriceChangeSubmit = this.handlePriceChangeSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  async removeItem() {
    window.location.reload(false);
    const response = await axios.post(
      "http://localhost:3001/remove_catalog_item",
      {
        catalogItemID: this.state.Catalog_Item_ID,
      }
    );
    console.log(response);
  }

  async changeItemPrice() {
    window.location.reload(false);
    const response = await axios.post(
      "http://localhost:3001/change_item_price",
      {
        catalogItemID: this.state.Catalog_Item_ID,
        catalogItemPrice: this.state.value,
      }
    );
    console.log(response);
  }

  handlePriceChange(event) {
    this.setState({ value: event.target.value, buttonDisabled: false });
  }

  handlePriceChangeSubmit() {
    this.changeItemPrice();
  }

  handleDeleteSubmit() {
    this.removeItem();
  }

  handleImageClick() {
    const url = this.state.Catalog_Item_Listing_URL;
    console.log(url);
    var win = window.open(url, "_blank");
    win.focus();
  }

  render() {
    return (
      <li class="notification is-kinda-gray py-6 my-6">
        <img
          class="catalog-item-image"
          src={this.state.Catalog_Item_Image_URL}
          onClick={this.handleImageClick}
        />
        <h3 class="catalog-item-text">{this.state.Catalog_Item_Name}</h3>
        <p class="catalog-item-text">
          Price: {this.state.Catalog_Item_Price + " points"}
        </p>
        <p class="catalog-item-text">
          Inventory: {this.state.Catalog_Item_Inventory + " remaining"}
        </p>
        <button
          class="catalog-item-button-sponsor"
          onClick={() => this.handleDeleteSubmit()}
        >
          Delete
        </button>
        <button
          class="catalog-item-button"
          onClick={() => this.handlePriceChangeSubmit()}
          disabled={this.state.buttonDisabled}
        >
          Change Price
        </button>
        <input
          type="numeric"
          value={this.state.value}
          onChange={this.handlePriceChange}
        />
      </li>
    );
  }
}
