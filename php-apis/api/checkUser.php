<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once('../db-cnn/cnn.php');
$method = $_SERVER['REQUEST_METHOD'];

if($method == 'POST'){
	$requestBody=file_get_contents('php://input');
	$params= json_decode($requestBody);
	$params = (array) $params;

	if ($params['username']) {
		$username = $params['username'];

		$sql = "SELECT user_name FROM users WHERE user_name='".$username."'";
		$result = $conn->query($sql);
		

        if ($result->num_rows > 0) {
            echo "1";
        } else {
            $folders = array('passwordReset', 
            'olvidemicontrasena', 
            'adios',
            'admin',
            'chart',
            'comolovemifan',
            'css',
            'developers',
            'fonts',
            'gracias',
            'houstontenemosproblemas',
            'images',
            'js',
            'material',
            'micuenta',
            'mipagina',
            'misextras',
            'misfans',
            'mispagos',
            'notificaciones',
            'pagando',
            'perfil',
            'scss',
            'sign-in',
            'sign-up',
            'thanks',
            'template',
            'explorar',
            'misapoyos',
            'tunombreaqui');
            if (in_array($username, $folders)) {
                echo "1";
            }else{
                echo "0";
            }
        }
	}else{
		echo "Not valid Body Data";
	}

}else{
	echo "Not valid Data";
}

$conn->close();
?>