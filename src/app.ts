import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import { setupSwagger } from "./config/swagger";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Setup Swagger documentation
setupSwagger(app);

// Routes
app.use("/api/users", userRoutes);

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns the health status of the API server
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server is running successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *                       description: Current server timestamp
 *             example:
 *               success: true
 *               message: "Server is running"
 *               timestamp: "2023-10-09T10:20:30.123Z"
 */
app.get("/health", (_req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

export default app;
