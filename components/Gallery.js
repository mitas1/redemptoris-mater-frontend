import React from "react";
import Lightbox from "react-image-lightbox";

import { urlFor } from "../utils/sanity";

const SIZES = [[596, 504], [300, 250], [300, 250]];

export default ({ images }) => {
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClick = i => {
        setIndex(i);
        setOpen(true);
    };

    const count = images.length;

    const imagesPreview = images.slice(0, 3);

    const smartphoneImage = images.slice(0, 1);

    return (
        <div className="gallery-wrapper">
            {imagesPreview.map((image, i) => (
                <a
                    className="thumbnail"
                    onClick={handleClick.bind(this, i)}
                    key={i}
                >
                    <img
                        src={urlFor(image)
                            .size(...SIZES[i])
                            .quality(100)
                            .url()}
                        alt="Náhľad"
                    />
                </a>
            ))}
            {smartphoneImage.map((image, i) => (
                <a
                    className="thumbnail smartphone"
                    onClick={handleClick.bind(this, i)}
                    key={i}
                >
                    <img
                        src={urlFor(image)
                            .size(400, 300)
                            .quality(100)
                            .url()}
                            alt="Zmenšený náhľad"
                    />
                </a>
            ))}
            {open && (
                <Lightbox
                    mainSrc={urlFor(images[index]).url()}
                    nextSrc={urlFor(images[(index + 1) % count]).url()}
                    prevSrc={urlFor(images[(index + count - 1) % count]).url()}
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                        setIndex((index - 1 + count) % count)
                    }
                    onMoveNextRequest={() => setIndex((index + 1) % count)}
                />
            )}
            <div className="clear"></div>
            <style jsx>{`
            .clear{clear: both;}
                .gallery-wrapper {
                    width: 900px;
                    margin: 0 auto;
                }
                .thumbnail {
                    float: left;
                }
                .thumbnail:first-child {
                    margin: 0 4px 0 0;
                }
                .thumbnail.smartphone {
                    display: none;
                }
                .thumbnail:hover {
                    opacity: 0.9;
                    cursor: pointer;
                }
                @media screen and (max-width: 992px) {
                    .gallery-wrapper {
                        width: 100%;
                        padding: 0;
                        margin: 0;
                        overflow: hidden;
                    }
                    .thumbnail {
                        display: none;
                    }
                    .thumbnail.smartphone {
                        width: 100%;
                        display: block;
                        margin: 0 0 8px 0;
                    }
                    .thumbnail.smartphone img {
                        filter: none;
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};
