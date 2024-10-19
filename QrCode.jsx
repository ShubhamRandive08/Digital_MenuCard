// src/QrCode.js

import React, { useRef, useState,useEffect } from 'react';
import QRious from 'qrious';
import jsQR from 'jsqr';
import axios  from 'axios';

const QrCode = () => {
    const [qrValue, setQrValue] = useState([]);
    const [scannedData, setScannedData] = useState('');
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        apiCall();
    })

    function apiCall(){
        axios.get('http://localhost:5000/menucard')
        .then(response =>{{
            const r = response.data;
            setQrValue(r)
        }})
    }

    const generateQrCode = () => {
        const qr = new QRious({
            element: canvasRef.current,
            value: qrValue,
            size: 100,
        });
    };

    const startScan = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const scan = () => {
            if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
                canvas.height = videoRef.current.videoHeight;
                canvas.width = videoRef.current.videoWidth;
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, canvas.width, canvas.height);

                if (code) {
                    setScannedData(code.data);
                    stream.getTracks().forEach(track => track.stop());
                    videoRef.current.srcObject = null;
                    return; // Stop scanning once a code is found
                }
            }
            requestAnimationFrame(scan);
        };

        requestAnimationFrame(scan);
    };

    return (
        <div>
            <h1>QR Code Generator and Scanner</h1>
            
            <button onClick={generateQrCode}>Generate QR Code</button>
            <canvas ref={canvasRef} style={{ margin: '20px' }}></canvas>

            <h2>Scan QR Code</h2>
            <video ref={videoRef} style={{ display: 'none' }}></video>
            <button onClick={startScan}>Start Scan</button>
            <div>
                <h3>Scanned Data:</h3>
                <p>{scannedData}</p>
            </div>
        </div>
    );
};

export default QrCode;
