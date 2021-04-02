import React from 'react'

function SelectPizzaItem(props) {
    
    let addToOrder = ( ) =>{
        console.log('in addToOrder:', props.item.id );
    }

    return (
            <>
            <h3><strong>{props.item.name}</strong></h3>
            <img src={props.item.image_path}/>
            <p>{props.item.description}</p>
            <p>${props.item.price}</p>
            <button onClick={addToOrder} id="props.item.id">Add To Order</button>
            </>
        
    )
}

export default SelectPizzaItem
