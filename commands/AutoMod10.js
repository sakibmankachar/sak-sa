module.exports = {
  name: "$alwaysExecute",
  nonPrefixed: true,
  code: `
  $deletecommand
 $onlyIfMessageContains[$message;fucked;]
 $onlyIf[$getServerVar[bw]==True;]
 <@$authorID> Use Of Bad Words or Swearing is Not Allowed in this server  | Reason: **AutoMod Enable**
 `
}
