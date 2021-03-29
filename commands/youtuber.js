module.exports = {

name: "youtuber",

alliases: ['youtubechannel','ytr','ytc'],
  
  code: `

$title[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;name];$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;url]]

$addField[Total Views;$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;statistics.viewCount];no]

$addField[Subscriber;$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;statistics.subscriberCount];no]

$addField[Description;$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;description];no]

$footer[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;dateCreated]]

$thumbnail[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;logo]]

$color[RANDOM]

$sendMessage[Please wait.. this gonna take a long time.;no]

$argsCheck[>1;Please write the youtube channel.]

$suppressErrors[$jsonRequest[https://jastinch-api.ml/yt-channel?search=$message;message]] `

}

