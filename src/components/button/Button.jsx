import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

function Button({ onClick, text, classes }) {
    return (
        <button
            className={clsx(
                "box-border rounded-md w-32 h-12 focus:outline-none focus:shadow-none",
                classes
            )}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default Button
