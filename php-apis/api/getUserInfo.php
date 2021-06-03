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

		$sql = "SELECT a.id_user, a.about, a.creation FROM users as a WHERE a.user_name='".$username."'";

		$result = $conn->query($sql);
		if ($result->num_rows > 0) {
			//echo 'Hola';
			//echo $result;
			while($row = $result->fetch_assoc()) {
				$idUser = $row["id_user"];
				$array[] = array_map('utf8_encode', $row);
			}

            $sql2 = "SELECT a.id_extra, a.title, a.description, a.confirmation, a.price, a.question, (b.payment_count - a.limit_slots) as quedan, a.subsciption 
            FROM extras as a 
            INNER JOIN (SELECT d.id_extra , COUNT(a.id_extra) AS payment_count FROM extras d LEFT JOIN payments a ON a.id_extra=d.id_extra WHERE d.active=1 and d.id_user=".$idUser." GROUP BY d.id_extra) as b on a.id_extra=b.id_extra 
            WHERE a.active=1 and id_user=".$idUser." ORDER BY quedan desc";
            $result2 = $conn->query($sql2);

            if ($result2->num_rows > 0) {
            // output data of each row
                while($row2 = $result2->fetch_assoc()) {
                    $array[] = array_map('utf8_encode', $row2);
                }

                $sql3 = "SELECT a.id_users_posts, a.text, a.date FROM users_posts as a WHERE a.is_deleted=0 and a.id_user=".$idUser." ORDER BY a.date DESC";
                $result3 = $conn->query($sql3);

                if ($result3->num_rows > 0) {
                // output data of each row
                    while($row3 = $result3->fetch_assoc()) {
                        $array[] = array_map('utf8_encode', $row3);
                    }

                    $sql4 = "SELECT a.id_payments, a.note_fan, a.date FROM payments as a WHERE a.isPublic_note_fan=1 and a.status='completed' and id_user=".$idUser." ORDER BY a.date DESC";
                    $result4 = $conn->query($sql4);

                    if ($result4->num_rows > 0) {
                    // output data of each row
                        while($row4= $result4->fetch_assoc()) {
                            $array[] = array_map('utf8_encode', $row4);
                        }

                        $res = json_encode($array, JSON_NUMERIC_CHECK);
                        header('Content-Type: application/json');
                        echo $res;
                    } else {
                        echo "0 results";
                    }

                    
                } else {
                    echo "0 results";
                }

                
            } else {
                echo "0 results";
            }
			
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