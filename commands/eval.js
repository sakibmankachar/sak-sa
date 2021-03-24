const dbd = require("dbd.js");

module.exports = {
  name: "eval",

  description:
    "Executes the code you specified if it is not more than 1000 characters",

  usage: "eval <code>",

  code: `$suppressErrors[{title::x: Error!} {description:There is an error in the code!}{color: $getVar[errorcol]}]

$reactionCollector[$splitText[1];$authorID;20m;🔨;awaitEval;no]

$textSplit[$sendMessage[{title:$randomText[It's really safe?; Well...;Hmmmm :);Eval]}

{field::inbox_tray: Input:\`\`\`$message\`\`\`} {field::outbox_tray: Output:\`\`\`$eval[$message;yes]\`\`\`} {color:$getVar[color]} ;yes]; ]

$argsCheck[>1;{title::x: Error!} {description: Please Enter the code!}{color: $getVar[errorcol]}]

$onlyForIDs[769525910164471821;]`
};
