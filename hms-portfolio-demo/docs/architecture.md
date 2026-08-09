# Architecture

## High-level flow

```text
                    ┌──────────────┐
                    │   Frontend   │
                    └──────┬───────┘
                           │ HTTPS / REST
                           ▼
                    ┌──────────────┐
                    │   FastAPI    │
                    │  API Layer   │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
          Auth/RBAC     Services      Modules
              │            │            │
              └────────────┼────────────┘
                           ▼
                    ┌──────────────┐
                    │ SQLAlchemy   │
                    └──────┬───────┘
                           ▼
                    ┌──────────────┐
                    │ PostgreSQL   │
                    └──────────────┘
```

## Layer responsibilities

### API layer (Routers)
- Expose REST endpoints  
- Validate payloads with Pydantic schemas  
- Return consistent HTTP responses  

### Auth / RBAC
- Authenticate via JWT bearer tokens  
- Resolve user role from claims  
- Enforce permission checks before service execution  

### Services
- Contain business rules (appointments, queues, lab orders, etc.)  
- Keep routers thin  

### Modules
- Domain separation for Doctor, Nurse, Receptionist, Laboratory  

### Persistence
- SQLAlchemy models map to PostgreSQL  
- Alembic manages schema versions  

## Design goals

- Secure multi-role access  
- Maintainable modular structure  
- Clear API contracts for frontend teams  
- Migration-safe database evolution  

See also: [diagrams/architecture.md](../diagrams/architecture.md)
