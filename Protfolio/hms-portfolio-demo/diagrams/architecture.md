# Architecture Diagram

```mermaid
flowchart TB
  FE[Frontend Clients]
  API[FastAPI API Layer]
  AUTH[Auth and RBAC]
  SVC[Domain Services]
  MOD[Doctor Nurse Receptionist Lab Modules]
  ORM[SQLAlchemy ORM]
  DB[(PostgreSQL)]

  FE -->|REST JSON JWT| API
  API --> AUTH
  API --> SVC
  API --> MOD
  AUTH --> SVC
  SVC --> ORM
  MOD --> ORM
  ORM --> DB
```

## Notes

- Routers stay thin; business logic lives in services  
- Auth/RBAC gates protected operations before services run  
- ORM isolates PostgreSQL details from API handlers  
