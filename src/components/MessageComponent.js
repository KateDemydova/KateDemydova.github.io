import { jsx as _jsx } from "react/jsx-runtime";
import { use } from "react";
import './MessageComponent.css';
const MessageComponent = ({ messagePromise }) => {
    const message = use(messagePromise);
    return _jsx("div", { className: "message-container", children: message });
};
export default MessageComponent;
