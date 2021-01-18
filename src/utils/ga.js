export const sendEvent = ({ eventName, data }) => {
  gtag("event", eventName, data);
  console.log(`GA Analytics - ${eventName}`, data);
};

export const sendScreenViewEvent = ({ title }) => {
  sendEvent({ eventName: "screen_view", data: { screen_name: title } });
};
