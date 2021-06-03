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
    $todayVisit = date("Y-m-d H:i:s");

	if ($params['email']) {
		$pwd = $params['pwd'];
        $username = $params['username'];
        $mail = $params['email'];


        $sql2 = "SELECT email FROM users WHERE email='".$mail."'";
        $result2 = $conn->query($sql2);

        if ($result2->num_rows > 0) {
            //UserEmail exists
            echo "2";
        
        } else {
            $sql = "INSERT INTO users (email, pwd, user_name, date, about) VALUES ('$mail', '$pwd', '$username', '$todayVisit', '¡Oye!, acabo de crear una super página aquí. ¡Ahora puedes invitarme a un café!')";

            if ($conn->query($sql) === TRUE) {
                $sql3 = "SELECT email, id_user, user_name FROM users WHERE email='$mail' AND pwd='$pwd' and active=1";
                $result3 = $conn->query($sql3);
                
                if ($result3->num_rows > 0) {
                    //echo 'Hola';
                    //echo $result;
                    while($row3 = $result3->fetch_assoc()) {
                        $array[] = array_map('utf8_encode', $row3);
                    }
                    $res = json_encode($array, JSON_NUMERIC_CHECK);
                    header('Content-Type: application/json');
                    echo $res;
                } else {
                    echo "0";
                }
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
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