import Button from "../components/button"
import PropTypes from "prop-types"

function ButtonsWrapper({ textArray, onClickArray }) {
    const [moreText, galleryText] = textArray
    const [moreOnClick, galleryOnClick] = onClickArray

    return (
        <div className="w-full mt-5 flex justify-between sm:justify-start">
            <Button
                text={moreText}
                classes="border border-blue-default text-blue-dark font-medium sm: mr-10"
                onClick={moreOnClick}
            />
            <Button
                text={galleryText}
                classes="bg-blue-dark text-blue-light font-medium"
                onClick={galleryOnClick}
            ></Button>
        </div>
    )
}

ButtonsWrapper.propTypes = {
    textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickArray: PropTypes.arrayOf(PropTypes.func).isRequired,
}

export default ButtonsWrapper
