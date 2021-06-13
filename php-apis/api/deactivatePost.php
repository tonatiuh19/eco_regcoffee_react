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

	if ($params['id_users_posts']) {
        $id_users_posts = $params['id_users_posts'];
        $todayVisit = date("Y-m-d H:i:s");


        $sql2 = "UPDATE users_posts SET is_deleted=1 WHERE id_users_posts=".$id_users_posts."";

        if ($conn->query($sql2) === TRUE) {
            echo "1";
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