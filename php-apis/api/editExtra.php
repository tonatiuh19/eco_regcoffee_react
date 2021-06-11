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

	if ($params['idUser']) {
        $idUser = $params['idUser'];
        $id_extra = $params['id_extra'];
		$title = $params['title'];
        $price = $params['price'];
        $description = $params['description'];
        $confirmation = $params['confirmation'];
        $suscription = $params['suscription'];
        $suscriptionId = $params['suscriptionId'];
        $question = $params['question'];
        $limit = $params['limit'];
        $todayVisit = date("Y-m-d H:i:s");


        $sql2 = "UPDATE extras SET active=2 WHERE id_extra=".$id_extra."";

        if ($conn->query($sql2) === TRUE) {
            $sql = "INSERT INTO extras (title, description, confirmation, id_user, limit_slots, price, question, subsciption, subsciption_id, active, date)
            VALUES ('$title', '$description', '$confirmation', '$idUser', '$limit', '$price', '$question', '$suscription', '$suscriptionId', '3', '$todayVisit')";

            if ($conn->query($sql) === TRUE) {
                echo "1";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Error updating record: " . $conn->error;
        }
            
    }else{
            echo "Not valid Body Data";
    }
}else{
	echo "Not valid Data";
}

$conn->close();
?>