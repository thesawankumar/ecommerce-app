/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <TextField
          type="text"
          id="outlined-basic"
          hiddenLabel
          size="small"
          variant="outlined"
          placeholder="Search a product..."
          onChange={(e) => setKeyword(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>
    </Fragment>
  );
};

export default Search;
