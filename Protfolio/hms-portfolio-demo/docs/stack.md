# Technology Stack

## Backend

| Technology | Purpose |
|------------|---------|
| Python | Primary language |
| FastAPI | REST API framework |
| Uvicorn | ASGI server |
| Pydantic | Request/response validation |
| SQLAlchemy | ORM / data access |
| Alembic | Schema migrations |
| PostgreSQL | Primary relational database |
| JWT | Stateless authentication |
| RBAC | Role + permission authorization |

## Tooling

| Tool | Purpose |
|------|---------|
| Git / GitHub | Version control |
| Postman | API testing |
| pytest | Backend testing (where applicable) |

## Why this stack

- FastAPI fits high-throughput REST APIs with clear OpenAPI docs  
- SQLAlchemy + PostgreSQL support normalized healthcare data  
- Alembic keeps schema evolution safe across releases  
- JWT + RBAC enable multi-role hospital access control  
