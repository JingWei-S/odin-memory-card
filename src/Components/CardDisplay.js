import React, { useEffect, useState } from "react";

function CardDisplay() {
  const [images, setImages] = useState([
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
    "img/img5.png",
    "img/img6.png",
    "img/img7.png",
    "img/img8.png",
    "img/img9.png",
    "img/img10.png",
    "img/img11.png",
    "img/img12.png",
  ]);

  // shuffle the array
  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  //   shuffle every time
  const handleShuffleImages = () => {
    setImages(shuffleArray(images));
  };

  useEffect(() => {
    setImages(shuffleArray(images));
  }, []);

  return (
    <div className="card-display">
      {/* <button onClick={handleShuffleImages}>随机排序</button> */}
      {images.map((image, index) => (
        <img src={image} alt={`image ${index + 1}`} onClick={handleShuffleImages} />
      ))}
    </div>
  );
}

export default CardDisplay;
