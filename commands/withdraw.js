module.exports = {
  name: "withdraw",
  aliases: ['with'],
  code: `$if[$message==$isNumber]
  $setUserVar[bank;$sub[$getUserVar[bank;$authorID];$message];$authorID]
$setUserVar[money;$sum[$getUserVar[money;$authorID];$message];$authorID]
$description[You withdrew :dollar: $message from your :bank: bank]
$author[$username;$authorAvatar]
$suppressErrors[Not a valid number!]
$elseif[$message=all]
$addfield[Withdraw;**You have Withdrawn everything from your bank**]
$setUserVar[bank;$sub[$getUserVar[bank;$authorID];$getUserVar[bank;$authorID]];$authorID]
$setUserVar[money;$sum[$getServerVar[money;$authorID];$getServerVar[money;$authorID]];$authorID]
$endelseif
$endif
$onlyIf[$message<=$getUserVar[bank;$authorID];That amount is higher than the amount in your bank!]
$onlyIf[$message>0;You cannot withdraw an amount lower than \`0\`. If you want to withdraw all, then use the command s.withdraw all]`
};
