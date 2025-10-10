### 🤝 Contributing to Blog Backend – AI Powered Headless CMS

Welcome! 👋
AI-powered Headless CMS built with NestJS, TypeScript, and MongoDB.
This project powers intelligent content management and serves as the backend for our future web apps and APIs.

### 🚀 Project Overview

Framework: NestJS (TypeScript)

Database: MongoDB (via Mongoose)

Documentation: Swagger (Auto-generated)

Architecture: Modular, Scalable, and Production-grade

Goal: Build a powerful, AI-ready backend CMS that’s open for collaboration


### 🛠️ Local Setup Guide

1️⃣ Fork & Clone the Repo
``` git clone repository ```

2️⃣ Install Dependencies
``` npm install ```


3️⃣ Create Environment File

```
Copy the .env.example and create your .env file:
cp .env.example .env

Then update values as per your setup:
PORT=3000
MONGO_URI=mongodb://localhost:27017/blog_cms
JWT_SECRET=supersecretkey

```

4️⃣ Run the Project

``` npm run start:dev ```

5️⃣ Access the API Docs
Your Swagger API documentation will be available at:
http://localhost:3000/api/docs


Use TypeScript only.

Follow NestJS best practices (module-based structure).

Use DTOs and validation pipes for all requests.

Write Jest tests for each new feature.

Maintain consistent naming conventions (camelCase for vars, PascalCase for classes).


### Commit Message Convention

```bash
feat: add user authentication
fix: resolve DB connection issue
docs: update API documentation
refactor: improve error handling
```

###  Testing

```npm run test```


### 🐛 Reporting Issues

If you find a bug or have a feature idea:

Check if the issue already exists.

If not, create a new one using the “Bug” or “Feature” issue template.

Clearly describe:

What happened

Steps to reproduce

Expected behavior



### 💡 Creating a Pull Request (PR)

Create a new branch for your feature or fix:

```bash

git checkout -b feat/add-user

 ```

commit your changes:
```bash
git commit -m "feat: add user module
```

Push to your fork:

```bash
git push origin feat/add-user
 ```

Open a PR to the development branch.

Please ensure your PR:

Passes all tests

Updates documentation if needed

Uses meaningful commit messages

### 🌟 Contributor Tips

Keep changes modular — one PR per feature/fix.

Update Swagger docs for any new endpoints.

Follow NestJS module architecture strictly.

Use .env.example instead of committing .env files.

Consider adding unit tests for reliability.