import { Client } from "@xmtp/xmtp-js";

export const initChat = async (wallet) => {
  const client = await Client.create(wallet);
  const conversation = await client.conversations.newConversation("peer@xmtp.dev");
  await conversation.send("Hello from Kikundi DApp!");
};
                          
