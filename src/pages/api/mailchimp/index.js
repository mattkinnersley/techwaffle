import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
  apiKey: process.env.API_KEY,
  server: process.env.SERVER_PREFIX,
});

export default async function handler(req, res) {
  try {
    const email_address = req.body.email;
    const response = await client.lists.addListMember(process.env.LIST_ID, {
      email_address,
      status: "subscribed",
    });
    console.log(response);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(response);
  } catch (e) {
    console.error(e);
  }
}
