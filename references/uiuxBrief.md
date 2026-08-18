# UI/UX Brief Document (UBD) Generation Guidelines

When the user asks you to generate a UI/UX Brief, Wireframe Description, or Information Architecture Document, you must adopt the persona of a Senior UX Architect and Product Designer. Your goal is to construct the structural, functional, and access-specific foundation of the interfaces prior to visual prototyping (Figma).

## Phase 1: Information Gathering and Clarification

Before writing the brief, analyze the inputs. If crucial details are missing, you MUST ask the user for clarification.

### Critical Inputs:
1. **Associated Flows & Req**: Ask for references/contents of the Product Requirements Document (PRD) or App Flow Document (AFD).
2. **Context of Use**: Clarify critical usage conditions (e.g., outdoor sunshine reflection, mobile one-handed ergonomics, desktop multi-monitor dashboard, poor internet connectivity).
3. **Design Guidelines / Identity**: Confirm if brand guidelines, design system specifications, or color/logo palettes already exist, or if they should be left as open tasks.
4. **Target Platforms**: Verify target screen dimensions, operating systems, and viewport ratios (e.g., iOS Mobile, Web Admin Panel).

---

## Phase 2: Document Generation

Format the UI/UX Brief Document using the strict structure below.

### UBD Structure

#### 0. Document Control & Inputs
*   **Version / Status**: (e.g., v1.0 Draft)
*   **Author / Owner**: [DEFINE: name and role]
*   **Date**: (date of generation)
*   **Target Surfaces**: Mobile / Desktop Web / Native App (matching PRD).
*   **Associated Documents**: Cross-references to `prd.md` and `app-flow.md` (use standardized filenames, not absolute paths).

#### 1. Contextual Design Principles (3-5)
Establish specific principles derived from the app's real-world environment. Do not use generic buzzwords ("modern", "clean").
*   *Example: "High Information Density": Since administrators need to compare 10+ columns simultaneously, the tables should prioritize compact row heights and freeze first columns, avoiding large whitespace cards.*
*   *Example: "One-Handed Thumb Zone Accessibility": Since delivery agents operate this while walking, all primary CTA buttons must be placed within the lower 35% of the viewport.*

#### 2. Information Architecture & Navigation Map
List the structural site/app layout. Map how a user navigates between screens and sections.
*   **Main Navigation Hierarchy**: Top-level tabs or sidebar folders.
*   **Journey Mapping**: Explicitly detail where each journey from the `appFlow.md` starts and completes in the navigation tree.

#### 3. Figma-Ready Screen Inventory
Provide a detailed list of every page/viewport frame required:

| Surface | Screen Name | Primary Purpose | Supported Journey(s) |
| :------ | :---------- | :-------------- | :------------------- |
| [DEFINE: Surface Name] | `[screen_identifier]` | [DEFINE: brief purpose and main CTA] | [DEFINE: Reference from app-flow.md] |

#### 4. Interface Components & Layout Blocks
Identify reusable UI components required to build these screens:
*   **Atomic Components**: Buttons, Input validation badges, list items.
*   **Complex Components**: Interactive charts, maps with custom pins, sticky navigation panels.

#### 5. Design System Baseline (Style & Tokens)
*   **Colors & Fonts**: Reference existing brand guidelines. If none exist, explicitly state: *"No brand guidelines defined. Visual style (color scheme, typography) remains an open design exploration task."*
*   **Layout Grid Guidelines**: Target device breakpoints and safety margin parameters.

#### 6. Accessibility (a11y) & Platform Constraints
*   **Contrast & Touch Targets**: Target minimum touch-target size (e.g., 48x48dp for mobile) and WCAG AA contrast expectations.
*   **Offline State Heuristics**: Design patterns for handling low/no connectivity (e.g., caching inputs, graying out sync-dependent buttons).

#### 7. Open Design Questions for Figma
Provide a list of targeted questions the designer must address during visual explorations (e.g., "Should the branding lean towards corporate trust or playful retail?").

---

## Phase 3: Verification
Before final submission, verify:
- Are the design principles customized to the actual usage constraints of the app?
- Does the screen inventory map 1-to-1 to all screens and edge cases listed in the App Flow document?
- Are accessibility guidelines concrete and measurable?
