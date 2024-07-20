import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false)
        }
    }

    const handlePrevious = () => {
        setCurrentSlide(prev => prev === 0 ? images.length - 1 : prev - 1)
    }

    const handleNext = () => {
        setCurrentSlide(prev => prev === images.length - 1 ? 0 : prev + 1)
    }


    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url]);

    console.log(images);

    if (loading) {
        return <div>Loading data! Please wait.</div>
    }

    if (errorMessage !== null) {
        return <div>An error occured, {errorMessage}</div>
    }
    return (
        <div className='image-container'>
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className='arrow arrow-left' />
            {
                images && images.length ?
                    images.map((imageItem, index) => (
                        <img
                            key={imageItem.id}
                            src={imageItem.download_url}
                            alt={imageItem.download_url}
                            className={currentSlide === index ? 'current-image' : 'hidden-image'}
                        />
                    ))
                    :
                    null
            }
            <BsArrowRightCircleFill
                onClick={handleNext}
                className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button
                                onClick={() => setCurrentSlide(index)}
                                key={index}
                                className={currentSlide === index ? 'active-indicator' : ''}
                            >
                            </button>
                        ))
                        :
                        null
                }
            </span>
        </div>
    )
}

export default ImageSlider