module.exports = {
  name: "pokedex",

  code: `

$argsCheck[>1; Please Type a Pokemon Name!]

$title[$toUppercase[$message]]

$description[$jsonRequest[https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=$message;description]]

$image[https://play.pokemonshowdown.com/sprites/xyani/$toLowercase[$message].gif]`
};
