import React from 'react'

const FoodTypes = ({foodTypes, filterItems}) => {
    return (
        <ul className="food-types">
            {foodTypes.map((foodType, index) => {
                return (
                    <li key={index} className="food-type" onClick={() => filterItems(`${foodType}`)}>{foodType}</li>
                )
            })}
        </ul>
    )
}

export default FoodTypes;
