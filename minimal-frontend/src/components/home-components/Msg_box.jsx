import React from 'react';
import { useForm } from 'react-hook-form';

function Msg_box() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:5000/messages/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Username: localStorage.getItem('Username'),
        Content: data.Content
      })
    });
    const result = await response.json();
    if (!response.ok) {
      alert(result.message);
    } else {
      reset();
    }
  };

  return (
    <div className='d-flex align-items-center' style={{ minHeight: '25vh' }}>
      <form
        className='w-100 d-flex align-items-center'
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: '#ffccd5',
          minHeight: '25vh',
          minWidth: '67vw',
          boxShadow: 'none',
          border: 'none'
        }}
      >
        <input
          type="text"
          className="form-control me-2"
          style={{
            minWidth: '60vw',
            borderRadius: '15px',
            minHeight: '7vh',
            fontSize: '1rem',
            border: 'none'
          }}
          placeholder="Enter your message here..."
          {...register('Content', { required: "Content is required!" })}
        />
        <button
          type="submit"
          className="btn rounded-pill"
          style={{
            backgroundColor: '#B74859',
            color: 'white',
            minWidth: '7vw',
            minHeight: '7vh',
            fontSize: '1rem',
            border: 'none' // Ensure button has no border
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Msg_box;