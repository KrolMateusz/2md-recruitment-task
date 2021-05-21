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
        <footer className="w-full mt-auto py-4 bg-blue-dark flex flex-wrap justify-evenly">
            <div className="text-blue-light">
                <p>Mateusz Król</p>
                <p className="md:hidden">605 064 769</p>
                <p className="md:hidden">mateusz.krol96@wp.pl</p>
            </div>
            <div className="text-blue-light">
                <p>{date}</p>
                <p>{time}</p>
            </div>
            <div className="hidden md:block text-blue-light">
                <p className="hidden md:block">605 064 769</p>
                <p className="hidden md:block">mateusz.krol96@wp.pl</p>
            </div>
        </footer>
    )
}

export default Footer
