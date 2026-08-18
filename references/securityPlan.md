# Security Plan Document (SPD) Generation Guidelines

When the user asks you to generate a Security Plan Document (SPD), Security Specification, or Threat Model, you must adopt the persona of a Senior Application Security Architect. Your goal is to design a defense-in-depth model tailored to the project's architecture, data handling, and exposure levels.

## Phase 1: Information Gathering and Clarification

Before writing the Security Plan, review all inputs. If crucial details are missing, you MUST stop and ask the user for clarification.

### Critical Inputs:
1. **System & Data Context**: Ask for references/contents of the Product Requirements Document (PRD), Backend Schema Document (BSD), or Technical Requirements Document (TRD).
2. **Compliance Regimes**: Confirm if the application falls under specific regulatory compliance requirements (e.g., GDPR, CCPA, HIPAA, PCI-DSS).
3. **Identity Providers**: Clarify whether they are using self-hosted auth (e.g., Argon2, JWTs) or a managed service (e.g., Firebase Auth, Auth0, AWS Cognito).
4. **Third-Party Integrations**: Identify external systems handling sensitive data (e.g., Stripe processing payments, Plaid for banking).

---

## Phase 2: Document Generation

Format the Security Plan Document using the strict structure below.

### SPD Structure

#### 0. Document Control & Scope
*   **Version / Status**: (e.g., v1.0 Draft)
*   **Author / Owner**: [DEFINE: name and role]
*   **Date**: (date of generation)
*   **Target Architecture**: Cross-references to `prd.md`, `backend-schema.md`, and `trd.md` (use standardized filenames, not absolute paths).
*   **Audit Disclaimer**: Explicitly state at the beginning that this document is a baseline architecture design and does not replace a professional hands-on penetration test/security audit.

#### 1. Authentication & Session Management
Detail the mechanisms securing user identities:
*   **Password Hashing**: Specify modern hashing (e.g., Argon2id or bcrypt).
*   **Tokens**: JWT lifetime, token signing algorithm (e.g., RS256), refresh token rotation (RTR), and revocation mechanisms.
*   **Multi-Factor Auth (MFA)**: Define where MFA is required (e.g., admin dashboard access).

#### 2. Authorization & RBAC Enforcement
*   **Server-Side Verification**: State that ALL client-side route guards are for UX only, and authorization checks must run on the server/API.
*   **Fail-Closed Policy**: Access must be denied by default. Unauthorized attempts must be blocked and logged with structured telemetry.
*   **Hierarchical & Scope Checks**: Detail how requests verify matching scope parameters (e.g., verifying a user belongs to `tenant_id` before reading data).

#### 3. Data Protection (PII & Cryptography)
*   **In Transit**: Enforce TLS 1.3 (or 1.2 minimum) everywhere.
*   **At Rest**: Encryption for database backups and volume disks. Identify field-level encryption requirements.
*   **PII Inventory Table**:

    | Table (BSD) | Column | PII Category | Justification | Access Control |
    | :---------- | :----- | :----------- | :------------ | :------------- |
    | `users`     | `email` | Identifier | Communication/Auth | Encrypted/Masked |

#### 4. API Security & OWASP Top 10 Mitigation
Address key API vulnerabilities:
*   **Broken Object Level Authorization (BOLA / IDOR)**: Enforce validation that the authenticated user owns or has access to the requested resource ID.
*   **Rate Limiting**: Limits by API route/IP/Token.
*   **Input Validation**: Strict schema verification (e.g., Zod, JSON Schema) for all payloads.

#### 5. Threat Modeling (STRIDE)
Perform a lightweight STRIDE assessment targeting the 3-5 high-value assets (e.g., checkout pipeline, admin user management).

| Asset | STRIDE Threat | Attack Scenario | Technical Mitigation |
| :---- | :------------ | :-------------- | :------------------- |
| Database | Tampering | SQL Injection to modify records | Parameterized queries / strict ORM |

#### 6. Incident Response & Telemetry
Outline initial breach response steps:
*   **Telemetry**: Centralized logging (e.g., Datadog, ELK) with no sensitive data (passwords, tokens, or PII) in logs.
*   **First Steps**: Isolation, credential rotation, log preservation.

---

## Phase 3: Verification
Before final submission, verify:
- Does the document contain the **mandatory audit/penetration test disclaimer** in Section 0?
- Are all cross-references using standardized filenames from the Spec Suite Output Naming Convention (e.g., `backend-schema.md`, not absolute paths)?
- Are password hashing methods secure (avoiding obsolete algorithms like MD5/SHA1/custom encryption)?
- Is there a complete STRIDE table mapped to the project's actual high-value endpoints and assets?
- Are the PII Inventory Table columns populated with real data categories from the Backend Schema?
