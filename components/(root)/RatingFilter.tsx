import React from "react";

const RatingFilter = () => {
  return (
    <div className="">
      <h1>Rating star</h1>
      <select name="rating" id="rating-feild">
        <option disabled>sort by rating</option>

        <option value="5">5 star or more </option>
        <option value="4">4 star or more </option>
        <option value="3">3 star or more</option>
      </select>
    </div>
  );
};

export default RatingFilter;
