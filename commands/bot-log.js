module.exports = {
  name: "s.$message",

  nonPrefixed: true,

  code: `

$author[$userTag[$clientID];$userAvatar[$clientID]]

$description[\`Channel:\` **$channelName**

\`Server:\` **$serverName**

\`Message:\` **s.$message**

\`Username:\` **$username#discrimination[$authorID]** (\`$authorID\`)

\`Server invite:\` **$getserverInvite**]

$useChannel[824177228719325225]`
};
