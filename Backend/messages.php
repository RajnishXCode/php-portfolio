<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$file = "submissions.json";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if ($name && $email && $message) {
        $data = file_exists($file) ? json_decode(file_get_contents($file), true) : [];

        if (!is_array($data)) {
            $data = [];
        }

        $data[] = [
            "name" => $name,
            "email" => $email,
            "message" => $message,
            "submitted_at" => date("Y-m-d H:i:s")
        ];

        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

        echo json_encode(["success" => true, "message" => "Message saved successfully!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Please fill all fields."]);
    }
}
else {
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        echo json_encode(["success" => true, "messages" => $data]);
    } else {
        echo json_encode(["success" => true, "messages" => []]);
    }
}
