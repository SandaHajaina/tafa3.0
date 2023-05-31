<?php
/* 
    lancer serveur: php -S localhost:8000 -t .
    -S : serve
    -t : target
    . : directory
*/
echo "Hello word";
$color = "blue";
echo "<br>";
echo $color;
echo "<br>";

$nom = "Sanda " . "Hajaina";
$prenom = "jr";
echo "<br>";

echo $nom. " " .$prenom;

const COLOR = "Red";
echo "<br>";

echo COLOR;
echo "<br>";

var_dump($color);
echo "<br>";
$colorList = ["red", "green", "yellow"];

//var_dump($colorList);

for ($i = 0; $i < count($colorList); $i++) {
    echo ($colorList[$i] . "<br>");
}

$colorList = [
    "color1" => "red",
    "color2" => "green",
    "color3" => "blue",
];
echo "<br>";
//echo $colorList["color1"];

foreach($colorList as $value) {
    echo $value. "<br>";
}

foreach($colorList as $key => $value) {
    echo $key. ":" .$value. "<br>";
}