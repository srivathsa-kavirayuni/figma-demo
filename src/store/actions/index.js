export const openChatAction = (payload) => {
  return {
    type: "OPEN_CHAT",
    payload,
  };
};

export const openChatSuccessAction = (payload) => {
  return {
    type: "OPEN_CHAT_SUCCESS",
    payload,
  };
};
