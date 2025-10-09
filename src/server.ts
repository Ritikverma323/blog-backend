
import app from "./app";
import dotenv from "dotenv";
import connectDB from "./config/db";


dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`);
  console.log(`🔍 OpenAPI JSON spec available at: http://localhost:${PORT}/api-docs.json`);
  console.log(`❤️  Health check available at: http://localhost:${PORT}/health`);
});
