import React, {useState, useEffect} from 'react'
import data from "./data"
import {MenuItem} from "./MenuItem"
import FoodTypes from './FoodTypes'


// const allCategories = data.map((item) => item.category)
// const uniqueCategories = [...new Set(allCategories)];



const App = () => {
  const [menuItemState, setMenuItemState] = useState(data);
  const [foodTypes, setfoodTypes] = useState([])

  const uniqueCategories = ["all",...new Set(data.map((item) => item.category))];

  useEffect(() => {
    setfoodTypes(uniqueCategories)
  }, [])

  const filterItems = (category) => {
    if(category === "all") {
      setMenuItemState(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItemState(newItems)
  }

  return (
    <div className="container">
    <h1 className="container-heading">Our Menu</h1>

    <FoodTypes foodTypes={foodTypes} filterItems={filterItems}/>

    <ul className="menu-items">
      {menuItemState.map((item) => {
        return (
          <MenuItem key={item.id} {...item}/>
        )
      })}
    </ul>
  </div>
  )
}

export default App
