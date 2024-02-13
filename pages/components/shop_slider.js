// pages/index.js
import { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState('/Product Image.webp');

  const images = ['/2i.webp', '/3i.webp', '/4i.webp'];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-gallery-container">
      <div className="preview">
        <img src={selectedImage} alt="Preview" />
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
            className={selectedImage === image ? 'selected' : ''}
          />
        ))}
      </div>
      <style jsx>{`
        .image-gallery-container {
          width: 500px;
          height: 520px;
          
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .preview {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 250px;
          margin-bottom: 0px;
          overflow: hidden;
          border: none;
          border-radius: 8px;
          height: 300px;
          padding: 20px;
        }

        .preview img {
         width: 270px;
         height: 100%;
          border: none;
        }

        .gallery {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        img {
          cursor: pointer;
          max-width: 100%;
          border: 1px solid #fff;
          padding: 10px;
          margin: 5px;
          height: 80px;
          width: 80px;
        }

        img.selected {
          padding: 10px;
        }

        @media screen and (max-width: 500px) and (min-width: 290px) {
          .image-gallery-container {
            width: 338px;
            height: 520px;
            margin: auto;
            padding: 0px;
          }

        }
          @media screen and (max-width: 290px) and (min-width: 250px){
.image-gallery-container{
    width: 250px;
    height: 520px;
    margin: auto;
    padding: 0px;
}


img {
  cursor: pointer;
  max-width: 100%;
  border: 1px solid #fff;
  padding: 10px;
  margin: 5px;
  height: 40px;
  width: 40px;
}
        }
      `}</style>
    </div>
  );
};

export default ImageGallery;
