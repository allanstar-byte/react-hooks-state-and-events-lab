import React, { useState } from "react";

function Item({ name, category }) {

    const [className, setClassName] = useState(false);

    function handleItem() {
        setClassName((className) => !className);
    }

    return ( <
        li className = { className ? "in-cart" : "" } >
        <
        span > { name } < /span> <
        span className = "category" > { category } < /span> <
        button className = "add"
        onClick = { handleItem } > Add to Cart < /button> <
        /li>
    );
}

export default Item;