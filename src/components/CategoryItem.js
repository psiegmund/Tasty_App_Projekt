import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";


const CategoryItem = ({ img, id, name }) => {

    return (

        <Link to={`/category/${name}`} >
            <section className="categoryItemContainer">
                <p>{name}</p>
                <img src={img} alt={img} />
            </section>
        </Link>


    );
}

export default CategoryItem;