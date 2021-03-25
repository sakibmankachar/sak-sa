module.exports = {
  name: "deposit",
  aliases: ['dep'],
  code: `
  $if[$message==$isNumber]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sub[$getUserVar[money;$authorID];$message];$authorID]
$description[You deposited :dollar: $message in your :bank: bank]
$author[$username;$authorAvatar]
$suppressError[Not a Vaild Number!]
$elseif[$message==all]
$addfield[Deposit;**You have Deposited everything into bank**]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$getUserVar[bank;$authorID]];$authorID]
$setUserVar[money;$sub[$getServerVar[money;$authorID];$getServerVar[money;$authorID]];$authorID]
$endelseif
$endif
$onlyIf[$message<=$getUserVar[money;$authorID];That amount is higher than the amount in your wallet!]
$onlyIf[$message>0;You cannot deposit an amount lower than \`0\`. If you want to deposit all, then use the command \`s.deposit all\`]
`
};
