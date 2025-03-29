const jwt = require('jsonwebtoken');

const secretKey = "your-secret-key"; // Keep it secure

// Create a JWT
const payload = { userId: 123, role: "admin" };
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Generated JWT:", token);

// Verify JWT
try {
    const decoded = jwt.verify(token, secretKey);
    console.log("Verified JWT:", decoded);
} catch (err) {
    console.error("Invalid Token:", err.message);
}

// Decode JWT without verification
const decodedToken = jwt.decode(token);
console.log("Decoded JWT:", decodedToken);
