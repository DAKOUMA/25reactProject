import React, { useEffect, useRef, useState } from 'react'

const ScrollIndicator = () => {

    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(0);
    const [loading, setLoading] = useState(false);

    const [mousePointer, setMousePointer] = useState(0);
    const ref = useRef(null)

    const [allScroll, setAllScroll] = useState([]);


    /* 
        scrollTop = The number of pixel Top to UserView
        scrollHeight = The total number of pixel of the entire page
        clientHeight = The total number of pixel of the userView
    */

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const scrollPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScroll(scrollPosition);

        document.documentElement.style.setProperty('--scroll-position', scrollPosition);

        setAllScroll([
            { scrollTop: scrollTop },
            { scrollHeight: scrollHeight },
            { clientHeight: clientHeight }
        ])
    }

    /** Caculate the percentage of width when user click te span */
    const handleMousePosition = (e) => {
        const spanWidth = ref.current.clientWidth;
        const mouseY = e.clientX
        const mousePositionY = (mouseY / spanWidth) * 100

        setMousePointer(mousePositionY)
    }
    /** Caculate the amount of pixel coresponding to the percentage width click by user and scroll to it */
    const handleScrollIntoView = () => {
        const heightOfPage = document.documentElement.scrollHeight;
        const percentage = mousePointer;
        const scrollTo = ((heightOfPage - (window.innerHeight)) * percentage) / 100

        window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    }



    /** get products data from DUMMYJSON */
    const fetchData = async () => {

        try {
            setLoading(true);

            const response = await fetch('https://dummyjson.com/products?limit=100');
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setData(result.products);
                console.log(result);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    /** add event to window, and indicator bar */
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        if (ref.current) {
            ref.current.addEventListener('mousemove', handleMousePosition)
        }

        return () => {

            ref.current.removeEventListener('mousemove', handleMousePosition)
            if (ref.current) {
                ref.current.removeEventListener('mousemove', handleMousePosition);
            }
        }
    }, [])

    return (
        <div

            className='scroll-indicator-container'
        >
            <div className='scroll-indicator-bar'>
                <h1>CUSTOM SCROLLINDICATOR</h1>
                <span
                    ref={ref}
                    onClick={() => handleScrollIntoView()}
                ></span>
            </div>
            <div className='scroll-indicator-item-container'>
                {
                    loading ?
                        <div className='scroll-indicator-item'>Please wait</div>
                        :
                        data.map((value, index) => (
                            <div key={index}>{value.title}</div>
                        ))
                }
            </div>

        </div>
    )
}

export default ScrollIndicator

