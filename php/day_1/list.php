<?php
$list = [
    "red" => "Rakoto",
    "green" => "Rabe",
    "blue" => "Ranaivo",
    "yellow" => "Messi",
    "orange" => "Crist",
    "purple" => "Lola",
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo "Title"; ?></title>
</head>
<body>
    
    <?php
        foreach ($list as $key => $value) {
            echo "<p style='color:" . $key . "'>". $value . "</p>";
        } 
    ?>
    
</body>
</html>