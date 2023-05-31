<?php

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