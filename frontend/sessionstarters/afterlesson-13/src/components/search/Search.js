import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Enter Pressed");
  };

  return (
    <form className="search__form" onSubmit={(e) => submitForm(e)}>
      <IoIosSearch className="search__icon" />
      <input className="search" type="text" placeholder="search" />
    </form>
  );
};

export default Search;
