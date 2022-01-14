import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

export const ChatBox = (props) => {
  console.log("Check render : ", props);
  return props.selectedChat ? (
    <>
      <div className="chat-container">
        <div className="chat-header">
          <div>
            <img
              className="profile-icon "
              src="https://cdn2.vectorstock.com/i/1000x1000/81/26/social-media-online-icon-avatar-frame-live-vector-29528126.jpg"
            />
          </div>
          <div className="chat-title">
            <strong>{props.selectedChat}</strong>
            <div>
              <small>Online</small>
            </div>
          </div>
          <div>
            <img
              className="menu-icon"
              src="https://cdn1.iconfinder.com/data/icons/ui-colored-2-of-3/100/UI_2__39-512.png"
            />
            <img
              className="menu-icon"
              src="https://cdn1.vectorstock.com/i/1000x1000/51/25/video-call-icon-vector-31535125.jpg"
            />
            <img
              className="menu-icon"
              src="https://cdn4.iconfinder.com/data/icons/utilities-part-2/64/dots-512.png"
            />
            <img
            className="menu-icon"
            src="https://cdn1.vectorstock.com/i/1000x1000/56/30/single-flat-close-icon-icon-with-long-shadow-vector-2715630.jpg"
            onClick={() => props.updateSelectedChat("")}/>
          </div>
        </div>
        <div className="chat-messages">
          {props.loadingChat
            ? "Opening Chat ...."
            : props.loadMessages.map((chat, index) => {
                return (
                  <>
                    <div className={chat.own ? "own-message" : "not-own"}>
                      {chat.message}
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  loadingChat: state.chats.loadingChat,
  loadMessages: state.chats.loadMessages
});

export default compose(connect(mapStateToProps))(ChatBox);
