import React, {useState} from 'react'
import data from "./data"
import {MenuItem} from "./MenuItem"


const App = () => {
  const [menuItemState, setMenuItemState] = useState(data);

  return (
    <div className="container">
    <h1 className="container-heading">Our Menu</h1>

    <ul className="food-types">
      <li className="food-type">All</li>
      <li className="food-type">Breakfast</li>
      <li className="food-type">Lunch</li>
      <li className="food-type">Shakes</li>
    </ul>

    <ul className="menu-items">
      {menuItemState.map((item) => {
        return (
          <MenuItem key={item.id} {...item}/>
        )
      })}

      {/* <li className="menu-item">
        <img src="https://react-projects-5-menu.netlify.app/images/item-1.jpeg" alt="" />
        <div className="item__info">
          <header className="item__header">
            <h2 className="item__header__title">Buttermilk Pancakes</h2>
            <h3 className="item__header__price">$15</h3>
          </header>
          <p className="item__header__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Amet quam molestiae sequi, debitis laboriosam tempore,
            dolores, quaerat illum saepe temporibus neque hic enim
            recusandae necessitatibus esse commodi molestias
            quibusdam perspiciatis?
          </p>
        </div>
      </li> */}
    </ul>
  </div>
  )
}

export default App
