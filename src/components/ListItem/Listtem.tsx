import './ListItem.css';

export interface ItemDisplayed {
  listingId: number
  url: string
  title: string
  currencyCode: string
  price: string
  quantity: number
}

interface ListItemProps extends ItemDisplayed{
  gradeLow: number
  gradeHigh: number
}

export function ListItem({ 
  listingId, 
  title, 
  currencyCode, 
  price, 
  quantity, 
  url,
  gradeLow = 5,
  gradeHigh = 50
 } : ListItemProps) {

  let classStock;

  if (quantity <= gradeLow) {
    classStock = "stock-low";
  } else if (quantity <= gradeHigh) {
    classStock = "stock-medium";
  } else {
    classStock = "stock-high";
  };

  return (
    <div className="product-card" key={listingId}>
      <img className="product-image" src={url} />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="price-container">
          <div className="product-price">{currencyCode}{price}</div>
          <span className={"stock-badge " + classStock}>{quantity} left</span>
        </div>
      </div>
    </div>
  )
}