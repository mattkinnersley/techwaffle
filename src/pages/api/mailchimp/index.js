import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
});

export default async function handler(req, res) {
  try {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
    const email_address = req?.body?.email;
    const validEmail = email_address && emailRegex.test(email_address);
    if (validEmail) {
      const response = await client.lists.addListMember(process.env.LIST_ID, {
        email_address,
        status: "subscribed",
      });
      res.status(200).json(response);
    } else {
      res.status(400).json({
        error: "Email validation failed",
        errorMessage: "Please enter a valid email address.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: "Unexpected Server Error",
      errorMessage: "Sorry, something went wrong, please try again later.",
    });
  }
}
