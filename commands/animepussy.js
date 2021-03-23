module.exports = {
  name: "animepussy",

  code: `
  $onlyNSFW[❌ This Command Can be Only Run in NSFW Channel]

$if[$getGlobalUserVar[voteaccess]==True]

$image[$jsonRequest[https://nekos.life/api/v2/img/pussy;url]]

$elseif[$getGlobalUserVar[voteaccess]==False]

{description:❌ Vote Me in [top.gg\\](https://top.gg/bot/$clientID/vote)
Then Type \`s.voteaccess\`}

$endelseIf

$endif`
};
