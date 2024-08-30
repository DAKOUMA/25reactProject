import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCode = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('')

    const handleGenerateQrCode = () => {
        setQrCode(input)
    }

    return (
        <div className='qr-code-container'>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name='qr-code'
                    placeholder='Enter your value here'
                />
                <button
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={handleGenerateQrCode}
                >Generate</button>
            </div>
            <div>
                {
                    qrCode ?
                        <QRCode
                            id='qr-code-value'
                            value={qrCode}
                            size={200}
                            bgColor='white'
                        /> 
                        :
                        <div className='qr-code-placeholder'>
                            Your QR code appear here after being generate
                        </div> 
                }
            </div>
        </div>
    )
}

export default QrCode