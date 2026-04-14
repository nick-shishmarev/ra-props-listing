import './App.css';
import { GetData } from './components/GetData/GetData';
import { Listing } from './components/Listing/Listing';
import type { ItemDisplayed } from './components/ListItem/Listtem';

function App() {
  const items: ItemDisplayed[] = GetData();

  return (
    <div>
      <Listing items = {items} />
    </div>
  )
}

export default App
