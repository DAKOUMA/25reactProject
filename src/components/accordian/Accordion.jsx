import React, { useState } from 'react'
import data from './data'

//Single selection
//Multiple selection

const Accordion = () => {
    const [selected, setSelected] = useState([])
    const [enableMulti, setEnableMulti] = useState(false)

    const handleOptionClick = () => {
        setSelected([]);
        setEnableMulti(!enableMulti)
    }

    const handleSelection = (value) => {
        if (enableMulti === false) {
            if (selected.includes(value.id)) {
                setSelected([])
            } else {
                setSelected([value.id])
            }
        } else {
            if (selected.includes(value.id)) {
                setSelected(selected.filter(element => element !== value.id))
            } else {
                setSelected(prev => [...prev, value.id])
            }
        }
    }



    return (
        <>
            <div className="accordion-container">
                <div className='button-container'>
                    <button
                        onClick={handleOptionClick}
                        className={`${enableMulti ? '' : 'optionSelected'} accordion-button`}
                    >single-selection</button>
                    <button
                        onClick={handleOptionClick}
                        className={`${enableMulti ? 'optionSelected' : ''} accordion-button`}
                    >multi-selection</button>
                </div>

                {
                    data.map((value, index) => (
                        <div
                            className={`accordion ${selected.find(element => element === value.id) ? 'selected' : ''}`}
                            key={index}
                        >
                            <h1 onClick={() => handleSelection(value)}>{value.question}</h1>
                            <p>{value.answer}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Accordion