module.exports = {
  name: "status",

  code: `

$loop[999999999999;status]

$setServerVar[statusmsg;$splitText[1]]

$setServerVar[statusch;$channelID]

$textSplit[$sendMessage[Loading...;yes]; ]

$onlyForIDs[769525910164471821;]`
};
