import { createStore, applyMiddleware } from "redux";
import * as reducers from "store/reducers";
import { routerMiddleware } from "connected-react-router";
import { createRootReducer } from "store/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const customMiddleWare = (store) => (next) => (action) => {
  console.log("Middleware triggered:", action);
  next(action);
};

const initStore = (dependencies, history) => {
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["localPersist"],
  };

  const rootReducer = createRootReducer(history, reducers);
  const initialState = window.__PRELOADED_STATE__;

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), customMiddleWare)
    )
  );

  const persistedStore = persistStore(store);

  return { store, persistedStore };
};

export default initStore;
