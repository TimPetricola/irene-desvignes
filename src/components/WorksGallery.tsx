import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  serie: {
    slug: string;
    name: string;
    images: (number | string)[][];
  };
}

const WorksGallery: React.FC<Props> = ({ serie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Flatten the images array for the lightbox
  const allImages = serie.images.flat().map((image) => ({
    src: `/images/works/${serie.slug}/${image}.jpg`,
  }));

  const handleImageClick = (rowIndex: number, imageIndex: number) => {
    // Calculate the flat index
    let flatIndex = 0;
    for (let i = 0; i < rowIndex; i++) {
      flatIndex += serie.images[i].length;
    }
    flatIndex += imageIndex;
    
    setPhotoIndex(flatIndex);
    setIsOpen(true);
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
            >
              <img
                src={`/images/works/${serie.slug}/thumbs/${image}.jpg`}
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