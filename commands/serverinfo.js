module.exports = {
  name: "Serverinfo",

  alliases: ['guildinfo'']

  code: `

$channelSendMessage[$channelID;Wait for 6-7 second for to load!]

$thumbnail[$serverIcon?size=2048]

$title[Server] 

$description[🔸 ID Server : $guildID

🔸 Name Server : $serverName[$guildID]

🔸 Create Server : $creationDate[$guildID]

🔸 Icon : $replaceText[$replaceText[$isAdmin[(your bot id)];false;❌ No Results;1];true;$serverIcon?size=2048;1]

🔸 ID Icon : $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[6];.png; ;1];.gif; ;1];.jpg; ;1];.bmp; ;1];.tiff; ;1];.ico; ;1]

🔸 Member : $membersCount

🔸 Online : $membersCount[online]

🔸 Idle : $membersCount[idle]

🔸 DnD : $membersCount[dnd]

🔸 Offline : $sub[$membersCount;$membersCount[online];$membersCount[idle];$membersCount[dnd]]

🔸 Owner : $username[$serverOwner]#$discriminator[$serverOwner]

ID = $serverOwner

🔸 Region : $serverRegion

🔸 Verification : $serverVerificationLvl

🔸 Channel : $channelCount

🔸 Emote : $emoteCount

🔸 Top Role : $roleName[$highestRole[$authorID]]

ID = $highestRole 

Mention = $replaceText[$replaceText[$isMentionable[$highestRole];false;No;1];true;Yes;1]

Display Role  = $replaceText[$replaceText[$isHoisted[$highestRole];false;No;1];true;Yes;1]

Color = #$getRoleColor[$highestRole]

Create = $creationDate[$highestRole]

Status = $replaceText[$replaceText[$roleExists[$highestRole];false;❌;1];true;✅;1] • $replaceText[$replaceText[$isValidHex[$getRoleColor[$highestRole]];false;❌;1];true;✅;1]

Perms = Kick $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[kick]==$highestRole];true;✅;1];false;❌;1] Ban $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[ban]==$highestRole];true;✅;1];false;❌;1] Manage Roles $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[manageroles]==$highestRole];true;✅;1];false;❌;1] Manage Channel $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[managechannels]==$highestRole];true;✅;1];false;❌;1] Manage Server $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[manageserver]==$highestRole];true;✅;1];false;❌;1] Manage Messages $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[managemessages]==$highestRole];true;✅;1];false;❌;1] Manage Emoji $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[manageemojis]==$highestRole];true;✅;1];false;❌;1] Add Reactions $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[addreactions]==$highestRole];true;✅;1];false;❌;1] Send Message $replaceText[$replaceText[$checkCondition[$highestRoleWithPerms[sendmessages]==$highestRole];true;✅;1];false;❌;1]

🔸 Role : $roleCount

= $replaceText[$replaceText[$checkCondition[$argCount[$replaceText[$roleNames;@everyone;Everyone;-1]]>50];false;$replaceText[$roleNames;@everyone;Everyone;-1];1];true;❌ Failed Load It;1]

🔸 $charCount[$replaceText[$roleNames;@everyone;Everyone;-1]] Character Of Role • $argCount[$replaceText[$roleNames;@everyone;Everyone;-1]] Argument Of Role]

$color[00FF00]

$onlyIf[$guildID!=;]

$embedSuppressErrors[;Failed Running.;00ff00;;❌ Error;]

$textSplit[$serverIcon;/]`
};
