import SelectPizzaItem from '../SelectPizzaItem/SelectPizzaItem';
import React from 'react'
import { useSelector} from 'react-redux';


function SelectPizza() {
    const pizza = useSelector( (store)=>{
        return store.pizzaMenu;
    })
    return (
        <div>
            <h2>Pizza Menu</h2>
            <div>
                { pizza.map( ( item )=>
                    <SelectPizzaItem item={ item } key={ item.id } />
                )}
            </div>
        </div>
    )
}

export default SelectPizza
