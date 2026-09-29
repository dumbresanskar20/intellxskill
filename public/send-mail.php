<?php
/**
 * Direct Email Dispatcher for IntellxSkill Technologies
 * Sends leads directly to the domain mailbox (info@intellxskill.in)
 * via cPanel / LiteSpeed server internal mail routing.
 */

// Silence any warning output that could corrupt the JSON response
error_reporting(0);
ini_set('display_errors', 0);

// Allow CORS so requests from localhost or the domain work seamlessly
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Read raw JSON input
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data)) {
    $data = $_POST;
}

$name    = isset($data['name']) ? trim($data['name']) : (isset($data['Name']) ? trim($data['Name']) : '');
$email   = isset($data['email']) ? trim($data['email']) : (isset($data['Email']) ? trim($data['Email']) : '');
$phone   = isset($data['phone']) ? trim($data['phone']) : (isset($data['Phone']) ? trim($data['Phone']) : '');
$course  = isset($data['course']) ? trim($data['course']) : (isset($data['Interested Course']) ? trim($data['Interested Course']) : '');
$message = isset($data['message']) ? trim($data['message']) : (isset($data['Message']) ? trim($data['Message']) : 'No message provided');

if (empty($name) || empty($email) || empty($phone) || empty($course)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields (Name, Email, Phone, and Course).']);
    exit;
}

// Recipient email (local cPanel domain mailbox)
$to = 'info@intellxskill.in';
$subject = "New Demo Booking: " . $name . " - " . $course;

// Sanitize fields for HTML display
$safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safePhone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeCourse  = htmlspecialchars($course, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$timestamp   = date('d M Y, h:i A T');

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>New Demo Booking Lead</title>
</head>
<body style='margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9;'>
    <div style='max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;'>
        <div style='background: linear-gradient(135deg, #1E3A8A 0%, #172554 100%); padding: 28px 32px; text-align: center;'>
            <h1 style='color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px;'>New Demo Session Lead</h1>
            <p style='color: #F97316; margin: 6px 0 0 0; font-size: 14px; font-weight: 600;'>IntellxSkill Technologies</p>
        </div>
        <div style='padding: 32px;'>
            <table style='width: 100%; border-collapse: separate; border-spacing: 0 14px;'>
                <tr>
                    <td style='width: 130px; font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;'>Full Name</td>
                    <td style='font-size: 16px; font-weight: 700; color: #0f172a;'>{$safeName}</td>
                </tr>
                <tr>
                    <td style='font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;'>Email</td>
                    <td style='font-size: 15px; color: #1E3A8A; font-weight: 600;'><a href='mailto:{$safeEmail}' style='color: #1E3A8A; text-decoration: none;'>{$safeEmail}</a></td>
                </tr>
                <tr>
                    <td style='font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;'>Phone</td>
                    <td style='font-size: 15px; font-weight: 700; color: #0f172a;'><a href='tel:{$safePhone}' style='color: #0f172a; text-decoration: none;'>{$safePhone}</a></td>
                </tr>
                <tr>
                    <td style='font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;'>Course</td>
                    <td><span style='display: inline-block; background: #eff6ff; color: #1E3A8A; font-weight: 700; font-size: 13px; padding: 6px 12px; border-radius: 8px; border: 1px solid #bfdbfe;'>{$safeCourse}</span></td>
                </tr>
                <tr>
                    <td style='font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; padding-top: 4px;'>Message</td>
                    <td style='font-size: 14px; color: #334155; line-height: 1.6; background: #f8fafc; padding: 12px 16px; border-radius: 10px; border: 1px solid #e2e8f0;'>{$safeMessage}</td>
                </tr>
                <tr>
                    <td style='font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: middle;'>Submitted</td>
                    <td style='font-size: 13px; color: #94a3b8;'>{$timestamp}</td>
                </tr>
            </table>
        </div>
        <div style='background: #f8fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;'>
            Delivered directly from the Contact & Demo form on <a href='https://intellxskill.in' style='color: #1E3A8A; font-weight: 600; text-decoration: none;'>intellxskill.in</a>
        </div>
    </div>
</body>
</html>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: IntellxSkill Website <info@intellxskill.in>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
} else {
    // If standard mail() fails, return error with details
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Unable to send email. Please verify that the server mail service is active.'
    ]);
}
