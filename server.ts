
import app from "./app";
import connectDB from "./src/config/db";
import 'dotenv/config';

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
