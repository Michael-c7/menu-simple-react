import React from 'react'

export const MenuItem = ({title, category, price, img, desc,}) => {
    return (
        <li className="menu-item" data-category={category}>
            <img src={img} alt="" />
            <div className="item__info">
            <header className="item__header">
                <h2 className="item__header__title">{title}</h2>
                <h3 className="item__header__price">${price}</h3>
            </header>
            <p className="item__header__text">{desc}</p>
            </div>
      </li>
    )
}
