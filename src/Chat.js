import React, { Component } from 'react'

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: "",
      messages: []
    }
    this.chatThreadRef = React.createRef()
  }

  handleMessageSubmit = e => {
    e.preventDefault();
    const messages = [...this.state.messages, this.state.input]
    this.setState({ messages, input: "" })
  }

  handleInput = e => {
    this.setState({ input: e.target.value })
  }

  // Great explanation of gSBU & cDU:
  // https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.state.messages.length > prevState.messages.length) {
      const chatThreadRef = this.chatThreadRef.current;
      return chatThreadRef.scrollHeight - chatThreadRef.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const chatThreadRef = this.chatThreadRef.current;
      console.log('Old position was ', chatThreadRef.scrollTop)
      console.log('New position was ', chatThreadRef.scrollHeight - snapshot)
      chatThreadRef.scrollTop = chatThreadRef.scrollHeight - snapshot;
    }
  }

  render = () => {
    const renderMessages = this.state.messages.map((m, idx) => <li key={idx} className="chat-message">{m}</li>)
    return (
      <div id="chat">
        <div id="close-chat" onClick={() => this.props.open(false)}>Close Chat</div>
        <div id="messages" ref={this.chatThreadRef}>
          <ul>
            {renderMessages}
          </ul>
        </div>
        <form onSubmit={this.handleMessageSubmit} >
          <input id="chat-input" type="text" value={this.state.input} onChange={this.handleInput}/>
        </form>
      </div>
    )
  }
}

export default Chat
