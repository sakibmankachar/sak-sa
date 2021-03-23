module.exports = {
  name: "animecum",

  code: `
  $onlyNSFW[❌ This Command Can be Only Run in NSFW Channel]
$if[$getGlobalUserVar[voteaccess]==True]
$image[$jsonRequest[https://api.willz.repl.co/anime/cum;url]]
$elseif[$getGlobalUserVar[voteaccess]==False]

{description:❌ Vote Me in [top.gg\\](https://top.gg/bot/$clientID/vote)
Then Type \`s.voteaccess\`}

$endelseIf

$endif`
};
