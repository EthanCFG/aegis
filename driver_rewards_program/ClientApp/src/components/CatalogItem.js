import React from "react";

export default function CatalogItem(item) {
  return (
    <li class="catalog-item">
      {/* <img src={this.props.imgsrc} /> */}
      <h3>{item.Catalog_Item_Name}</h3>
      <p>Price: {item.Catalog_Item_Price}</p>
    </li>
  );
}
