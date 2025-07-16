import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  serie: {
    slug: string;
    name: string;
    images: (number | string)[][];
  };
  processedImages?: Record<string, { thumb: string; full: string }>;
}

const WorksGallery: React.FC<Props> = ({ serie, processedImages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Flatten the images array for the lightbox
  const allImages = serie.images.flat().map((image) => ({
    src: processedImages?.[image.toString()]?.full || `/images/works/${serie.slug}/${image}.jpg`,
  }));

  const calculateFlatIndex = (rowIndex: number, imageIndex: number) => {
    let flatIndex = 0;
    for (let i = 0; i < rowIndex; i++) {
      flatIndex += serie.images[i].length;
    }
    return flatIndex + imageIndex;
  };

  const handleImageClick = (rowIndex: number, imageIndex: number) => {
    const flatIndex = calculateFlatIndex(rowIndex, imageIndex);
    setPhotoIndex(flatIndex);
    setIsOpen(true);
  };

  const handleImageMouseEnter = (rowIndex: number, imageIndex: number) => {
    const flatIndex = calculateFlatIndex(rowIndex, imageIndex);
    const fullImageSrc = allImages[flatIndex].src;
    const img = new Image();
    img.src = fullImageSrc;
  };

  return (
    <>
      {serie.images.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((image, imageIndex) => (
            <a
              href="#"
              key={image}
              className="works-list-thumb"
              onClick={(e) => {
                e.preventDefault();
                handleImageClick(rowIndex, imageIndex);
              }}
              onMouseEnter={() => handleImageMouseEnter(rowIndex, imageIndex)}
            >
              <img
                src={processedImages?.[image.toString()]?.thumb || `/images/works/${serie.slug}/thumbs/${image}.jpg`}
                className="works-list-img"
                alt=""
              />
            </a>
          ))}
        </div>
      ))}
      
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={allImages}
        index={photoIndex}
        styles={{
          container: { backgroundColor: "#587171" },
        }}
      />
    </>
  );
};

export default WorksGallery;