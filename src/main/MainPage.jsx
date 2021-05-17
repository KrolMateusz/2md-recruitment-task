import { useState } from "react"

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
        <div className="flex flex-col justify-center items-center m-12">
            <div className="bg-blue-300 w-full h-40">
                <h1 className="text-blue-400 text-lg md:invisible">
                    This is main page title
                </h1>
            </div>
            <div className="bg-blue-100 w-full flex flex-col justify-center items-center">
                <h1 className="text-blue-400 text-lg invisible md:visible">
                    This is main page title
                </h1>
                <p className="text-blue-400">
                    {isMoreClicked ? fullText : shortText}
                </p>
                <button
                    onClick={() => setIsMoreClicked((prevState) => !prevState)}
                >
                    Show more
                </button>
            </div>
        </div>
    )
}

export default MainPage
