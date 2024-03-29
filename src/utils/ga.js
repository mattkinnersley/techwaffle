const isLocal = process.env.NODE_ENV === "development";

export const sendEvent = ({ eventName, data }) => {
  if (isLocal) {
    console.log("GA is disabled in dev mode.");
  } else {
    gtag("event", eventName, data);
  }
  console.log(`Google Analytics - ${eventName}`, data);
};

export const sendScreenViewEvent = ({ title }) => {
  sendEvent({ eventName: "screen_view", data: { screen_name: title } });
};
export const sendSignUpEvent = ({ method }) => {
  sendEvent({ eventName: "sign_up", data: { method } });
};
export const sendSelectContentEvent = ({ content_type, item_id }) => {
  sendEvent({ eventName: "select_content", data: { content_type, item_id } });
};
