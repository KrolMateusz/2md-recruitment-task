import clsx from "clsx"
import PropTypes from "prop-types"

function ChangeSlideButton({ text, onClick, classes }) {
    return (
        <button
            className={clsx(
                classes,
                "bg-white-default border-2 border-blue-dark text-blue-dark w-9 h-9 rounded-md focus:outline-none focus:shadow-none"
            )}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

ChangeSlideButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.string,
}

export default ChangeSlideButton
