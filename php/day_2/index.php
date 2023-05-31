<?php
declare(strict_types = 1);

if (1 === "1") {
    echo "yes";
} else {
    echo "no";
}

echo "<br>";

echo 1 == "1" ? "yes" : "no"; // condition ternaire

echo "<br>";

$name = "Sanda";
switch ($name) {
    case 'Lola':
        echo "lola";
        break;

    case 'Sanda':
        echo "Sanda";
        break;

    default:
        echo "Tsisy ee";
        break;
}

echo "<br>";

// int, float, bool, string, null, object, array

function direBonjour($name) {
    return "Bonjour ".$name;
}

echo direBonjour("Lova");

function addition(int $a, int $b) {
    return $a + $b;
}

function soustraction($a, $b) {
    return $a - $b;
}

function multiplication($a, $b) {
    return $a * $b;
}

function division($a, $b) {
    return $a + $b;
}

// function getFullName(String $nom, ?string $prenom) => ? = nullable
// default value : function name($nom, $prenom = 'value')

echo "<br>";

echo addition(2, 2);
//echo addition("1", "5");

echo "<br>";

//sum elements of an array
function sumArray(array $numbers) {
    $sum = 0;
    foreach ($numbers as $n) {
        $sum += $n;
    }
    return $sum;
}

//function getStat
function getStats($array) {
    $sum = sumArray($array);
    $length = count($array);
    $average = $sum / $length;

    //pair / impair
    $nombrePair = [];
    $nombreImpair = [];
    foreach($array as $a) {
        if ($a % 2 === 0) {
            $nombrePair[] = $a;
        } else {
            $nombreImpair[] = $a;
        }
    }

    $result = [
        'average' => $average,
        'pair' => $nombrePair,
        'impair' => $nombreImpair
    ];

    return $result;
}

$result = getStats([10, 10, 5, 15]);

echo "<pre>";
var_dump(getStats([10, 10, 5, 15]));
echo "</pre>";