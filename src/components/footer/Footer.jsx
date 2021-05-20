import { useState, useEffect } from "react"

function useDate() {
    const [time, setTime] = useState(getTime())
    const [date, setDate] = useState(getDate)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTime())
            setDate(getDate())
        }, 1000)
        return () => clearInterval(interval)
    }, [time, date])

    function getTime() {
        return new Date().toTimeString().split(" ")[0]
    }

    function getDate() {
        return new Date().toISOString().slice(0, 10)
    }

    return [time, date]
}

function Footer() {
    const [time, date] = useDate()

    return (
        <div className="w-full h-36 px-2 bg-blue-dark flex justify-between">
            <div className="w-1/3 mx-2 text-blue-light">
                <p>Mateusz Król</p>
            </div>
            <div className="w-1/3 mx-2 text-blue-light">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <div className="w-1/3 mx-2 text-blue-light">Contact</div>
        </div>
    )
}

export default Footer
