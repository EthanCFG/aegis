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
      canPurchase:
        props.Catalog_Item_Price <= localStorage.getItem("activepoints") &&
        props.Catalog_Item_Inventory > 0,
    };
    console.log("Can purchase: " + this.state.canPurchase);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
  }

  async removePoints() {
    const url =
      "http://localhost:3001/add_driver_points" +
      localStorage.getItem("orgactive_ID");
    console.log(url);

    console.log("updating activepoints");
    localStorage.setItem(
      "activepoints",
      Number(localStorage.getItem("activepoints")) -
        this.state.Catalog_Item_Price
    );

    window.location.reload(false);

    const catalog_response = await axios.post(url, {
      pointChange: -this.state.Catalog_Item_Price,
      driverID: localStorage.getItem("id"),
      organizationID: localStorage.getItem("orgactive_ID"),
      reason: "purchased item",
    });
  }

  async addItemToCart() {
    const catalog_response = await axios.post(
      "http://localhost:3001/add_to_cart",
      {
        catalogItemID: this.state.Catalog_Item_ID,
        driverID: localStorage.getItem("id"),
        itemInventory: this.state.Catalog_Item_Inventory,
        purchasePrice: this.state.Catalog_Item_Price,
        purchaseName: this.state.Catalog_Item_Name,
      }
    );
  }

  handleImageClick() {
    const url = this.state.Catalog_Item_Listing_URL;
    var win = window.open(url, "_blank");
    if (win != null) {
      win.focus();
    }
  }

  handlePurchaseClick() {
    console.log("purchase");
    this.addItemToCart();
    this.removePoints();
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
          class="catalog-item-button"
          disabled={!this.state.canPurchase || localStorage.getItem("usertype") == "admin"}
          onClick={this.handlePurchaseClick}
        >
          Purchase
        </button>
      </li>
    );
  }
}
