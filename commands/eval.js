module.exports = {
  name: "eval",

  code: `

$if[$message[1]==dbd]

$eval[$messageSlice[1]]

$elseIf[$message[1]==js]

$djsEval[$messageSlice[1]]

$endelseIf

$elseIf[$message[1]==set-cmd]

$let[eval-cmd-$message[2];$messageSlice[2]]

Successfully set command $message[2]!

$endelseIf

$elseIf[$message[1]==quick-run]

$eval[$get[eval-cmd-$message[2]]]

$endelseIf

$elseIf[$message[1]==quick-run-js]

$djsEval[$get[eval-cmd-$message[2]]]

$endelseIf

$elseIf[$message[1]==load-cmd]

$let[eval-current-cmd;$message[2]]

Successfully loaded command $message[2]!

$endelseIf

$else

$eval[$get[eval-cmd-$get[eval-current-cmd]]]

$endIf

$onlyForIDs[$botOwnerID;You are not allowed to use this command!]`
};
