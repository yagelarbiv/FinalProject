import propTypes from 'prop-types';
import ChatMessage from './ChatMessage';

function MessageList({ messages }) {

    return (
        <div className="message-list">
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
        </div>
    );
}


export default MessageList;
