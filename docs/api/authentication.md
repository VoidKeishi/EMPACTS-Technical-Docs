---
sidebar_position: 2
tags: [api, authentication, jwt]
---

# Authentication API

Authentication endpoints and JWT token management for the EMPACTS platform.

## Endpoints

- `POST /auth/login` - User authentication
- `POST /auth/register` - User registration  
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/logout` - User logout

## JWT Token Structure

Access tokens contain user information and expire after 1 hour.
Refresh tokens are used to obtain new access tokens.

---

**Related Documents:**
- [API Overview](./overview)
- [User Management API](./users)
