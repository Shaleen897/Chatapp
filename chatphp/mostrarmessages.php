<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
require('conexion.php');
$con = conectar();

$sql= "SELECT * FROM messages";

$query=mysqli_query($con, $sql);

$todo=[];
while($row=mysqli_fetch_array($query)){
  $todo[]=$row;
}
$json=json_encode($todo);
echo $json;
header('Content-Type: application/json');
?>