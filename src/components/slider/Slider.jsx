import { useState } from "react"
import PropTypes from "prop-types"

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
        <div className="w-full h-full flex justify-center items-center">
            <button className="m-1" onClick={previousSlide}>
                Prev
            </button>
            <div className="flex justify-center">
                <img
                    className=""
                    src={slides[currentSlide].download_url}
                    crossOrigin="anonymous"
                />
            </div>
            <button className="m-1" onClick={nextSlide}>
                Next
            </button>
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
