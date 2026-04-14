import "./Listing.css";
import { ListItem, type ItemDisplayed } from "../ListItem/Listtem";

const gradeLow = 10;
const gradeHigh = 20;

interface ListingProps {
  items: ItemDisplayed[]
}

export function Listing({items=[]}: ListingProps) {

  return (
    <div className="container">
      <div className="product-grid">
        {items.map((item: ItemDisplayed) => (
          <ListItem {...{...item, gradeLow, gradeHigh}} />
        ))}
      </div>
    </div>
  )
}
