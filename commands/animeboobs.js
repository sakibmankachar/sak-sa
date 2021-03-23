module.exports = {
  name: "animeboobs",

  code: `

$if[$getGlobalUserVar[voteaccess]==True]

$image[$jsonRequest[https://nekos.life/api/v2/img/boobs;url]]

$elseif[$getGlobalUserVar[voteaccess]==False]

{description:❌ Vote Me in [top.gg\\](https://top.gg/bot/$clientID/vote)}

$endelseIf

$endif`
};
