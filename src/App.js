import React, { useState } from "react";
import image from "./hi.gif";
import "./App.css";

function App() {
  // const [dogImg, setDogImg] = useState();
  const [dogList, setDogList] = useState([]);

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => setDogImg(data.message))
  //     .catch((err) => console.log(err));
  // };

  //async function (async/await)

  const onClickHandler = async () => {
    // try {
    //   const response = await fetch("https://dog.ceo/api/breeds/image/random");
    //   const data = await response.json();
    //   console.log(data);
    //   setDogList([...dogList, data.message]);
    // } catch (error) {
    //   console.log(error);
    // }
    setDogList([image]);
  };

  const showDogs = dogList.map((el, index) => {
    return <img key={index} src={el} alt="dog" className="single-dog" />;
  });

  return (
    <div className="app">
      <div className="list-container">
        <h1 className="title">Amazing Dogs Gallery</h1>
        <button onClick={onClickHandler} className="list-btn">
          Get a dog picture
        </button>
        <br />
        {showDogs}
      </div>
    </div>
  );
}

export default App;
