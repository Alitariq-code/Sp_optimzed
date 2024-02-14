import { useState, useEffect } from 'react';
import Image from 'next/image';

const YourPage = () => {
  const [loading, setLoading] = useState(true);
  const [imageNames, setImageNames] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const allImageNames = [
          'public/images/Home-images/8 1.webp',
          'public/images/Home-images/Vector (1).webp',
          'public/images/Home-images/User Friendly Wristband Icon.webp' /* add more image names */,
        ];

        // Start loading images asynchronously
        const loadImagePromises = allImageNames.map(async (imageName) => {
          const response = await fetch(
            `/api/images?imageName=${encodeURIComponent(imageName)}`
          );
          console.log(response);
          const blobData = await response.blob();
          return { name: imageName, data: URL.createObjectURL(blobData) };
        });

        // Wait for all images to be loaded
        const loadedImagesData = await Promise.all(loadImagePromises);

        // Set the loaded images in the state
        setImageNames(loadedImagesData);
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2500);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error('Error loading images:', error);
        setLoading(false);
      }
    };

    // Start fetching images when the component mounts
    fetchImages();
  }, []); // Empty dependency array ensures that this effect runs only once
  console.log(imageNames);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          {/* {imageNames.map((image, index) => (
            <div key={index}>
              <Image
                src={image.data}
                alt={`Image ${index}`}
                width={500}
                height={300}
              />
            </div>
          ))} */}
          <div>
            {' '}
            <Image
              src={imageNames[0].data}
              //   alt={`Image ${index}`}
              width={500}
              height={300}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default YourPage;
