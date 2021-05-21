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
        <div className="w-full h-full">
            <button onClick={previousSlide}>Prev</button>
            <p>{slides[currentSlide].title}</p>
            <button onClick={nextSlide}>Next</button>
        </div>
    )
}

Slider.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ),
}

export default Slider
