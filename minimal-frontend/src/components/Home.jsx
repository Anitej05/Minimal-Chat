import React from 'react'
import Msg_box from './home-components/msg_box'
import Chat_window from './home-components/chat_window'

function Home() {
  return (
    <div className= "d-flex flex-column align-items-center justify-content-center" style={{minHeight: '90vh'}}>
      <Chat_window />
      <Msg_box />
    </div>
  )
}

export default Home