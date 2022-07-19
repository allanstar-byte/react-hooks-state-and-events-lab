import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

    const [filterBy, SetFilterBy] = useState("Filter by category");

    function handleFilter(event) {
        SetFilterBy(event.target.value)
    }

    const displayItem = items.filter((item) => {
        if (filterBy === "Filter by category") {
            return true;
        } else {
            return item.category === filterBy;
        }
    })

    const itemList = displayItem.map((item) => ( <
        Item key = { item.id }
        name = { item.name }
        category = { item.category }
        />
    ))

    return ( <
        div className = "ShoppingList" >
        <
        div className = "Filter" >
        <
        select name = "filter"
        onChange = { handleFilter } >
        <
        option value = "All" > Filter by category < /option> <
        option value = "Produce" > Produce < /option> <
        option value = "Dairy" > Dairy < /option> <
        option value = "Dessert" > Dessert < /option> <
        /select> <
        /div> <
        ul className = "Items" > { itemList } <
        /ul> <
        /div>
    );
}

export default ShoppingList;