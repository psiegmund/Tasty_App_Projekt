import { Link } from "react-router-dom";

const MealItem = ({ img, id, name }) => {
    return (
        <Link to={`/detail/${id}`} >
            <section className="mealItemContainer">
                <div>
                    <h1>{name}</h1>
                    <img src={img} alt={img} />
                </div>
            </section>
        </Link >
    );
}

export default MealItem;