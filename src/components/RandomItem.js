// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const RandomItem = () => {
//   const [detail, setDetail] = useState([]);

//   const { id } = useParams();
//   console.log(id);

//   useEffect(() => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//       .then((res) => res.json())
//       .then((json) => setDetail(json.meals[0]));
//   }, [id]);

//   console.log(detail);

//   return (
//     <section className="detailListContainer">
//       <div>
//         <img src={detail.strMealThumb} alt="Alt" />
//       </div>
//       <div className="descriptionContainer">
//         <div>
//           <h1>{detail.strInstructions}</h1>
//           <p></p>
//         </div>
//         <div>
//           <h1>Ingredients</h1>
//           <p></p>
//           <a href={detail.strYoutube}>
//             <button>Youtube</button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RandomItem;
