# Project: Ticketing system

## description : thicketing system is ticket management system

# 📁 Collection: user

## End-point: login

### Method: POST

> ```
> http://localhost:4000/api/user/login
> ```

### Body (**raw**)

```json
{
  "username": "ali.reza",
  "password": "ali.reza"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: signup

### Method: POST

> ```
> http://localhost:3000/api/user/signup
> ```

### Body (**raw**)

```json
{
  "username": "admin",
  "password": "admin",
  "email": "admin@gmail.com",
  "fullname": "admin"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get tickets

### Method: GET

> ```
> http://localhost:3000/api/user/tickets
> ```

### Headers

| Content-Type | Value                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyIiwiaWF0IjoxNjU2ODMxMjgxLCJleHAiOjE2NTY5MTc2ODF9.3QvgAc8Mh-s7evxj-WhXdQIsfXe8iSP6r8-sRvd7pPc |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: request to become supporter

### Method: POST

> ```
> http://localhost:3000/api/user/request-supporter
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJyZXphIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NTY4Mzc5MzAsImV4cCI6MTY1NjkyNDMzMH0.wysWwSFozZ9JPH2tQTznXQOOTiKb2tuVPAdCUn5a4sU |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: ticket

## End-point: get tickets

### Method: GET

> ```
> http://localhost:4000/api/ticket
> ```

### Headers

| Content-Type | Value                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyZXphIiwiaWF0IjoxNjU2ODI5MDI4LCJleHAiOjE2NTY5MTU0Mjh9.sTEKrbHFt2uRK7tYbFDSApFknilKCTK59pJI9u4UAAM |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get ticket by id

### Method: GET

> ```
> http://localhost:3000/api/ticket/5
> ```

### Headers

| Content-Type | Value                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJyZXphIiwiaWF0IjoxNjU2ODI5MDI4LCJleHAiOjE2NTY5MTU0Mjh9.sTEKrbHFt2uRK7tYbFDSApFknilKCTK59pJI9u4UAAM |

### Query Params

| Param | value |
| ----- | ----- |
| id    | 3     |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create ticket

### Method: POST

> ```
> http://localhost:3000/api/ticket
> ```

### Headers

| Content-Type | Value                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyIiwiaWF0IjoxNjU2ODMxMjgxLCJleHAiOjE2NTY5MTc2ODF9.3QvgAc8Mh-s7evxj-WhXdQIsfXe8iSP6r8-sRvd7pPc |

### Body (**raw**)

```json
{
  "title": "new ticket reza",
  "content": "new ticket content"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove ticket

### Method: DELETE

> ```
> http://localhost:3000/api/ticket/2
> ```

### Headers

| Content-Type | Value                                                                                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyIiwiaWF0IjoxNjU2ODMxMjgxLCJleHAiOjE2NTY5MTc2ODF9.3QvgAc8Mh-s7evxj-WhXdQIsfXe8iSP6r8-sRvd7pPc |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: admin

## End-point: get request

### Method: GET

> ```
> http://localhost:4000/api/admin/request-supporter
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjIsInVzZXJuYW1lIjoiYWxpLnJlemEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2NTcwMzUwODksImV4cCI6MTY1NzEyMTQ4OX0.6vqWihsjglaimWXq3bwrA5iwy4f7hNtkxHSLsaJFL5g |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: reject request

### Method: POST

> ```
> http://localhost:3000/api/admin/request-supporter/reject/2
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU2ODM2Mzk5LCJleHAiOjE2NTY5MjI3OTl9.dwXPUUeTa_JzuCgxB3Xiw3CHTO1SMf3IH1TmKavGygM |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: accept request

### Method: POST

> ```
> http://localhost:3000/api/admin/request-supporter/accept/2
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbWlyIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjU2ODM2Mzk5LCJleHAiOjE2NTY5MjI3OTl9.dwXPUUeTa_JzuCgxB3Xiw3CHTO1SMf3IH1TmKavGygM |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Collection: Supporter

## End-point: response

### Method: PATCH

> ```
> http://localhost:3000/api/ticket/reject/5
> ```

### Headers

| Content-Type | Value                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accesstoken  | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJyZXphIiwicm9sZSI6IlNVUFBPUlRFUiIsImlhdCI6MTY1NjgzODM5NSwiZXhwIjoxNjU2OTI0Nzk1fQ.cuDnXmL2ASy_dC0Z_kHmDYlse9Ja9ey2EskEw77RH1s |

### Body (**raw**)

```json
{
  "response": "new response"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: reject

### Method: PATCH

> ```
> http://localhost:3000/api/ticket/response/5
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
