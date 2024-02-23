/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProduct } from "../../actions/product";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import MetaData from "../layout/MetaData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
const categories = [
  "Laptop",
  "Footwear",
  "Clothes",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
export default function Products() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const { keyword } = useParams();

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const totalPages = Math.ceil(productsCount / resultPerPage);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div>
          {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Stack spacing={2}>
                <Pagination
                  onChange={handlePageChange}
                  count={totalPages}
                  page={currentPage}
                  variant="outlined"
                  color="secondary"
                />
              </Stack>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
