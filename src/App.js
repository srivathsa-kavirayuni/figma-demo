import React, { useState } from "react";
import "./App.css";
import MenuBar from "modules/MenuBar/MenuBar";
import HomeScreen from "modules/ChatsContainer/ChatsHomeScreen";
import ChatBox from "modules/Content/ChatContainer";
import { connect } from "react-redux";
import { compose } from "redux";

function App(props) {
  const [selectedChat, updateSelectedChat] = useState();
  console.log("Check app props : ", props);

  return (
    <>
      <div className="app-container">
        <div>
          <MenuBar />
        </div>
        <div>
          <HomeScreen updateSelectedChat={updateSelectedChat} />
        </div>
        <div>
          <ChatBox selectedChat={selectedChat} updateSelectedChat={updateSelectedChat}/>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  chat: state.chats
})
export default compose(connect(mapStateToProps, null))(App);
