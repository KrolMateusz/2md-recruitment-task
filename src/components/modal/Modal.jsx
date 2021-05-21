import PropTypes from "prop-types"

function Modal({ isOpened, onClose, children }) {
    if (!isOpened) return null
    return (
        <>
            <div className="border border-solid bg-blue-light h-4/5 w-4/5 mx-auto my-auto flex flex-wrap fixed inset-0 z-20">
                <div className="bg-blue-light-2 text-blue-dark h-1/4 p-5 w-full relative flex flex-col justify-center">
                    <button
                        className="bg-blue-light text-center w-6 h-6 rounded-full absolute right-2 top-2"
                        onClick={onClose}
                    >
                        x
                    </button>
                    <h2 className="font-semibold">GALLERY IN MODAL</h2>
                    <p>picsum photos</p>
                </div>
                {children}
            </div>
            <div className="opacity-40 fixed inset-0 z-10 bg-black-default" />
        </>
    )
}

Modal.propTypes = {
    isOpened: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default Modal
