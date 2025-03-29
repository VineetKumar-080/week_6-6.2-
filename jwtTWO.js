const jwt = require('jsonwebtoken');
const secretKey = "your-very-secure-secret-key";

// Function to create a JWT
function createJWT(payload, expiresIn = "1h") {
    try {
        const token = jwt.sign(payload, secretKey, { expiresIn });
        console.log("✅ JWT successfully created!");
        return token;
    } catch (error) {
        console.error("❌ Error creating JWT:", error.message);
        return null;
    }
}

// Function to verify a JWT
function verifyJWT(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("✅ JWT successfully verified!");
        return decoded;
    } catch (error) {
        console.error("❌ Error verifying JWT:", error.message);
        return null;
    }
}

// Function to decode a JWT (without verifying signature)
function decodeJWT(token) {
    try {
        const decoded = jwt.decode(token);
        if (!decoded) throw new Error("Decoding failed, invalid token.");
        console.log("✅ JWT successfully decoded!");
        return decoded;
    } catch (error) {
        console.error("❌ Error decoding JWT:", error.message);
        return null;
    }
}

// Example usage:
const userPayload = { userId: 123, role: "admin" };
console.log("\n🔹 Creating JWT...");
const token = createJWT(userPayload);

if (token) {
    console.log("\n🔹 Generated Token:\n", token);

    console.log("\n🔹 Verifying JWT...");
    const verifiedData = verifyJWT(token);
    console.log("Verified Data:", verifiedData);

    console.log("\n🔹 Decoding JWT...");
    const decodedData = decodeJWT(token);
    console.log("Decoded Data:", decodedData);
} else {
    console.error("❌ JWT generation failed. Exiting...");
}
