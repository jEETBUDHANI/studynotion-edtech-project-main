const cloudinary = require("cloudinary").v2; // Require Cloudinary library

// Cloudinary connection function
exports.cloudinaryConnect = () => {
  try {
    // Configure Cloudinary using environment variables
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Example: 'de35egfpj'
      api_key: process.env.CLOUDINARY_API_KEY,      // Example: '786396727312765'
      api_secret: process.env.CLOUDINARY_API_SECRET // Example: '4-TMSEBipCP2dCIHPO2xp30wXLQ'
    });
    console.log("Cloudinary configured successfully.");
  } catch (error) {
    console.error("Error configuring Cloudinary:", error);
  }
};
