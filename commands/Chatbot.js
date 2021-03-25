module.exports = {
  name: "chatbot",

  code: `

$argsCheck[>1;Please Type a Message!]

$color[RED]

$description

**Message:**
$jsonRequest[https://beta-api.tk/api/other/chat-bot?message=$replaceText[$message; ;%20]&authKey=NCYTOOTYmV4HBbvUwvGBFW40vKbqqzSG6frxhg6IuHk6SiPGsBlF6YvPpzPQ;message]

**Response:**
$jsonRequest[https://beta-api.tk/api/other/chat-bot?message=$replaceText[$message; ;%20]&authKey=NCYTOOTYmV4HBbvUwvGBFW40vKbqqzSG6frxhg6IuHk6SiPGsBlF6YvPpzPQ;response]]`
};
