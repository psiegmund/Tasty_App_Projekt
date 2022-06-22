import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import ModalVideo from "react-modal-video";

const DetailList = () => {
  const [detail, setDetail] = useState([]);
  // const [youtube, setYoutube] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((json) => setDetail(json.meals[0]));
  }, [id]);

  console.log(detail);

  const instructionsList = () => {
    const instArray = detail.strInstructions.split(".");

    console.log(instArray);

    instArray.pop();

    console.log(instArray);

    const listItems = instArray.map((item, i) => (
      <li key={i} className="instructionsList">
        {item}.
      </li>
    ));
    return <ul>{listItems}</ul>;
  };

  const ingredientsList = () => {
    for (let i = 1; i < 21; i++) {
      // let requestIngredient = "strIngredient" + i;
      // let requestMeasure = "strMeasure" + i;
      // let detArr = [];
      // detArr += detail[requestIngredient];
      // detArr += detail[requestMeasure];

      // console.log(detArr);
      // console.log(detail[requestIngredient]);

      // let ingredient = detail[requestIngredient];

      // let test = ingredient.map((elt) =>
      //   console.log(elt))

      // console.log(ingredient);

      // console.log(detail[requestMeasure]);
      // return <tr><td>{detail[requestIngredient]}</td><td>{detail[requestMeasure]}</td></tr>
    }

  }

  return (
    <section className="detailListContainer">
      <img src={detail.strMealThumb} alt="Alt" />

      <div className="descriptionContainer">
        <div>
          <h1>{detail.strMeal}</h1>
          {detail.strInstructions ? instructionsList() : null}
        </div>
        <div>
          <h1>Ingredients</h1>

          <table id="ingredientsTable">
            {ingredientsList()}
            {/* <tr>
              <td>{detail.strIngredient1}</td>
              <td>{detail.strIngredient2}</td>
              <td>{detail.strIngredient3}</td>
              <td>{detail.strIngredient4}</td>
              <td>{detail.strIngredient5}</td>
              <td>{detail.strIngredient6}</td>
              <td>{detail.strIngredient7}</td>
              <td>{detail.strIngredient8}</td>
              <td>{detail.strIngredient9}</td>
              <td>{detail.strIngredient10}</td>
              <td>{detail.strIngredient11}</td>
              <td>{detail.strIngredient12}</td>
              <td>{detail.strIngredient13}</td>
              <td>{detail.strIngredient14}</td>
              <td>{detail.strIngredient15}</td>
              <td>{detail.strIngredient16}</td>
              <td>{detail.strIngredient17}</td>
              <td>{detail.strIngredient18}</td>
              <td>{detail.strIngredient19}</td>
              <td>{detail.strIngredient20}</td>
            </tr> */}
          </table>
          <table>
            <tr>
              <td>{detail.strMeasure1}</td>
              <td>{detail.strMeasure2}</td>
              <td>{detail.strMeasure3}</td>
              <td>{detail.strMeasure4}</td>
              <td>{detail.strMeasure5}</td>
              <td>{detail.strMeasure6}</td>
              <td>{detail.strMeasure7}</td>
              <td>{detail.strMeasure8}</td>
              <td>{detail.strMeasure9}</td>
              <td>{detail.strMeasure10}</td>
              <td>{detail.strMeasure11}</td>
              <td>{detail.strMeasure12}</td>
              <td>{detail.strMeasure13}</td>
              <td>{detail.strMeasure14}</td>
              <td>{detail.strMeasure15}</td>
              <td>{detail.strMeasure16}</td>
              <td>{detail.strMeasure17}</td>
              <td>{detail.strMeasure18}</td>
              <td>{detail.strMeasure19}</td>
              <td>{detail.strMeasure20}</td>
            </tr>
          </table>

          {/* <button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={() => setYoutube(true)}
          >
            Watch on YouTube
          </button> */}
        </div>
      </div>

      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={youtube}
        videoId={detail.strYoutube ? detail.strYoutube.slice(32) : null}
        onClose={() => setYoutube(false)}
      /> */}
    </section>
  );
};

export default DetailList;
