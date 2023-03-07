<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    
    $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
    
    $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE
    
    $nombreArchivo = $params->nombreArchivo;
    $archivo = $params->base64textString;
    $archivo = base64_decode($archivo);
    
    $filePath = $_SERVER['DOCUMENT_ROOT']."/chatphp/img/".$nombreArchivo;
    file_put_contents($filePath, $archivo);
  
    
    
    class Result {}
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    $mensaje = 'SE SUBIO EXITOSAMENTE';
    $resultado = 'OK';
    $response=$resultado;
    $response=$mensaje;
    
    header('Content-Type: application/json');
    echo json_encode($response); // MUESTRA EL JSON GENERADO */
    
?>