# Implementation Plan: Physical AI & Humanoid Robotics Book

**Branch**: `001-docusaurus-book-structure` | **Date**: 2025-12-09 | **Spec**: [specs/001-docusaurus-book-structure/spec.md](specs/001-docusaurus-book-structure/spec.md)
**Input**: User prompt providing updated implementation details.

## Summary

This plan outlines the creation of a Docusaurus v3-based website for the 'Physical AI & Humanoid Robotics' book. The plan details a new module structure for a 13-week course, a testing strategy, and a deployment pipeline using GitHub Actions to publish the site on GitHub Pages.

## Technical Context

**Language/Version**: JavaScript (Docusaurus v3/React)
**Primary Dependencies**: Docusaurus v3, React
**Storage**: Files (Markdown for book content)
**Testing**: Manual testing via local dev server, build verification via `npm run build`.
**Target Platform**: Web (Static Site on GitHub Pages)
**Project Type**: Web application
**Performance Goals**: Google Lighthouse score > 90; Time to First Byte (TTFB) < 500ms
**Constraints**: The website must be responsive for both desktop and mobile browsers.
**Scale/Scope**: The book consists of content for a 13-week course, organized into 7 documentation folders and presented as 4 modules in the sidebar.

## Constitution Check

*This section ensures alignment with the project's core structure.*

- **Module/Chapter Alignment**: The book content will be organized into 4 logical modules for the sidebar, as follows:
  - `[ ]` **Module 1: Introduction** (`01-intro/`)
  - `[ ]` **Module 2: Core Technologies** (`02-ros2/`, `03-simulation/`)
  - `[ ]` **Module 3: Advanced AI & Robotics**
    - `[ ]` **04-isaac**: Chapters for this module will be listed here.
    - `[ ]` **05-vla**: Chapters for this module will be listed here.
  - `[ ]` **Module 4: Application & Project** (`hardware-guide/`, `capstone/`)
- **Rationale**: This structure organizes the 7 content folders into 4 logical top-level groups for clear navigation, aligning with the user's request for a 4-module sidebar.

## Project Structure

### Source Code (repository root)

The project will follow a Docusaurus structure with content folders organized by topic.

```text
humanoid-robotics-book/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── 01-intro/
│   ├── 02-ros2/
│   ├── 03-simulation/
│   ├── 04-isaac/
│   ├── 05-vla/
│   ├── hardware-guide/
│   └── capstone/
├── src/
│   ├── pages/
│   └── css/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

**Structure Decision**: A standard Docusaurus v3 project structure. The `docs` directory will contain the book's content, with subdirectories for each major topic. The `sidebars.js` file will be configured to create the 4-module view. A GitHub Actions workflow will be added for automated deployment.

## Testing and Deployment Plan

### Testing

1.  **Local Development Testing**:
    -   **Command**: `npm run start`
    -   **Checks**: Manually verify sidebar navigation, chapter links, content rendering, and overall layout on a local development server. This is the primary method for catching broken links and navigation issues.

2.  **Build Verification**:
    -   **Command**: `npm run build`
    -   **Checks**: Ensure the Docusaurus site builds successfully into static files without any errors. This step must pass before any deployment.

### Deployment

1.  **Deployment Platform**: GitHub Pages.

2.  **Configuration (`docusaurus.config.js`)**: The configuration file must be updated for GitHub Pages.
    -   `url`: `https://<YOUR_GITHUB_USERNAME>.github.io`
    -   `baseUrl`: `/<REPOSITORY_NAME>/`
    -   `organizationName`: Your GitHub username or organization.
    -   `projectName`: The repository name.
    -   `deploymentBranch`: `gh-pages`

3.  **Automation**: Deployment will be automated using GitHub Actions.

4.  **Workflow (`.github/workflows/deploy.yml`)**: A workflow will be created to trigger on push to the `main` branch. It will perform the following steps:
    -   Check out the code.
    -   Set up Node.js.
    -   Install dependencies (`npm install`).
    -   Build the site (`npm run build`).
    -   Deploy the contents of the `build` directory to the `gh-pages` branch using the `peaceiris/actions-gh-pages` action.

5.  **Verification**: After a successful deployment, manually access the live GitHub Pages URL to confirm that the site loads correctly and all modules and chapters are accessible.
