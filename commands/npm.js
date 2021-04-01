module.exports = {
  name: "npm",

  code: `

$title["$jsonRequest[https://api.leref.ga/npm?search=$message;name]": "^$jsonRequest[https://api.leref.ga/npm?search=$message;version]"]

$description[\`$jsonRequest[https://api.leref.ga/npm?search=$message;description]\`]

$addField[Downloaded;$jsonRequest[https://api.leref.ga/npm?search=$message;downloads.total.downloads];no]

$addField[NPM;$jsonRequest[https://api.leref.ga/npm?search=$message;npm]

npm install $jsonRequest[https://api.leref.ga/npm?search=$message;downloads.total.package];no]

$footer[$jsonRequest[https://api.leref.ga/npm?search=$message;publisher]]

$attachment[https://api.leref.ga/npm?search=$message;data.json]

$color[RANDOM]

$argsCheck[>1;Name NPM?]

$suppressErrors[$jsonRequest[https://api.leref.ga/npm?search=$message;message]]`
};
