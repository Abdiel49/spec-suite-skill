# Spec Suite

**Spec Suite** is an orchestrator skill that automates the creation of professional software specifications and legal policy documents for digital products. It acts as a dual-track documentation generator, ensuring that technical architecture and legal frameworks are perfectly aligned.

## 🚀 Features

- **Two Complete Tracks**: Generates documents for Technical Specs (Track A) and Legal & Policy (Track B).
- **Prerequisite Validation**: The skill understands dependencies (e.g., a Backend Schema requires a TRD; a Privacy Policy relies on a Legal Compliance Annex) and enforces a logical generation flow.
- **Project-Agnostic & Global**: Completely decoupled from specific projects or hardcoded assumptions. It works dynamically by querying you for essential project details before generating documents.
- **Sub-module Routing**: Need just one document? You can invoke specific aliases like `spec-suite:prd` to jump straight to what you need.
- **Centralized Output**: Prompts for a centralized output directory at the start of a session, ensuring all documentation is generated consistently within your project's workspace.

---

## 📂 Document Catalog

### Track A — Technical Specs
These are the blueprints for building the product.
1. **PRD** (`prd.md`) – Product Requirements Document
2. **TRD** (`trd.md`) – Technical Requirements Document & System Architecture
3. **Backend Schema** (`backend-schema.md`) – Database Design and ERD
4. **App Flow** (`app-flow.md`) – User Journeys and System Event Flows
5. **UI/UX Brief** (`uiux-brief.md`) – Information Architecture & Design Principles
6. **Implementation Plan** (`implementation-plan.md`) – Phased Delivery Roadmap
7. **Security Plan** (`security-plan.md`) – Threat Model & Defense-in-Depth Architecture

### Track B — Legal & Policy Suite
These are the structural drafts governing the platform's operation (requires legal review).
1. **Legal Compliance Annex** (`legal-compliance-annex.md`) – Jurisdictional diagnostic
2. **Terms of Service** (`terms-of-service.md`) – Core T&C document
3. **Privacy Policy** (`privacy-policy.md`) – PII handling & user rights
4. **Data Processing Policy** (`data-processing-policy.md`) – Technical data lifecycle
5. **Acceptable Use Policy** (`acceptable-use-policy.md`) – Prohibited conduct & moderation
6. **Content & Image Use Policy** (`content-image-policy.md`) – UGC & Copyright guidelines
7. **AI Use Policy** (`ai-use-policy.md`) – Automation, AI inference & oversight
8. **Disclaimer & Continuity** (`disclaimer-continuity.md`) – Warranties and SLAs

---

## 🛠️ How to Use

You can trigger the skill naturally through conversation by asking the agent to generate a document. For example:
- *"I need a Privacy Policy for my new SaaS."*
- *"Help me create the TRD based on our PRD."*

**Full-Suite Orchestration:**
If you are starting a brand new project, simply tell the agent: 
> *"Generate the full spec suite for this project."*

The agent will ask you for a target output directory, prompt you for the necessary project context, and then sequentially generate all documentation from Track A and Track B.

**Direct Sub-module Aliases:**
For fast access when using CLI tools or shortcuts, you can invoke specific parts of the suite using keywords:
- `spec-suite:prd`
- `spec-suite:trd`
- `spec-suite:schema`
- `spec-suite:flow`
- `spec-suite:uiux`
- `spec-suite:plan`
- `spec-suite:security`
- `spec-suite:legal`
- `spec-suite:tos`
- `spec-suite:privacy`
- `spec-suite:data`
- `spec-suite:aup`
- `spec-suite:content`
- `spec-suite:ai`
- `spec-suite:disclaimer`
