import React, { useState } from 'react';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const styles = {
        app: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        },
        popupContainer: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
        },
        popup: {
            width: '380px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease-in-out',
        },
        profilePhoto: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            marginBottom: '15px',
        },
        closeBtn: {
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        closeBtnHover: {
            backgroundColor: '#0056b3',
        },
        fadeIn: `
            @keyframes fadeIn {
                from {
                    transform: scale(0.8);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `,
    };

    return (
        <div style={styles.app}>
            <button onClick={togglePopup}>Show Popup</button>
            {showPopup && (
                <div style={styles.popupContainer}>
                    <div style={styles.popup}>
                        <style>{styles.fadeIn}</style>
                        <img
                            src="https://via.placeholder.com/100"
                            alt="Profile"
                            style={styles.profilePhoto}
                        />
                        <h3>John Doe</h3>
                        <button
                            style={styles.closeBtn}
                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.closeBtnHover.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = styles.closeBtn.backgroundColor}
                            onClick={togglePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Popup;
