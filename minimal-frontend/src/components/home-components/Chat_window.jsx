import React, { useState, useEffect } from 'react';

function Chat_window() {
    const [messages, addMessage] = useState([]);

    async function check_messages() {
        const controller = new AbortController();
        const timeout = 1000;
        const timeoutfunc = setTimeout(() => controller.abort(), timeout);

        if (localStorage.getItem('Timestamp') === null) {
            localStorage.setItem('Timestamp', Date.now());
        }

        console.log("Time stored in the device is:", localStorage.getItem('Timestamp'));

        try {
            const response = await fetch('http://localhost:5000/messages/get-messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal,
                body: JSON.stringify({
                    Timestamp: localStorage.getItem('Timestamp'),
                }),
            });

            if (response.ok) {
                const newMessages = await response.json();

                if (newMessages.length > 0) {
                    const latestMessage = newMessages[newMessages.length - 1];
                    localStorage.setItem('Timestamp', latestMessage.Timestamp);
                    addMessage((prevMessages) => [...prevMessages, ...newMessages]);
                }
            }
        } catch (err) {
            console.error('Error fetching messages:', err);
        } finally {
            clearTimeout(timeoutfunc);
        }
    }

    useEffect(() => {
        const chatContainer = document.querySelector('[data-chat-container]');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        const interval = setInterval(check_messages, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="d-flex flex-column p-3"
            style={{
                minHeight: '75vh',
                minWidth: '60vw',
                backgroundColor: '#ffccd5',
                overflow: 'hidden',
            }}
        >
            <div
                data-chat-container
                className="d-flex flex-column custom-scrollbar"
                style={{
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    paddingRight: '20px'
                }}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-3 mb-2 ${message.Username === localStorage.getItem('Username') ? 'align-self-end' : 'align-self-start'}`}
                        style={{
                            maxWidth: '50%',
                            borderRadius: '10px',
                            minWidth: '15vw',
                            backgroundColor: message.Username === localStorage.getItem('Username') ? '#ff6082' : '#f3f3f3',
                            color: message.Username === localStorage.getItem('Username') ? 'white' : 'black',
                        }}
                    >
                        <div className="text-muted small fw-bold" style={{ fontSize: '0.8em', textAlign: 'left' }}>
                            {message.Username}
                        </div>
                        <div style={{ fontSize: '1.2em' }}>{message.Content}</div>
                        <div className="text-muted small" style={{ fontSize: '0.7em', textAlign: 'right' }}>
                            {new Date(message.Timestamp).toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chat_window;
