const port = process.env.PORT ? parseInt(process.env.PORT , 10) : 3000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/nestdb';
const jwtSecret = process.env.JWT_SECRET || 'supersecretkey';

export default () => ({
  port,
  mongoUri,
  jwtSecret,
});