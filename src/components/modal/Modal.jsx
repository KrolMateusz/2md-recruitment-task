import PropTypes from "prop-types"

function Modal({ isOpened }) {
    return isOpened ? <div>Jestem modalem</div> : null
}

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
}

export default Modal
