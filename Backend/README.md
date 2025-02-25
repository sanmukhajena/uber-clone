# API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The following data is required in the request body:
- `name` (string): The name of the user.
- `email` (string): The email address of the user.
- `password` (string): The password for the user account.

### Response

#### Success (201)
- **Status Code:** 201 Created
- **Description:** User registered successfully.
- **Response Body:**
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "user_id",
      "name": "user_name",
      "email": "user_email"
    }
  }
  ```

#### Error (400)
- **Status Code:** 400 Bad Request
- **Description:** Missing or invalid data in the request body.
- **Response Body:**
  ```json
  {
    "error": "Invalid request data"
  }
  ```

#### Error (500)
- **Status Code:** 500 Internal Server Error
- **Description:** An error occurred on the server.
- **Response Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

### Example Response

#### Request
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

#### Success Response
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

#### Error Response (400)
```json
{
  "error": "Invalid request data"
}
```

#### Error Response (500)
```json
{
  "error": "Internal server error"
}
```
