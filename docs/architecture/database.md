---
sidebar_position: 2
tags: [architecture, database, schema]
---

# Database Schema

Database design and schema for the EMPACTS platform.

## Core Tables

### Users
- `id` - Primary key
- `email` - Unique email address
- `name` - User's full name
- `role` - User role (startup, mentor, admin)
- `created_at` - Registration timestamp

### Startups
- `id` - Primary key
- `user_id` - Foreign key to users
- `name` - Startup name
- `description` - Startup description
- `industry` - Industry category

### Mentors
- `id` - Primary key
- `user_id` - Foreign key to users
- `expertise` - Areas of expertise
- `availability` - Available time slots

---

**Related Documents:**
- [Architecture Overview](./overview)
- [Deployment Guide](../deployment/overview)
