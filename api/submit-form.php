<?php
// PHP Proxy for Google Apps Script Form Submissions
// This file should be uploaded to your server at: /api/submit-form.php

// Set CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data
    $input = file_get_contents('php://input');
    
    // Google Apps Script endpoint (user's deployed web app)
    $url = 'https://script.google.com/macros/s/AKfycbw4wvFOa-IIDfHIzJ02-DvnHGK1RyQgEUx8D-zICwOZEdndmGS0L2p0yDXnPtqMuBzGrQ/exec';
    
    // Prepare the context for the request
    $options = [
        'http' => [
            'header' => "Content-Type: application/json\r\n",
            'method' => 'POST',
            'content' => $input,
        ]
    ];
    
    // Create stream context
    $context = stream_context_create($options);
    
    // Send request to Google Apps Script
    $result = file_get_contents($url, false, $context);
    
    // Check if the request was successful
    if ($result === FALSE) {
        http_response_code(500);
        echo json_encode(['result' => 'error', 'message' => 'Failed to connect to Google Apps Script']);
    } else {
        // Return the response from Google Apps Script
        echo $result;
    }
} else {
    // Handle unsupported HTTP methods
    http_response_code(405);
    echo json_encode(['result' => 'error', 'message' => 'Method not allowed']);
}

// Add a simple test endpoint for debugging
if (isset($_GET['test'])) {
    echo json_encode(['result' => 'success', 'message' => 'PHP proxy is working correctly']);
}
?>