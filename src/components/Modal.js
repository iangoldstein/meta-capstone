import React from 'react';

const Modal = ({ show, onClose }) => {
    if (!show) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                position: 'relative',
                minWidth: '300px',
                minHeight: '100px',
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <h2>Your Reservation has been booked!</h2>
                <div style={{
                    width: '100%',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '2px',
                    marginTop: '15px'
                }}>
                    <div style={{
                        height: '24px',
                        width: '0%',
                        backgroundColor: '#4caf50',
                        animation: 'progress 2s linear forwards',
                        borderRadius: '2px'
                    }}></div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button onClick={onClose} style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer'
                    }}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;