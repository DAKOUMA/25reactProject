import React, { useState } from 'react'

const RandomColor = () => {
    const [rgbColor, setRgbColor] = useState(true)
    const [color, setColor] = useState('rgb(255, 0, 0)')

    const hex = 'abcdef0123456789';

    const handleRgbColor = () => {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        setColor(`rgb(${r}, ${g}, ${b})`)
    }

    const handleHexColor = () => {
        const hex = 'abcdef0123456789';
        let color = '#'
        for (let index = 0; index < 6; index++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        setColor(color)
    }



    return (
        <div className='randomColor-container' style={{ backgroundColor: color }}>
            <div className='randomColor-button_container'>
                <button
                    onClick={() => {
                        handleHexColor();
                        setRgbColor(false)
                    }}
                >Create HEX Color</button>
                <button
                    onClick={() => {
                        handleRgbColor();
                        setRgbColor(true)
                    }}
                >Create RGB Color</button>
                <button
                    onClick={() => { rgbColor ? handleRgbColor() : handleHexColor() }}
                >Generate Random Color</button>
            </div>
            <h1>{rgbColor ? 'RGB' : 'HEX'}</h1>
            <h2>{color}</h2>
        </div>
    )
}

export default RandomColor