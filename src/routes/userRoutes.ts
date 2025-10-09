import express from "express";
import { createUser, getUsers } from "../controllers/userController";

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user with the provided name and email
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserDto'
 *           examples:
 *             example1:
 *               summary: Example user creation
 *               value:
 *                 name: "John Doe"
 *                 email: "john.doe@example.com"
 *             example2:
 *               summary: Another user example
 *               value:
 *                 name: "Jane Smith"
 *                 email: "jane.smith@example.com"
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *             examples:
 *               success:
 *                 summary: Successful user creation
 *                 value:
 *                   success: true
 *                   message: "User created successfully"
 *                   data:
 *                     _id: "507f1f77bcf86cd799439011"
 *                     name: "John Doe"
 *                     email: "john.doe@example.com"
 *                     createdAt: "2023-10-09T10:20:30Z"
 *                     updatedAt: "2023-10-09T10:20:30Z"
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *         content:
 *           application/json:
 *             examples:
 *               validation_error:
 *                 summary: Validation error
 *                 value:
 *                   success: false
 *                   message: "Name and email are required"
 *               duplicate_email:
 *                 summary: Duplicate email error
 *                 value:
 *                   success: false
 *                   message: "User with this email already exists"
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieves a list of all users in the system
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/SuccessResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/User'
 *             examples:
 *               success:
 *                 summary: Successful users retrieval
 *                 value:
 *                   success: true
 *                   message: "Fetched users successfully"
 *                   data:
 *                     - _id: "507f1f77bcf86cd799439011"
 *                       name: "John Doe"
 *                       email: "john.doe@example.com"
 *                       createdAt: "2023-10-09T10:20:30Z"
 *                       updatedAt: "2023-10-09T10:20:30Z"
 *                     - _id: "507f1f77bcf86cd799439012"
 *                       name: "Jane Smith"
 *                       email: "jane.smith@example.com"
 *                       createdAt: "2023-10-09T11:30:45Z"
 *                       updatedAt: "2023-10-09T11:30:45Z"
 *               empty_list:
 *                 summary: No users found
 *                 value:
 *                   success: true
 *                   message: "Fetched users successfully"
 *                   data: []
 *       500:
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get("/", getUsers);

export default router;
