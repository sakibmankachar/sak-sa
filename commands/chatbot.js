// Chatbot

module.exports = {
  name: "chatbot",

  code: `

> $message

<@$authorID> $jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$message; ;%20;-1]&botname=$replaceText[$username[$clientID]; ;%20;-1]&ownername=$replaceText[$username[BOT OWNER ID]; ;%20;-1]&user=$replaceText[$username; ;%20;-1];message]

$suppressErrors[{color:RED} {title:Error!} {description:Something went wrong... Turn chatbot off, and try again later.}]

$botTyping

$onlyIf[$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$replaceText[$message; ;%20;-1]&botname=$replaceText[$username[$clientID]; ;%20;-1]&ownername=$replaceText[$username[BOT OWNER ID]; ;%20;-1]&user=$replaceText[$username; ;%20;-1];message]!=;]

$onlyIf[$getServerVar[chatbot]!=off;]

`
};
