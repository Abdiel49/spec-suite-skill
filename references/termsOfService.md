# Términos de Servicio (Terms of Service Guidelines)

When the user asks you to generate a Terms of Service / Terms and Conditions document, you must adopt the persona of a Specialist Writer in Legal Documents for Digital Products. This document is explicitly a **STRUCTURAL DRAFT and NOT legal advice**, and its purpose is to create a solid framework that must be reviewed and finalized by a qualified local lawyer.

---

## Phase 1: Information Gathering and Clarification

Before writing the Terms of Service, analyze the user's project context. If there are gaps in the provided information, you MUST stop and explicitly ask the user for clarification on the following points:

- **Razón social/nombre legal de la empresa, y país/estado de registro**: Establish the operating entity and governing law.
- **Modelos de cobro y monetización**: Subscription, commissions, transaction fees, direct sales, etc.
- **Edad mínima requerida**: Minimum age eligibility for using the platform.
- **Proceso de resolución de disputas**: Arbitration, specific courts, or placeholder for local law selection.

**Do not generate the full document** until the user has resolved these gaps or explicitly instructed you to proceed with placeholders.

---

## Phase 2: Document Generation

When you have sufficient information to proceed, format the Terms of Service using the strict structure below.

### Mandatory Disclaimer (Must be at the very top and very bottom of the document)
> [!IMPORTANT]
> **Borrador Estructural / Disclaimer:**
> Este documento es un borrador estructural para los Términos de Servicio y no constituye asesoría legal o jurídica. Es un requisito mandatorio validar y adaptar esta estructura con un abogado calificado bajo la ley local aplicable antes de su publicación o implementación.

### Structure of the Terms of Service

1. **Acceptance of Terms**: Explicitly list all platforms (websites, apps, APIs) and the acceptance mechanism (click-wrap, implicit use, account registration).
2. **Definitions**: Clear definitions of key terms used throughout the document.
3. **Description of Service**: Describe the platform services (cross-reference or paste from PRD if available).
4. **Eligibility and Account Registration**: Minimum age requirements, registration details, account security, and data accuracy obligations.
5. **User Roles and Accounts**: Distinct sub-sections for each role defined in the PRD, outlining role-specific requirements, credentials, and responsibilities.
6. **Acceptable Use**: General summary, with an explicit cross-reference to the **Acceptable Use Policy** (`acceptable-use-policy.md`) as a separate document.
7. **Payments, Fees, and Billing**: Pricing models, accepted currencies, taxes, billing cycles, cancellation/refund policies, and penalties for non-payment.
8. **Intellectual Property**: Platform content ownership vs. user-generated content licenses granted to the platform. Cross-reference to the **Content & Image Use Policy** (`content-image-policy.md`).
9. **Use of Artificial Intelligence (AI)**: Cross-reference to the **AI Use Policy** (`ai-use-policy.md`) if the platform integrates AI technologies.
10. **Warranties and Liability**: General limitations of liability and disclaimers. Cross-reference to the **Disclaimer & Continuity** document (`disclaimer-continuity.md`).
11. **Suspension and Termination**: Actionable conditions under which accounts can be suspended or terminated per user role, and what happens to user data upon termination.
12. **Modifications**: Procedures for changing the services or modifying these terms (notification channels, notice period).
13. **Governing Law and Jurisdiction**: Governing laws and dispute resolution forums.
14. **General Provisions**: Severability, assignment, entire agreement, waiver.
15. **Legal Contact Information**: Designated channels for legal notices.

Use `[DEFINE: ...]` for any details that remain unspecified or need verification.

---

### Phase 3: Internal Verification
Before presenting the draft to the user, internally verify:
- Is the structural draft disclaimer present at both the top and the bottom?
- Are all user roles from the PRD represented with their distinct account rules?
- Do cross-references to sub-policies use standardized filenames from the Spec Suite Output Naming Convention (`acceptable-use-policy.md`, `content-image-policy.md`, `ai-use-policy.md`, `disclaimer-continuity.md`) — not hardcoded section numbers?
