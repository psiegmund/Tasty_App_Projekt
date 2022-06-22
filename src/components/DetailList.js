import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import ModalVideo from "react-modal-video";

const DetailList = () => {
  const [detail, setDetail] = useState([]);
  const [youtube, setYoutube] = useState(false);
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

  // const ingredients = () => {
  //   for (let i = 1; i < 20; i++) {
  //     console.log(
  //       `${(detail.strIngredient += i)}, ${(detail.strMeasure += i)}`
  //     );
  //   }
  // };

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
          <tr>
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
          </tr>
          <ul>
            <li>{detail.strMeasure1}</li>
            <li>{detail.strMeasure2}</li>
            <li>{detail.strMeasure3}</li>
            <li>{detail.strMeasure4}</li>
            <li>{detail.strMeasure5}</li>
            <li>{detail.strMeasure6}</li>
            <li>{detail.strMeasure7}</li>
            <li>{detail.strMeasure8}</li>
            <li>{detail.strMeasure9}</li>
            <li>{detail.strMeasure10}</li>
            <li>{detail.strMeasure11}</li>
            <li>{detail.strMeasure12}</li>
            <li>{detail.strMeasure13}</li>
            <li>{detail.strMeasure14}</li>
            <li>{detail.strMeasure15}</li>
            <li>{detail.strMeasure16}</li>
            <li>{detail.strMeasure17}</li>
            <li>{detail.strMeasure18}</li>
            <li>{detail.strMeasure19}</li>
            <li>{detail.strMeasure20}</li>
          </ul>

          <button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            onClick={() => setYoutube(true)}
          >
            Watch on YouTube
          </button>
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
