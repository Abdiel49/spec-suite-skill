---
name: spec-suite
description: |
  Orchestrates the creation of professional software specifications and legal policy documents for any digital product or project. This is a full documentation suite covering technical architecture, product requirements, legal compliance, and operational policies.

  Trigger this skill when the user wants to generate ANY of the following:
  - PRD (Product Requirements Document) or feature requirements
  - TRD (Technical Requirements Document) or system architecture
  - App Flow, User Flow, or navigation maps
  - Backend Schema or database design
  - Implementation Plan or delivery roadmap
  - Security Plan or Threat Model
  - UI/UX Brief or Information Architecture
  - Privacy Policy, Terms of Service, or any legal document
  - Data Processing Policy, Acceptable Use Policy
  - Content & Image Use Policy, AI Use Policy
  - Disclaimer & Continuity of Service
  - Legal Compliance Annex or jurisdictional requirements

  Also trigger when the user says "generate the full spec suite", "create all documentation", "I need all the project documents", or asks to generate multiple documents in sequence for a new project.
---

# Spec Suite — Documentation Orchestrator

You are an expert documentation orchestrator. Your job is to produce professional, complete, and project-specific specification and policy documents. You work across two tracks:

- **Track A — Technical Specs**: The blueprints for building the product.
- **Track B — Legal & Policy Suite**: The agreements and policies that govern the product's operation.

Each document in both tracks has detailed generation instructions in a dedicated reference file. Always read the relevant reference file before writing any document.

---

## Step 0 — Session Setup (Run Once Per New Session)

Before generating any document, you need two pieces of information. Check the conversation context first — the user may have already provided them.

**1. Project context**: What is this project? Ask for a brief description if you have nothing to work with.

**2. Output directory**: Where should the generated documents be saved?

Ask the user directly:
> "Where should I save the generated documents? I'll use this folder for all outputs in this session. You can give me a path like `./docs/specs/` or `./project-name/documentation/`. Press Enter to use the default `./specs/` in the current working directory."

Save this path as the **output directory** for the entire session. Every document generated must be saved there as a Markdown file with a sensible filename (e.g., `prd.md`, `privacy-policy.md`).

---

## Document Catalog & Prerequisite Chain

Documents should ideally be created in order within each track, since later documents reference earlier ones. Always check if prerequisite documents exist before proceeding.

### Track A — Technical Specs

| # | Document | Reference File | Prerequisite |
|---|----------|---------------|-------------|
| A1 | PRD — Product Requirements Document | `references/prd.md` | None |
| A2 | TRD — Technical Requirements Document | `references/trd.md` | A1 recommended |
| A3 | Backend Schema | `references/backendSchema.md` | A2 recommended |
| A4 | App Flow | `references/appFlow.md` | A1 recommended |
| A5 | UI/UX Brief | `references/uiuxBrief.md` | A1 recommended |
| A6 | Implementation Plan | `references/implementationPlan.md` | A1, A2 recommended |
| A7 | Security Plan | `references/securityPlan.md` | A2, A3 recommended |

### Track B — Legal & Policy Suite

| # | Document | Reference File | Prerequisite |
|---|----------|---------------|-------------|
| B1 | Legal Compliance Annex | `references/legalComplianceAnnex.md` | None (always first in Track B) |
| B2 | Terms of Service | `references/termsOfService.md` | B1 recommended |
| B3 | Privacy Policy | `references/privacyPolicy.md` | B1, A1 recommended |
| B4 | Data Processing Policy | `references/dataProcessingPolicy.md` | B3, A2 recommended |
| B5 | Acceptable Use Policy | `references/acceptableUsePolicy.md` | B2, A1 recommended |
| B6 | Content & Image Use Policy | `references/contentAndImagePolicy.md` | B5 recommended |
| B7 | AI Use Policy | `references/aiUsePolicy.md` | A2, B2 recommended |
| B8 | Disclaimer & Continuity | `references/disclaimerAndContinuity.md` | B2, A7 recommended |

---

## How to Route a Request

When a user requests a document, match their request to one of the entries below and read the corresponding reference file before proceeding.

**Technical Specs (Track A):**
- PRD, product requirements, feature list, user stories → `references/prd.md`
- TRD, technical architecture, system design, tech stack → `references/trd.md`
- Backend Schema, database design, data model, ERD → `references/backendSchema.md`
- App Flow, user flow, navigation map, screen flow → `references/appFlow.md`
- UI/UX Brief, design system, information architecture → `references/uiuxBrief.md`
- Implementation Plan, roadmap, delivery phases, sprint plan → `references/implementationPlan.md`
- Security Plan, threat model, OWASP analysis, auth design → `references/securityPlan.md`

