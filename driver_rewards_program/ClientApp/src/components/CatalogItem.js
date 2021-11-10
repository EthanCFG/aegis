import React from "react";

export default function CatalogItem(item) {
  return (
    <div class="card">
  <div class="card-image">
        <figure class="card-image has-text-centered px-6">
      <img src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c82315a6-ac99-464a-a753-c26bc0fb647d/bvlatuR/std/1200x628/lhd-model-3-social" alt="Placeholder image">
    </img>
        </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </img>
            </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{item.Catalog_Item_Name}</p>
        <p class="subtitle is-6">{item.Catalog_Item_Price}</p>
      </div>
    </div>

        <div class="content">
        <button class="catalog-item-button">Purchase</button>
      <div> </div>
    </div>
  </div>
</div>
  );
}