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

		$sql = "SELECT a.id_extra, a.title, a.description, a.confirmation, a.id_user, a.limit_slots, a.price, a.question, a.subsciption, a.subsciption_id, a.active, a.date FROM extras as a INNER JOIN users as b on b.id_user=a.id_user WHERE b.user_name='".$username."' and a.active=1";
		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			//echo 'Hola';
			//echo $result;
			while($row = $result->fetch_assoc()) {
				$array[] = array_map('utf8_encode', $row);
			}
			$res = json_encode($array, JSON_NUMERIC_CHECK);
			header('Content-Type: application/json');
			echo $res;
		} else {
			echo "0";
		}
	}else{
		echo "Not valid Body Data";
	}

}else{
	echo "Not valid Data";
}

$conn->close();
?>