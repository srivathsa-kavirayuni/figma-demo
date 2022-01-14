import { combineReducers } from "redux";
import appReducer from "./appReducer";
import chatReducer from "./chatReducer";

export const createRootReducer = (
  reducers,
  additionalReducers = {}
) =>
  combineReducers({
    ...reducers,
    app: appReducer,
    chats: chatReducer,
    ...additionalReducers,
  });

