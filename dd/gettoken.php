<?php

function getToken()
{
	$username = "TU_USER_AQUI_COLEGA";
	$password = "TU_KEY_AQUI_COLEGA";
	$remote_url = 'https://api.mobipalma.mobi/1.2/login/getToken';	

	// Create a stream
	$opts = array(
		'http'=>array(
			'method'=>"GET",
			'header' => "Authorization: Basic " . base64_encode("$username:$password")                 
			)
		);

	$context = stream_context_create($opts);

	// Open the file using the HTTP headers set above
	$file = file_get_contents($remote_url, false, $context);

	$f = json_decode($file);
	return $f->{'token'};
}

if( $_SERVER['REQUEST_METHOD'] == 'POST' ) {
	$user = $_POST['username'];
	$pass = $_POST['password'];

	echo json_encode(array(
		token => getToken()
		)
	);
}







?>