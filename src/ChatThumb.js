import React, { Component } from 'react'

class ChatThumb extends Component {
  render = () => {
    return (
      <div id="chat-thumb" onClick={() => this.props.open(true)}>
        Open Chat
      </div>
    )
  }
}

export default ChatThumb