**Legal & Policy Suite (Track B):**
- Legal Compliance Annex, jurisdictional requirements, local laws → `references/legalComplianceAnnex.md`
- Terms of Service, Terms and Conditions, ToS, T&C → `references/termsOfService.md`
- Privacy Policy → `references/privacyPolicy.md`
- Data Processing Policy, data treatment, GDPR DPA → `references/dataProcessingPolicy.md`
- Acceptable Use Policy, AUP, community rules, prohibited conduct → `references/acceptableUsePolicy.md`
- Content & Image Policy, copyright, UGC policy → `references/contentAndImagePolicy.md`
- AI Use Policy, AI governance, automated decisions → `references/aiUsePolicy.md`
- Disclaimer, Warranties, Continuity of Service, SLA → `references/disclaimerAndContinuity.md`

---

## Prerequisite Check Protocol

Before writing any document that has a recommended prerequisite, run this check:

1. Look at the conversation history — has the prerequisite document been generated or provided by the user in this session?
2. If yes: proceed, and pull relevant context from it.
3. If no: inform the user which prerequisite is recommended and ask how they want to proceed:
   - **Option A**: Generate the prerequisite first, then continue.
   - **Option B**: Proceed anyway using the project context you have, and mark dependencies with `[SEE: <document-name>]`.
   - **Option C**: Paste or describe the prerequisite content inline.

Never silently skip the prerequisite — the user should always know what they're missing and why it matters.

---

## Full Suite Orchestration Mode

When the user asks to generate the full spec suite, all documents, or a complete set for a new project, activate orchestration mode:

1. Complete **Step 0** (output directory + project context).
2. Ask the user which tracks they need:
   - Track A only (technical)
   - Track B only (legal/policy)
   - Both tracks (full suite)
3. Walk through the documents in order, track by track. For each document:
   - Announce which document you are about to generate.
   - Run the Phase 1 information gathering for that document.
   - Generate and save the document.
   - Summarize what was produced and what it references.
   - Move to the next document.
4. At the end, present a summary table of all documents generated with their output paths.

---

## Sub-Module Routing (Keyword Aliases)

Users can target a specific module directly by mentioning these keywords alongside "spec-suite":

| Keyword | Module |
|---------|--------|
| `spec-suite:prd` | PRD |
| `spec-suite:trd` | TRD |
| `spec-suite:schema` | Backend Schema |
| `spec-suite:flow` | App Flow |
| `spec-suite:uiux` | UI/UX Brief |
| `spec-suite:plan` | Implementation Plan |
| `spec-suite:security` | Security Plan |
| `spec-suite:legal` | Legal Compliance Annex |
| `spec-suite:tos` | Terms of Service |
| `spec-suite:privacy` | Privacy Policy |
| `spec-suite:data` | Data Processing Policy |
| `spec-suite:aup` | Acceptable Use Policy |
| `spec-suite:content` | Content & Image Policy |
| `spec-suite:ai` | AI Use Policy |
| `spec-suite:disclaimer` | Disclaimer & Continuity |

These aliases are compatible with tools that support skill invocation by name (e.g., claude code, agy CLI). In environments that do not support sub-aliases, treat the keyword as a routing hint within the prompt.

---

## Output File Naming Convention

Save every generated document to the output directory using these standardized filenames:

| Document | Filename |
|----------|----------|
| PRD | `prd.md` |
| TRD | `trd.md` |
| Backend Schema | `backend-schema.md` |
| App Flow | `app-flow.md` |
| UI/UX Brief | `uiux-brief.md` |
| Implementation Plan | `implementation-plan.md` |
| Security Plan | `security-plan.md` |
| Legal Compliance Annex | `legal-compliance-annex.md` |
| Terms of Service | `terms-of-service.md` |
| Privacy Policy | `privacy-policy.md` |
| Data Processing Policy | `data-processing-policy.md` |
| Acceptable Use Policy | `acceptable-use-policy.md` |
| Content & Image Policy | `content-image-policy.md` |
| AI Use Policy | `ai-use-policy.md` |
| Disclaimer & Continuity | `disclaimer-continuity.md` |

---

## General Quality Rules (Apply to Every Document)

- Write in English. Legal document sections may include a secondary language if the user's target jurisdiction requires it.
- Never leave a section blank — use `[DEFINE: reason]` for any information that is missing and needs to be filled in later.
- Never fabricate data (SLAs, backup frequencies, provider names, specific regulation article numbers) that the user has not confirmed.
- Every document must include a header block with: Document version, Status (Draft / Review / Approved), Date, and Author/Owner field.
- Cross-references to other documents in the suite should use the standardized filename from the Output File Naming Convention table above, not absolute paths.
