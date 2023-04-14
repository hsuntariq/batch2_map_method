import React from "react";
import ReactDOM from "react-dom";

const books = [
  {
    id: 10,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL254_SR254,254_.jpg",
    title: "Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel",
    price: "9.54",
  },
  {
    id: 2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91p0c7mYcGL._AC_UL127_SR127,127_.jpg",
    title: "Meals she eat",
    price: "20.41",
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91p0c7mYcGL._AC_UL127_SR127,127_.jpg",
    title: "Meals she eat",
    price: "20.41",
  },
  {
    id: 3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91p0c7mYcGL._AC_UL127_SR127,127_.jpg",
    title: "Meals she eat",
    price: "20.41",
  },
];

const BookList = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {books.map((book) => {
            return (
              <>
                <div className="col-lg-3">
                  <Book
                    image={book.image}
                    title={book.title}
                    price={book.price}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <>
      <div
        style={{
          height: "400px",
        }}
        className="book d-flex justify-content-center align-items-center flex-column shadow p-3">
        <div className="book-img">
          <img
            style={{
              height: "200px",
              width: "200px",
              objectFit: "cover",
            }}
            src={props.image}
            alt=""
          />
        </div>
        <div className="book-title">
          <h4>{props.title} </h4>
        </div>
        <div className="price">
          <h6>{props.price}</h6>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
