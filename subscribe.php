<?php 
		$servername = "localhost";
        $username = "root";
        $password = "";
        $db="emails";
        $conn = mysqli_connect($servername, $username, $password,$db);
	$email=$_POST['email'];
	$sql = "INSERT INTO `emails`( `id`, `email`) VALUES ('','$email')";
	if (mysqli_query($conn, $sql)) {
		echo json_encode(array("statusCode"=>200));
	} 
	else {
		echo json_encode(array("statusCode"=>201));
	}
	mysqli_close($conn);