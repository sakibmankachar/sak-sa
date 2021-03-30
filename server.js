var dbd = require("dbd.js");
var fs = require("fs");
var bot = new dbd.Bot({
  token: process.env.BOT_TOKEN,
  prefix: ["<@$clientID>", "$getServerVar[prefix]"]
});

bot.onMessage();
bot.onLeave();
bot.onJoined();

Dashboard.API({

 port: process.env.PORT, //Put any port you want

 useSecureProtocol:true,

 authorizationKey: "Bearer root@1234",

 headers:{

 'Authorization': 'Bearer root@1234',



var reader = fs.readdirSync(`./commands`).filter(file => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./commands/${file}`);
  bot.command({
    name: command.name,
    code: command.code
  });
}
bot.status({
  text: "s.help | Ver. 1.0 Beta",
  type: "PLAYING",
  time: 300
});

bot.status({
  text: "$serverCount servers!",
  type: "WATCHING",
  time: 150
});

bot.status({
  text: "$membersCount Users!",
  type: "WATCHING",
  time: 150
});

bot.variables({
  prefix: "s.",
  rch: "",
  rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
  lvl: "0",
  exp: "0",
  rexp: "200",
  rsystem: "0",
  bank: "0",
  case: "",
  warns: "0",
  welcome: "",
  goodbye: "",
  prefix: "s.",
  money: "500",
  bw: "False",
  search: "",
  voteaccess: "True",
  apikey: process.env.DBLTOKEN,
  role: "off",
  rolelog: "",
  errorcol: "RED",
  color: "GREEN",
  giveaway: "",
  statusmsg: "",
  statusch: ""
});

bot.joinCommand({
  channel: "$getServerVar[welcome]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.

webp;.png;1]?size=2048&middle=Welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[We are now $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]`
});

bot.leaveCommand({
  channel: "$getServerVar[goodbye]",
  code: `$image[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png;1]?size=2048&middle=Goodbye&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23;-1]; ;%20;-1]&bottom=$replaceText[Now we are $membersCount members; ;%20;-1]&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
$suppressErrors`
});

bot.awaitedCommand({
  name: "awaitEval",

  code: `$deleteMessage[$message[1]]`
});

bot.awaitedCommand({
  name: "status",

  code: `$editMessage[$getServerVar[statusmsg];{title:Status:}{thumbnail:$userAvatar[$splitText[1]]}{color:$replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[1]];online;GREEN];offline;RED];idle;YELLOW];dnd;ORANGE]}{field:$username[$splitText[1]]:$replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[1]];offline;:red_circle: **\`Offline.\`**];online;:green_circle: **\`Online.\`**];dnd;:orange_circle: **\`Do not disturbe.\`**];idle;:yellow_circle: **\`Idle.\`**]:no}{field:Latency:\`$ping\`:yes}{field:RAM:\`$roundTenth[$ram;3]\`:yes}{field:CPU:\`$roundTenth[$cpu;3]\`:yes}{field:Developers:***$userTag[$splitText[2]]*** **|** $replaceText[$replaceText[$replaceText[$replaceText[$status[$splitText[2]];offline;:red_circle: **\`Offline.\`**];online;:green_circle: **\`Online.\`**];dnd;:orange_circle: **\`Do not disturbe.\`**];idle;:yellow_circle: **\`Idle.\`**]}{footer:Status:$userAvatar[$splitText[1]]}{timestamp}{author:$userTag[$splitText[1]]:$userAvatar[$splitText[1]]};$getServerVar[statusch]]

$textSplit[804720808182022245,769525910164471821;,]

$wait[1m]`
});
