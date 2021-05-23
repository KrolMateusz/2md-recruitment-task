import { useState } from "react"
import PropTypes from "prop-types"
import ChangeSlideButton from "./ChangeSlideButton"

function Slider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    function nextSlide() {
        currentSlide < slides.length - 1
            ? setCurrentSlide((current) => current + 1)
            : setCurrentSlide(0)
    }

    function previousSlide() {
        currentSlide === 0
            ? setCurrentSlide(slides.length - 1)
            : setCurrentSlide((current) => current - 1)
    }

    if (!slides.length) return null
    return (
        <div className="h-full flex flex-col p-4 md:flex-row md:flex-wrap justify-start md:justify-around md:items-center">
            <div className="w-full mb-4 flex justify-evenly items-end md:hidden">
                <ChangeSlideButton text="&#60;" onClick={previousSlide} />
                <ChangeSlideButton text="&#62;" onClick={nextSlide} />
            </div>
            <ChangeSlideButton
                classes="hidden md:block"
                text="&#60;"
                onClick={previousSlide}
            />
            <div className="container flex justify-center md:w-3/4 h-7/10">
                <img
                    className="object-contain max-w-full max-h-full"
                    src={slides[currentSlide].download_url}
                />
            </div>
            <ChangeSlideButton
                classes="hidden md:block"
                text="&#62;"
                onClick={nextSlide}
            />
            <div className="container">
                <p className="mt-4 px-2 text-blue-dark border-blue-light-2 border-4 w-max self-start">
                    {slides[currentSlide].author}
                </p>
            </div>
        </div>
    )
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            download_url: PropTypes.string.isRequired,
        })
    ),
}

export default Slider
