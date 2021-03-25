// Enabling/disabling the chatbot.

module.exports = {
  name: "chatbotoption",

  code: `

$setServerVar[chatbot;$replaceText[$replaceText[%$message[1]%;%%;on;1];%$message[1]%;off;1]]

$argsCheck[>1; Please Type \`s.chatbotoption on\` to turn it on or \`s.chatbotoption off\` to turn it off]

$color[GREEN]

$description[$replaceText[$replaceText[$replaceText[%$message[1]%;%%;I went into a chat bot. To stop the mode, enter **\`s.chatbotoption off\`**.;1];%$message[1]%;The chatbot is disabled.;1];$getServerVar[chatbot];on;The chatbot is already enabled.;1]]

$footer[Requested by $userTag[$authorID];$userAvatar[$authorID]]

`
};
