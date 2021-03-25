module.exports = {
  name: "setchatbot",

  name: `

$argsCheck[>1; Please Type \`s.setchatbot on\` to turn it on or \`s.setchatbot off\` to turn it off]

$if[$message[1]==on]

$setServerVar[chatbot;on]

$addfield[Chat is now On;Successfully Turned on Chatbot!]

$elseif[$message[1]==off]

$setServerVar[chatbot;off]

$addfield[Chat is now off;Successfully Turned off Chatbot!]

$endelseif

$endif`
};
