<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$db_username = 'root';
$db_password = '201289';
$db_name = 'chatapp';
$db_host = 'localhost';				
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($mysqli->connect_error) {
   die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
  $fname = mysqli_real_escape_string($mysqli, trim($request->fname));
  $lname = mysqli_real_escape_string($mysqli, trim($request->lname));
  $pass = mysqli_real_escape_string($mysqli, (int)$request->pass);
   $email = mysqli_real_escape_string($mysqli, trim($request->email));
   $avatar = mysqli_real_escape_string($mysqli, trim($request->avatar));
  $status = mysqli_real_escape_string($mysqli, trim($request->status));
  $sql = "INSERT INTO users(fname,lname,email,pass,avatar,status) VALUES ('{$fname}','{$lname}','{$email}','{$pass}','{$avatar}','{$status}')";
  // echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      'fname' => $fname,
      'lname' => $lname,
	  'pass' => '',
	  'email' => $email,
      'avatar' => $avatar,
      'status' => $status,
      'user_id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
}
}
?>