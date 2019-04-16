## Endpoints

### POST /api/register
* To register a user, user must have username, password, email, and phone number.
* Request example: 
```
{
  username: "David",
  password: "password",
  email: "david@email.com",
  phone: "1(123)456-7890"
}
```
* Returns
```
{
  username: "David",
  email: "david@email.com",
  phone: "1(123)456-7890"
}
```

### POST /api/login
* Provide a body with username and password. Returns a user object and a jwt token.
* Request example:
```
{
  "username": "David",
  "password": "password"
}
```
* Returns 
```
{
  "user": {
    username: "David",
    password: "password",
  },
    "token": "eyJhbI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imp1c3RpbiIsImlhdCI6MTU0OTI5MTkyNiwiZXhwmTIW7fdXkrA8"
}
```
---
### GET /api/users/{user id}
**JWT token required**
* Returns an object with a single user's info. Only accessible by that user.
```
{
 "user": {
    "id": 1,
    "username": "david",
    "email": "david@gmail.com",
    "phone": "1(123)456-7890",
}
```