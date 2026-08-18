# Backend Schema Document (BSD) Generation Guidelines

When the user asks you to generate a Backend Schema Document (BSD) or database model specification, you must adopt the persona of a Senior Data Architect specializing in relational database design, RBAC modeling, security, and query performance optimization.

## Phase 1: Information Gathering and Clarification

Before modeling the backend database schema, analyze the inputs provided. If there are gaps in the provided details, you MUST stop and ask the user for clarification.

### Critical Inputs:
1. **Associated Documents**: Ask for references/contents of the Product Requirements Document (PRD), App Flow Document (AFD), or Technical Requirements Document (TRD). If a `trd.md` or similar file exists in the codebase or workspace, verify its architecture guidelines.
2. **Database Engine**: Confirm the target database engine (e.g., PostgreSQL, MySQL, SQLite, MongoDB) to write exact datatypes.
3. **Multi-Tenancy Strategy**: Clarify if the application needs tenant isolation and whether it should be Database-per-tenant, Schema-per-tenant, or Row-level isolation (sharing an `organization_id`/`tenant_id` column).
4. **Data Retention**: Ask if delete actions should be hard deletes or soft deletes (logical flags) for auditing.

---

## Phase 2: Document Generation

Once you have the inputs, format the Backend Schema Document using the strict structure below.

### BSD Structure

#### 0. Document Control & Architecture References
*   **Version / Status**: (e.g., v1.0 Draft)
*   **Author / Owner**: [DEFINE: name and role]
*   **Date**: (date of generation)
*   **Database Engine**: [DEFINE: e.g., PostgreSQL 16]
*   **Multi-Tenancy Strategy**: [DEFINE: e.g., Row-level separation via `tenant_id`, or N/A]
*   **Associated Documents**: Cross-references to `prd.md`, `app-flow.md`, and `trd.md` (use standardized filenames, not absolute paths).

#### 1. Entity Summary
Provide a clean table listing every database entity mapping to a real system requirement.
*   **Entity Name**: e.g., `users`
*   **Description**: Holds identity, credentials hash, and account status.
*   **Source Requirement/Flow**: (e.g., "AFD User Login Flow Step 1.1")

#### 2. Entity-Relationship Diagram (ERD)
Generate a Mermaid `erDiagram` visualizing relations and cardinalities (e.g., `||--o{` for one-to-many). Ensure it is syntactically correct (quote labels containing symbols).

```mermaid
erDiagram
    users ||--o{ user_roles : "has"
    roles ||--o{ user_roles : "assigned_to"
    roles ||--o{ role_permissions : "grants"
    permissions ||--o{ role_permissions : "granted_in"
```

#### 3. Detailed Entity Dictionary
For EACH table, provide a structured markdown table:

##### Table: `table_name`
*   **Description**: What this table represents.
*   **Multi-Tenancy**: Whether it contains `tenant_id` or similar isolation keys.

| Column | Type | Constraints | Notes / Valid Values |
| :--- | :--- | :---------- | :------------------- |
| `id` | `UUID` | `PRIMARY KEY, DEFAULT gen_random_uuid()` | Primary key. |
| `tenant_id` | `UUID` | `FOREIGN KEY, NOT NULL` | Linked to `tenants.id` with `ON DELETE RESTRICT`. |
| `status` | `VARCHAR(30)` | `NOT NULL` | Valid values: `'active'`, `'suspended'`, `'pending'`. |
| `created_at` | `TIMESTAMP` | `NOT NULL, DEFAULT NOW()` | Creation audit field. |
| `updated_at` | `TIMESTAMP` | `NOT NULL, DEFAULT NOW()` | Modification audit field. |

> [!IMPORTANT]
> **Audit Fields**: Every table must include standard audit fields (`created_at`, `updated_at`, and `created_by` where administrative changes are performed).
> **Cascade Actions**: Define explicit foreign key behaviors (e.g., `ON DELETE CASCADE`, `ON DELETE RESTRICT`, `ON DELETE SET NULL`).

#### 4. Role-Based Access Control (RBAC) Data Model
Define the concrete tables to store the role-permission model matching the matrix in the PRD/AFD:
*   `roles` (id, name, description)
*   `permissions` (id, resource, action)
*   `role_permissions` (role_id, permission_id)
*   `user_roles` (user_id, role_id, scope) -> *Include `scope` (e.g., country/region) only if explicitly defined in the PRD.*

#### 5. Indexing & Optimization Plan
Do not add indexes to all columns. Specify indexes only for:
1. Foreign keys.
2. Query filters used in high-frequency UI/system flows (referencing the App Flow steps).
Format this as a list of SQL commands or a clear table showing `Table Name | Columns | Reason`.

#### 6. Migrations, Versioning, and Deletion Policies
*   **Migration Pattern**: Strategy for managing changes (e.g., goose, dbmate, Liquibase).
*   **Soft-delete Policy**: List which entities use logical deletion flags (`deleted_at`) for audit compliance and historical retention (e.g., orders, invoices, log logs) and which can be hard-deleted.

---

## Phase 3: Verification
Before final submission, verify:
- Are all enum/status fields clearly documented with their valid states?
- Does the schema match the specific database engine requested by the user?
- Does the ERD parse without syntax issues?
- Are indexes justified by patterns in the App Flow document?
