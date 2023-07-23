import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './PhotoGallery.css'

const images = [
  "https://i.ibb.co/XYsccpj/pexels-rdne-stock-project-7713245.jpg",
  "https://i.ibb.co/S5K2qXH/pexels-pavel-danilyuk-7944238.jpg",
  "https://i.ibb.co/QvFkwXz/pexels-vantha-thang-2513993.jpg",
  "https://i.ibb.co/p3wrpWr/pexels-rdne-stock-project-7713351.jpg",
  "https://i.ibb.co/0K93Tbq/pexels-hai-nguyen-1699414.jpg",
  "https://i.ibb.co/z6r7fW7/pexels-feedyourvision-1184580.jpg",
  "https://i.ibb.co/TtPpk5T/pexels-g-l-i-k-2292837.jpg",
  "https://i.ibb.co/QcPMzkk/pexels-pixabay-267885.jpg",
  "https://i.ibb.co/YPFGqy4/pexels-emily-ranquist-1205651.jpg",
];

const PhotoGallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  console.log(data);

  const viewImage = (img, i) => {
    setData({ img, i });
    console.log(img, i);
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if(action === 'previous-img'){
        setData({ img: images[i - 1], i: i - 1 });
    }
    if(!action){
        setData({ img: '', i: 0});
    }
  };
  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}>
          <button onClick={()=>imgAction() } className="absolute top-10 right-10">X</button>
          <button onClick={()=>imgAction('previous-img')}>Previous</button>
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
            alt=""
          />
          <button onClick={()=>imgAction('next-img')}>Next</button>
        </div>
      )}

      <div className="p-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px" className="gallery-img">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default PhotoGallery;
