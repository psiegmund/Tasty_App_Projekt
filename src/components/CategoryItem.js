import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CategoryItem = ({ img, id, name, i }) => {
  console.log(i);

  return (
    <Link to={`/category/${name}`}>
      <section
        style={{ backgroundColor: i % 2 === 0 ? "#ffab61e8" : "#FF6E85" }}
        className="categoryItemContainer"
      >
        <p>{name}</p>
        <img src={img} alt={img} />
      </section>
    </Link>
  );
};

export default CategoryItem;
