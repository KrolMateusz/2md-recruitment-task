import { useRef, useEffect } from "react"
import PropTypes from "prop-types"

function useCanvas(ref, r) {
    const a = (2 * Math.PI) / 6

    useEffect(() => {
        const canvas = ref.current
        const ctx = canvas.getContext("2d")

        ctx.beginPath()
        for (var i = 0; i < 6; i++) {
            ctx.lineTo(r + r * Math.cos(a * i), r + r * Math.sin(a * i))
        }
        ctx.fillStyle = "#f1f9ff"
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(r, r)
        ctx.lineTo(r + r * Math.cos(a * 6), r + r * Math.sin(a * 6))
        ctx.lineTo(r + r * Math.cos(a * 5), r + r * Math.sin(a * 5))
        ctx.lineTo(r, r)
        ctx.lineTo(r + r * Math.cos(a * 3), r + r * Math.sin(a * 3))
        ctx.lineTo(r + r * Math.cos(a * 2), r + r * Math.sin(a * 2))
        ctx.lineTo(r, r)
        ctx.fillStyle = "#2899fb"
        ctx.fill()
    }, [])
}

function Canvas({ r }) {
    const canvasRef = useRef(null)
    useCanvas(canvasRef, r)

    return <canvas width={2 * r} height={2 * r} ref={canvasRef} />
}

Canvas.propTypes = {
    r: PropTypes.number.isRequired,
}

export default Canvas
