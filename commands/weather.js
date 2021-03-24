module.exports = {
  name: "weather",

  code: `

$title[Weather On $message]

$image[https://wttr.in/$replaceText[$message; ;%20].png]

$argsCheck[>1; Please Type a City or Country Name]`
};
