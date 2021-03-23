module.exports = {
  name: "animefuck",

  code: `
  $if[$getGlobalUserVar[voteaccess]==True]

$image[$jsonRequest[https://api.willz.repl.co/anime/fuck;gif]]

$elseif[$getGlobalUserVar[voteaccess]==False]

{description:❌ Vote Me in [top.gg\\](https://top.gg/bot/$clientID/vote)
Then Type \`s.voteaccess\`}

$endelseIf

$endif`
};
