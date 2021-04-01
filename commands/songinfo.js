module.exports = {
  name: "songinfo",

  code: `

$title[$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.title];$message[1]]

$thumbnail[$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.thumbnail]]

$addField[Likes;$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.likes];yes]

$addField[Commented;$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.commentsCount];yes]

$addField[Played;$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.playCount];yes]

$addField[Duration;$parseDate[$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];songInfo.duration];time];no]

$color[RANDOM]

$argsCheck[1;Put the SoundCloud URL Song.]

$suppressErrors[$jsonRequest[https://api.leref.ga/soundcloud?url=$message[1];message]] `
};
