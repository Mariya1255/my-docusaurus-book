# Data Model for "Physical AI & Humanoid Robotics" Book

**Date**: 2025-12-08

This document defines the key entities and content structure for the Docusaurus-based book.

## Key Entities

### 1. Book
- **Description**: The top-level entity representing the entire Docusaurus project.
- **Attributes**:
    - `title`: "Physical AI & Humanoid Robotics"
    - `tagline`: A brief, descriptive subtitle for the book.
    - `url`: The base URL for the deployed site.
    - `baseUrl`: The base path for the site (e.g., `/humanoid-robotics-book/`).
- **Configuration**: Managed in `docusaurus.config.js`.

### 2. Module (Chapter)
- **Description**: A top-level section of the book, corresponding to one of the 9 core topics. It acts as a category in the sidebar.
- **Implementation**: A subdirectory within the `docs/` directory (e.g., `docs/01-ros/`).
- **Attributes**:
    - `label`: The display name of the module in the sidebar (e.g., "The Robotic Nervous System (ROS 2)"). Managed via `_category_.json`.
    - `position`: The order of the module in the sidebar. Managed via `_category_.json`.
- **Contains**: A collection of Sections.

### 3. Section (Sub-chapter)
- **Description**: A distinct content page within a Module.
- **Implementation**: A Markdown file (`.md` or `.mdx`) within a module's subdirectory (e.g., `docs/01-ros/core-concepts.md`).
- **Attributes**:
    - `title`: The main heading of the page.
    - `content`: The text, images, and code examples within the file.
    - `sidebar_position`: The order of the section within its module's sidebar category.

## Content Structure (File System)

The book's content is organized in the `book/docs/` directory. This structure directly maps to the sidebar navigation.

```text
book/
└── docs/
    ├── 01-ros/
    │   ├── _category_.json
    │   └── index.md
    ├── 02-digital-twin/
    │   ├── _category_.json
    │   └── index.md
    ├── 03-ai-robot-brain/
    │   ├── _category_.json
    │   └── index.md
    ├── 04-vla/
    │   ├── _category_.json
    │   └── index.md
    ├── 05-why-physical-ai/
    │   ├── _category_.json
    │   └── index.md
    ├── 06-learning-outcomes/
    │   ├── _category_.json
    │   └── index.md
    ├── 07-weekly-breakdown/
    │   ├── _category_.json
    │   └── index.md
    ├── 08-assessments/
    │   ├── _category_.json
    │   └── index.md
    ├── 09-hardware-requirements/
    │   ├── _category_.json
    │   └── index.md
    └── intro.md
```

- **`book/docs/intro.md`**: The main landing page for the documentation section.
- **`book/docs/<module-dir>/`**: A directory for each of the 9 modules.
- **`_category_.json`**: A Docusaurus file used to configure a generated sidebar category. It will contain the `label` and `position` for the module.
    - Example for `01-ros/_category_.json`:
      ```json
      {
        "label": "1. The Robotic Nervous System (ROS 2)",
        "position": 1
      }
      ```
- **`index.md`**: The introductory page for each module.

This data model ensures a clean separation of concerns, enables auto-generated sidebars, and provides a scalable structure for adding content.
