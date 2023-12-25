import { useState } from "react";

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleNext = () => {
        setActiveIndex((prevIndex) => prevIndex + 1);
    };
    
    const handlePrev = () => {
        setActiveIndex((prevIndex) => prevIndex - 1);
    };
    
    return (
        <div>
        <button onClick={handlePrev} disabled={activeIndex === 0}>
            Prev
        </button>
        <img src={images[activeIndex]} alt="animal" />
        <button onClick={handleNext} disabled={activeIndex === images.length - 1}>
            Next
        </button>
        </div>
    );
    }