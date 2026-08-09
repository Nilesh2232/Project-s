# Database Design

## Overview

- **20+** normalized PostgreSQL tables  
- Schema evolution via **Alembic** (15+ migrations)  
- Designed around hospital roles and clinical workflows  

## Core entity groups

### Identity & access
- Users  
- Roles  
- Permissions  
- Role–Permission mapping  

### Clinical operations
- Patients  
- Appointments  
- Prescriptions  
- Lab Tests / Results  
- Nurse workflows / queue records  

## Simplified ER view

```text
Users
  │
  ├── Doctors
  ├── Nurses
  ├── Receptionists
  └── Lab Technicians

Patients
  │
  └── Appointments
          │
          ├── Prescriptions
          ├── Lab Tests
          └── Nurse Workflows
```

Full mermaid diagram: [diagrams/er-diagram.md](../diagrams/er-diagram.md)

## Design notes

- Role tables / flags separate staff capabilities  
- Patient is the hub for appointments and downstream clinical records  
- Soft constraints around status transitions (booked → in-progress → completed)  
- Indexes on common search keys (patient name/id, appointment date, status)  

## Sample models

Sanitized SQLAlchemy-style examples: [samples/models/](../samples/models/)
