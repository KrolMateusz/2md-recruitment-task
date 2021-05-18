import { useState } from "react"
import Button from "../components/button"

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

const shortText = `quis enim lobortis scelerisque fermentum dui faucibus in
ornare quam viverra orci sagittis eu volutpat odio facilisis
mauris sit amet...`

function MainPage() {
    const [isMoreClicked, setIsMoreClicked] = useState(false)

    return (
        <div className="shadow-sm grid grid-cols-1 md:grid-cols-main-page md:max-w-4xl md:mx-auto">
            <div className="bg-blue-default w-full px-5 flex justify-center items-center">
                <h1 className="text-blue-dark text-lg py-12 md:hidden">
                    This is main page title
                </h1>
            </div>
            <div className="bg-blue-light w-full px-5 flex flex-col justify-center items-center">
                <h1 className="text-blue-dark text-lg hidden md:block">
                    This is main page title
                </h1>
                <p className="text-blue-dark">
                    {isMoreClicked ? fullText : shortText}
                </p>
                <Button
                    onClick={() => setIsMoreClicked((prevState) => !prevState)}
                >
                    Show more
                </Button>
            </div>
        </div>
    )
}

export default MainPage
