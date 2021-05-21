import clsx from "clsx"
import { useState, useRef, useEffect } from "react"
import ButtonsWrapper from "./ButtonsWrapper"
import Canvas from "../components/canvas"

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
nulla aliquet enim tortor at auctor urna nunc id cursus
metus aliquam eleifend mi in nulla posuere sollicitudin
aliquam ultrices sagittis orci a scelerisque purus semper
eget duis at tellus at urna condimentum mattis pellentesque
id nibh tortor id aliquet lectus proin nibh nisl condimentum
id venenatis a condimentum vitae sapien pellentesque
habitant morbi tristique senectus et netus et malesuada
fames ac turpis`

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
    const collapsingText = useRef(null)
    const { position, radius } = useHexagonRadiusAndPosition()

    function onClickMoreText() {
        setIsMoreClicked((prevState) => !prevState)
    }

    function onClickShowGallery() {
        console.log("zdjecia")
    }

    return (
        <div className="shadow-sm mt-auto mx-auto w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row flex-grow md:flex-grow-0">
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
            </div>
            <div className="bg-blue-light md:w-5/6 px-14 py-24 flex-grow md:flex-grow-0 flex flex-col items-center">
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
                        !isMoreClicked && "max-h-24",
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
