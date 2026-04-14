import type { ItemDisplayed } from '../ListItem/Listtem';

import data from '../../../data/etsy.json';

export function GetData() {

  let items: ItemDisplayed[] = [];

  items = data
  .filter((item) => item.title !== undefined)
  .map((item) => {
    const { 
      listing_id: listingId, 
      price, 
      quantity, 
      MainImage 
    } = item;

    let { 
      title, 
      currency_code: currencyCode, 
    } = item;

    const url = MainImage.url_570xN;

    if (title.length > 50) title = title.slice(0, 50) + "...";

    if (currencyCode === "USD") currencyCode = "$";
    if (currencyCode === "GBP") currencyCode = "£";
    if (currencyCode === "EUR") currencyCode = "€";
    
    const thing: ItemDisplayed = { 
      listingId, 
      title, 
      currencyCode, 
      price, 
      quantity, 
      url 
    };

    return thing;
  });

  return items;
}