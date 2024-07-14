<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "react_project";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$checkin = $_POST['checkin'];
$checkout = $_POST['checkout'];
$adults = $_POST['adults'];
$children = $_POST['children'];
$room_no = $_POST['room_no'];

// Insert data into the database
$sql = "INSERT INTO bookings (name, email, phone, checkin, checkout, adults, children, room_no)
        VALUES ('$name', '$email', '$phone', '$checkin', '$checkout', '$adults', '$children', '$room_no')";

if ($conn->query($sql) === TRUE) {
    echo "Booking successful";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
