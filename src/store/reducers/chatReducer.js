import { groupData, groupData2, loadMessages} from "./data";

const initialState = {
  group1: groupData,
  group2: groupData2,
};

const chatReducer = (state = { ...initialState }, action) => {
  console.log("Chck acton type ; ", action.type)
  switch (action.type) {
    case "LOAD_CHATS": {
      return {
        ...state,
      };
    }
    case "OPEN_CHAT": {
      return {
        loadingChat: true,
        ...state,
      };
    }
    case "OPEN_CHAT_SUCCESS": {
      console.log("in open success ",action.payload)
      return {
        ...state,
        loadingChat: false,
        loadMessages: loadMessages
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default chatReducer;
