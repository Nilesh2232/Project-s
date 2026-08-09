# API Documentation (Sanitized)

Representative endpoints from a **40+** REST API surface.  
Paths and payloads below are sanitized for portfolio use.

## Auth

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/login` | Authenticate user and issue JWT |
| GET | `/auth/me` | Current authenticated user profile |

## Patients

| Method | Path | Description |
|--------|------|-------------|
| GET | `/patients` | List / search patients (paginated) |
| POST | `/patients` | Register a new patient |
| GET | `/patients/{id}` | Get patient details |
| PATCH | `/patients/{id}` | Update patient profile |

## Appointments

| Method | Path | Description |
|--------|------|-------------|
| GET | `/appointments` | List appointments |
| POST | `/appointments` | Book appointment |
| PATCH | `/appointments/{id}/status` | Update appointment status |

## Laboratory

| Method | Path | Description |
|--------|------|-------------|
| GET | `/lab-tests` | List lab tests |
| POST | `/lab-tests` | Create lab order |
| PATCH | `/lab-tests/{id}/result` | Submit / update result |

## Prescriptions

| Method | Path | Description |
|--------|------|-------------|
| GET | `/prescriptions` | List prescriptions |
| POST | `/prescriptions` | Create prescription (doctor) |

## Queues / Nursing (examples)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/queues/opd` | Receptionist / OPD queue view |
| POST | `/queues/call-next` | Doctor calls next patient |
| GET | `/nursing/tasks` | Nurse workflow tasks |

## Common API conventions

- JSON request / response bodies  
- Bearer JWT on protected routes  
- Pagination + search on list endpoints  
- Permission denied → `403`  
- Unauthenticated → `401`  

## Example responses

See [samples/api-responses/](../samples/api-responses/).

## Screenshots / OpenAPI

If sharing Swagger screenshots publicly, use only sanitized local/demo environments — never production URLs, tokens, or real patient data.
