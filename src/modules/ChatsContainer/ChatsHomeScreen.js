import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import moment from "moment";
import { openChatAction, openChatSuccessAction } from "store/actions/index";

export const HomeScreen = (props) => {
  return (
    <>
      <div className="home-container">
        <div className="chat-search-bar">
          <img
            className="search-icon"
            src="https://www.pngall.com/wp-content/uploads/8/Search-PNG-Images.png"
          />
          <input className="chat-searchBar" />
        </div>
        <div className="chat-groups-block">
          <div>
            <p className="groupTitle">Groups</p>
          </div>
          {props.groups1 && props.groups1.length > 0 && (
            <LoadChat
              data={props.groups1}
              updateSelectedChat={props.updateSelectedChat}
            />
          )}
        </div>
        <div className="chat-groups-block-2">
          <div>
            <p className="groupTitle">Chats</p>
          </div>
          {props.groups2 && props.groups2.length > 0 && (
            <LoadChat
              data={props.groups2}
              updateSelectedChat={props.updateSelectedChat}
            />
          )}
        </div>
      </div>
    </>
  );
};

const LoadChat = ({ data, updateSelectedChat }) => {
  const dispatch = useDispatch();

  return data.map((chat, index) => {
    return (
      <>
        <div
          className="chat"
          onClick={() => {
            updateSelectedChat(chat.name);
            dispatch(openChatAction("Test Payload"));
            setTimeout(() => dispatch(openChatSuccessAction("test success")), 2000);
          }}
        >
          <div>
            {" "}
            <img src={chat.icon} className="chat-icon" />
          </div>
          <div style={{ width: "50%", marginLeft: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "80%",
              }}
            >
              <div>
                <strong>{chat.name}</strong>
              </div>
              <div>
                <small>{chat.lastMessage}</small>
              </div>
            </div>
          </div>
          <div>
            <small>{moment(chat.date).calendar()}</small>
          </div>
        </div>
      </>
    );
  });
};

const mapStateToProps = (state) => ({
  groups1: state.chats.group1,
  groups2: state.chats.group2,
});

export default compose(connect(mapStateToProps))(HomeScreen);
