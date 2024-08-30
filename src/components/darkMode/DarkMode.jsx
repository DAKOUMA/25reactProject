import React, { useEffect, useState } from 'react'
import useLocalStorage from './useLocalStorage'

const DarkMode = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme);

    return (
        <div
            className='darkMode-container'
            data-theme={theme}
        >
            <div className='darkMode-hello-container'>
                <h1 className=''>HELLO WORLD</h1>
                <p></p>
                <button
                className='darkMode-toggle-button'
                    onClick={handleToggleTheme}
                >
                    Change Theme
                </button>
            </div>
        </div>
    )
}

export default DarkMode