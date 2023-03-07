<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
function conectar (){

    $host="localhost";
    $user="root";
    $pass="201289";

    $bd="chatapp";

    $con= mysqli_connect($host, $user, $pass, $bd);

    if ($con->connect_error) {
        die('Error : ('. $con->connect_errno .') '. $con->connect_error);
    }

    return $con;

}




?>