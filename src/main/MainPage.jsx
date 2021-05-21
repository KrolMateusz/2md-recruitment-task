import clsx from "clsx"
import { useState, useRef, useEffect } from "react"
import ButtonsWrapper from "./ButtonsWrapper"
import Canvas from "../components/canvas"
import Modal from "../components/modal"

const fullText = `quis enim lobortis scelerisque fermentum dui faucibus in
ornare quam viverra orci sagittis eu volutpat odio facilisis
mauris sit amet massa vitae tortor condimentum lacinia quis
vel eros donec ac odio tempor orci dapibus ultrices in
iaculis nunc sed augue lacus viverra vitae congue eu
consequat ac felis donec et odio pellentesque diam volutpat
commodo sed egestas egestas fringilla phasellus faucibus
scelerisque eleifend donec pretium vulputate sapien nec
sagittis aliquam malesuada bibendum arcu vitae elementum
curabitur vitae nunc sed velit dignissim sodales ut eu sem
integer vitae justo eget magna fermentum iaculis eu non diam
phasellus vestibulum lorem sed risus ultricies tristique
nulla aliquet`

function useWindowWidth() {
    function getWindowWidth() {
        return window.innerWidth
    }
    const [width, setWidth] = useState(getWindowWidth())

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(getWindowWidth()))
        return () => {
            window.removeEventListener("resize", () =>
                setWidth(getWindowWidth())
            )
        }
    }, [])

    return width
}

function useHexagonRadiusAndPosition() {
    const width = useWindowWidth()
    if (width >= 1280) return { radius: 80, position: "-left-px-80" }
    if (width >= 768) return { radius: 70, position: "-left-px-70" }
    return { radius: 50, position: "" }
}

function MainPage() {
    const [isMoreClicked, setIsMoreClicked] = useState(false)
    const [isModelOpened, setIsModalOpened] = useState(false)
    const collapsingText = useRef(null)
    const { position, radius } = useHexagonRadiusAndPosition()
    const width = useWindowWidth()

    function onClickMoreText() {
        setIsMoreClicked((prevState) => !prevState)
    }

    function onClickShowGallery() {
        setIsModalOpened(true)
    }

    return (
        <div className="shadow-sm mx-auto mt-auto w-full md:w-3/4 lg:w-3/5 flex flex-col md:flex-row flex-grow md:flex-grow-0">
            <div className="bg-blue-default md:w-1/5 p-5 flex flex-col justify-center items-center relative">
                <Canvas
                    className={clsx(
                        "justify-self-start mb-6 md:mb-0 md:absolute",
                        "md:" + position
                    )}
                    r={radius}
                />
                <h1 className="text-blue-light text-lg md:hidden">
                    This is main page title
                </h1>
                <Modal isOpened={isModelOpened} />
            </div>
            <div className="bg-blue-light md:w-5/6 p-5 md:px-14 md:py-24 flex-grow md:flex-grow-0 flex flex-col items-center">
                <h1 className="text-blue-dark text-lg hidden md:block">
                    This is main page title
                </h1>
                <p
                    style={{
                        maxHeight:
                            isMoreClicked &&
                            collapsingText.current.scrollHeight,
                    }}
                    ref={collapsingText}
                    className={clsx(
                        !isMoreClicked &&
                            ((width >= 768 && "md:max-h-12") || "max-h-24"),
                        "text-blue-dark overflow-hidden transition-all duration-500 ease-in-out"
                    )}
                >
                    {fullText}
                </p>
                <ButtonsWrapper
                    textArray={["More", "Show Gallery"]}
                    onClickArray={[onClickMoreText, onClickShowGallery]}
                />
            </div>
        </div>
    )
}

export default MainPage
