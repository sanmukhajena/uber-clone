# User Authentication API

## Overview
This is a **User Authentication API** built using **Node.js, Express, MongoDB, and JWT**. It provides user registration and authentication functionalities, including password hashing and token-based authentication.

## Features
- 📌 **User Registration** with validation
- 🔐 **Password Hashing** using bcrypt
- 🔑 **JWT-based Authentication**
- 🛠 **MongoDB Integration** with Mongoose
- 🌍 **CORS Enabled** for cross-origin requests

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Validation:** Express Validator
- **Environment Management:** dotenv

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
   git clone https://github.com/yourusername/auth-api.git
   cd auth-api
```

### 2️⃣ Install Dependencies
```bash
   npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the following:
```env
PORT=3000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the Server
```bash
   npm start
```

## API Endpoints

### 📌 Register a User
**Endpoint:** `POST /user/register`
**Request Body:**
```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "johndoe@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "token": "your_jwt_token",
  "user": { "id": "user_id", "email": "johndoe@example.com" }
}
```

## Project Structure
```
📂 auth-api
 ├── 📄 index.js          # Entry point of the application
 ├── 📄 server.js         # Server configuration
 ├── 📄 app.js            # Express app setup
 ├── 📂 db                # Database connection
 ├── 📂 models            # Mongoose models
 ├── 📂 controllers       # Request handlers
 ├── 📂 routes            # API routes
 ├── 📄 .env              # Environment variables
 ├── 📄 package.json      # Dependencies & scripts
```

## Future Enhancements
- ✅ User Login Endpoint
- ✅ Token Expiry Handling
- ✅ Forgot Password Feature
- ✅ Role-based Authentication

## License
This project is open-source and available under the **MIT License**.

🚀 *Happy Coding!*

