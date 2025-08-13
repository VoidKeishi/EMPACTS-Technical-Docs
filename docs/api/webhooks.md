---
sidebar_position: 5
tags: [api, webhooks, integration]
---

# Webhook Integration

Configure webhooks to receive real-time updates from the EMPACTS platform.

## Webhook Events

- `user.created` - New user registration
- `matching.completed` - Mentor matching completed
- `message.sent` - New message sent

## Configuration

```json
{
  "url": "https://your-app.com/webhooks/empacts",
  "events": ["user.created", "matching.completed"],
  "secret": "your-webhook-secret"
}
```

---

**Related Documents:**
- [API Overview](./overview)
- [Authentication API](./authentication)
