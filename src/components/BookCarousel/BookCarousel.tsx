import React, { useMemo, useState, useEffect } from 'react';
import './BookCarousel.scss';

type CarouselProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    itemsPerPage?: number;
    className?: string;
};

function chunkArray<T>(arr: T[], size: number) {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

export default function Carousel<T>({ items, renderItem, itemsPerPage = 3, className = '' }: CarouselProps<T>) {
    const pages = useMemo(() => chunkArray(items, itemsPerPage), [items, itemsPerPage]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // if items change, ensure index is within range
        if (index > pages.length - 1) setIndex(Math.max(0, pages.length - 1));
    }, [pages.length, index]);

    if (!items || items.length === 0) {
        return <div className={`carousel ${className}`}></div>;
    }

    const prev = () => setIndex((i) => (i - 1 + pages.length) % pages.length);
    const next = () => setIndex((i) => (i + 1) % pages.length);

    return (
        <div className={`carousel ${className}`}>
            <button className="carousel__nav carousel__nav--prev" onClick={prev} aria-label="Previous">
                ‹
            </button>

            <div className="carousel__viewport">
                {pages.map((page, pIdx) => (
                    <div
                        className="carousel__page"
                        key={pIdx}
                        aria-hidden={pIdx !== index}
                        style={{ transform: `translateX(${(pIdx - index) * 100}%)` }}
                    >
                        {page.map((item, i) => (
                            <div className="carousel__item" key={(item as any).key ?? i}>
                                {renderItem(item)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <button className="carousel__nav carousel__nav--next" onClick={next} aria-label="Next">
                ›
            </button>

            <div className="carousel__dots">
                {pages.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel__dot ${i === index ? 'is-active' : ''}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}