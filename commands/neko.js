module.exports = {
  name: "12345nekos",

  code: `
  $onlyNSFW[❌ This Command Can be Only Run in NSFW Channel]

$if[$getGlobalUserVar[voteaccess]==True]

$image[$jsonRequest[https://nekos.life/api/lewd/neko;neko]]

$elseif[$getGlobalUserVar[voteaccess]==False]

{description:❌ Vote Me in [top.gg\\](https://top.gg/bot/$clientID/vote)

Then Type \`s.voteaccess\`}

$endelseIf

$endif`
};
