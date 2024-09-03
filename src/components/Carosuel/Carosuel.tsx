import { useState } from "react";
import CarouselItem from "./CarouseItem";
import "./carosuel.css"

const items = [
    "ФИЛЬМЫ",
    "СЕРИАЛЫ",
    "СПОРТ",
    "ДЕТЯМ",
    "КАБИНЕТ",
    "ТВ-КАНАЛЫ"
];

function Carousel() {
    const [itemIndex, setItemIndex] = useState<number>(0);

    const nextItem = () => {
        setItemIndex(checkNext());
    };

    const prevItem = () => {
        setItemIndex(checkPrev());
    };

    const checkNext = (): number => {
        return itemIndex === items.length - 1 ? 0 : itemIndex + 1
    }

    const checkPrev = (): number => {
        return itemIndex === 0 ? items.length - 1 : itemIndex - 1
    }

    return (
        <div className="carousel-container">
            <button onClick={prevItem}>Prev</button>
            <div className="items-container">
                <CarouselItem title={items[checkPrev()]} />
                <CarouselItem title={items[itemIndex]} />
                <CarouselItem title={items[checkNext()]} />
            </div>
            <button onClick={nextItem}>Next</button>
        </div>
    );
}

export default Carousel;