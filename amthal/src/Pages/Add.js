import React, { useState } from "react";
import Header from "../Components/Header/Header";
import axios from "axios";
import "./Add.css";

function Add() {
  const [newMathal, setNewMathal] = useState("hello");
  const [id, setId] = useState(1);
  const [Mathaly, setMathaly] = useState({
    id: 1,
    tittle: "",
  });

  const handleAgeChange = (event) => {
    if (event.target.name === "id") {
      setMathaly({
        ...Mathaly,
        id: event.target.value,
      });
    } else if (event.target.name === "mathal") {
      setMathaly({
        ...Mathaly,
        tittle: event.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mathaly ", Mathaly);
    axios
      .post("http://localhost:8080/amthal/mathal", Mathaly)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="home_container">
        <h1>أَضِفْ اَلْمَزِيدَ مِنْ اَلْأَمْثَالِ ؟ </h1>
        <form onSubmit={handleSubmit}>
          <input
            required="true"
            className="in"
            onChange={handleAgeChange}
            value={Mathaly.id}
            placeholder="ID"
            type="number"
            name="id"
          />
          <label>
            <textarea
              required="true"
              name="mathal"
              onChange={handleAgeChange}
              value={Mathaly.tittle}
              lang="ar"
              placeholder="الباب اللي يجيك منه الريح سدو واستريح"
            ></textarea>
          </label>

          <input
            className="button-27 "
            style={{ minWidth: "25vw", justifySelf: "center" }}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
export default Add;
