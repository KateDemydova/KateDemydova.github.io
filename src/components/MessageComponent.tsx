import React, {use} from "react";
import {MessageComponentProps} from "../types/MessageComponentProps";
import './MessageComponent.css'

const MessageComponent: React.FC<MessageComponentProps> = ({messagePromise}) => {
    const message = use(messagePromise);
    return <div className="message-container">{message}</div>;
};

export default MessageComponent;





