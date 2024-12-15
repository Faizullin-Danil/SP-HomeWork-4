import { useEffect, useState } from "react"

const WindowSize = () => {
    const [width, setWidth] = useState(innerWidth)
    const [height, setHeight] = useState(innerHeight)

    useEffect(() => {
        const resize = () => {    
            setHeight(innerHeight)
            setWidth(innerWidth)
        }

        window.addEventListener('resize', resize)

        return () => window.removeEventListener

    }, [height, width])

    return (
        <div>
            <p>Высота: {height}</p>
            <p>Ширина: {width}</p>
        </div>
    )
}
export default WindowSize