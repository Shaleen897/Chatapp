<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$json= file_get_contents('php://input');

$params= json_decode($json);

require('conexion.php');
$con = conectar();

$contact_id = $params->contact_id;
$text_from = $params->text_from;
$text_to = $params->text_to;
$messaget = $params->messaget;
$timedate = $params->timedate;

$sql="INSERT INTO messages (contact_id, text_from, text_to, messaget, timedate) VALUES 
('$contact_id','$text_from','$text_to','$messaget','$timedate')";

$query=mysqli_query($con, $sql);
class Result{}

$response = new Result();
$response=$resultado = 'OK';
$response=$mensaje= 'Datos agregados';


header('Content-Type: application/json');
echo json_encode($response);
?>