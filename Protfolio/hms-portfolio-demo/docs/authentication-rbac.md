# Authentication & RBAC

## Authentication flow

```text
Login
  ↓
Validate credentials
  ↓
Issue JWT access token
  ↓
Client sends Authorization: Bearer <token>
  ↓
API authenticates token
  ↓
Role resolved from claims
  ↓
Permission checked
  ↓
Handler / service executes
```

## Why JWT

- Stateless auth for REST APIs  
- Works cleanly with SPA / mobile clients  
- Easy to attach role claims for authorization  

## RBAC model

| Concept | Description |
|---------|-------------|
| Role | Doctor, Nurse, Receptionist, Laboratory |
| Permission | Granular capability (e.g. `patient:create`) |
| Mapping | Role → many permissions |

**50+ permissions** across modules (representative count from internship work).

## Example permission checks

| Role | Allowed examples |
|------|------------------|
| Receptionist | Create patient, book appointment, manage intake queue |
| Doctor | View next patient, write prescription, update clinical notes |
| Nurse | Nursing tasks, queue support workflows |
| Laboratory | Create/update lab tests and results |

## Failure modes

| Case | HTTP |
|------|------|
| Missing / invalid token | 401 |
| Valid user, missing permission | 403 |

## Security practices (portfolio-safe summary)

- Password hashing (never store plain text)  
- Protected routes require auth dependency  
- Permission decorator / dependency before sensitive handlers  
- No secrets committed to this public demo repo  
