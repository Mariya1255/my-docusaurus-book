---
description: "Task list for Docusaurus Book Structure feature implementation"
---

# Tasks: Docusaurus Book Structure

**Input**: Design documents from `/specs/001-docusaurus-book-structure/`
**Prerequisites**: plan.md, spec.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)

## Phase 1: Setup (Project Initialization)

**Purpose**: Initialize the Docusaurus project and create the basic directory structure. 

- [X] T001 Initialize Docusaurus v3 classic project by running `npx create-docusaurus@latest humanoid-robotics-book classic` in the repository root.
- [X] T002 Create the initial directory structure for the book's content as defined in the plan: `docs/01-intro`, `docs/02-ros2`, `docs/03-simulation`, `docs/04-isaac`, `docs/05-vla`, `docs/hardware-guide`, `docs/capstone`.

---

## Phase 2: Foundational (Core Configuration)

**Purpose**: Configure the core settings for the Docusaurus website.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T003 Configure `docusaurus.config.js` with the site title ('Physical AI & Humanoid Robotics Book'), tagline, and the necessary settings for GitHub Pages deployment (`url`, `baseUrl`, `organizationName`, `projectName`).

---

## Phase 3: User Story 1 - Read and Navigate the Book (Priority: P1) 🎯 MVP

**Goal**: As a reader, I want to access the book's content through a Docusaurus website, so I can easily read and navigate the modules and chapters.

**Independent Test**: The local development server can be started (`npm run start`), and a user can navigate to each chapter in the sidebar and see its content rendered. The 4-module structure is correctly displayed.

### Implementation for User Story 1

- [X] T004 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/01-intro/intro.md`.
- [X] T005 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/02-ros2/ros2.md`.
- [X] T006 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/03-simulation/simulation.md`.
- [X] T007 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/04-isaac/isaac.md`.
- [X] T008 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/05-vla/vla.md`.
- [X] T009 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/hardware-guide/hardware-guide.md`.
- [X] T010 [P] [US1] Create a placeholder chapter file with a title and basic content in `docs/capstone/capstone.md`.
- [X] T011 [US1] Configure `sidebars.js` to create the 4-module sidebar navigation structure as defined in the implementation plan. This task depends on T004-T010.
- [X] T012 [US1] Implement the homepage content with a title and welcome message in `src/pages/index.js`.
- [X] T013 [P] [US1] Add basic custom styles (e.g., for headers or links) to `src/css/custom.css`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable locally.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Finalize the project for deployment.

- [X] T014 Create the GitHub Actions workflow file for automated deployment at `.github/workflows/deploy.yml` as detailed in the deployment plan.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup completion.
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion.
- **Polish (Phase 4)**: Depends on User Story 1 completion.

### Parallel Opportunities

- Once Foundational (Phase 2) is complete, tasks T004-T010 and T013 within User Story 1 can be started in parallel.
- Task T011 depends on the markdown files from T004-T010 being present.
- Task T014 can be worked on in parallel with Phase 3.

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup.
2.  Complete Phase 2: Foundational.
3.  Complete Phase 3: User Story 1.
4.  **STOP and VALIDATE**: Run `npm run start` and thoroughly test all navigation and content rendering for User Story 1.
5.  Complete Phase 4: Polish.
6.  Deploy the MVP to GitHub Pages.