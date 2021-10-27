import React from "react";

export default function CatalogItem(item) {
  return (
    <li class="notification is-kinda-gray py-6 my-6">
      {/* <img src={this.props.imgsrc} /> */}
      <img
        class="catalog-item-image"
        src={
          "https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social"
        }
      />
      <h3 class="catalog-item-text">{item.Catalog_Item_Name}</h3>
      <p class="catalog-item-text">Price: {item.Catalog_Item_Price}</p>
      <button class="catalog-item-button">Purchase</button>
    </li>
  );
}
