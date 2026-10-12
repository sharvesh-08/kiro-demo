# Requirements Document

# Requirements Document: Kiro Crash Course Educational Website

## Introduction

Build a professional, interactive, beginner-friendly educational frontend for a live technical workshop introducing Kiro and its agentic development ecosystem. The website will be built with React, TypeScript, Vite, Tailwind CSS, Lucide Icons, and Framer Motion. It should feature a modern, minimal light-mode UI with white backgrounds, subtle purple accents, clean typography, and spacious layouts.

## Glossary

- **Kiro Crash Course**: An educational website teaching Kiro's agentic development ecosystem to beginners
- **Kiro**: An agentic AI software engineer integrated into VS Code IDE
- **Kiro IDE**: AI-powered development environment running on VS Code with chat context and session types
- **Spec**: Structured requirements document following Requirements → Design → Tasks → Implementation workflow
- **Steering**: Persistent project context and coding guidelines stored in .kiro/steering/
- **Agentic Hooks**: Event-driven automation triggers for Kiro's agent workflow
- **MCP (Model Context Protocol)**: Protocol for extending Kiro's capabilities through external services
- **Kiro Powers**: Curated packages extending agent capabilities via MCP servers with workflow guides
- **Kiro Crew**: Verified capabilities consisting of a crew of specialized agents
- **Kiro CLI**: Command-line interface for interacting with Kiro features
- **Framer Motion**: Animation library for React providing smooth transitions
- **Module**: One of the 10 course modules covering Kiro's ecosystem components

## Requirements

### Requirement 1: Course Navigation and Layout

**User Story:** As a learner, I want to navigate through course modules using a sidebar, so that I can easily access and track my progress through the crash course.

#### Acceptance Criteria

1. THE Sidebar Navigation SHALL display all 10 course modules in a scrollable list
2. WHILE viewing any module, THE Sidebar Navigation SHALL highlight the current module with a purple accent
3. THE Sidebar Navigation SHALL display a circular progress indicator overlaid on each module icon when collapsed
4. WHERE a module is completed, THE Sidebar Navigation SHALL display a checkmark icon next to the module name
5. WHEN the window width is less than 768px, THE Sidebar Navigation SHALL automatically collapse to an icon-only view

### Requirement 2: Module Content Display

**User Story:** As a learner, I want to view each module with consistent content structure, so that I can understand concepts clearly following the standard format.

#### Acceptance Criteria

1. FOR EACH module, THE Content Display SHALL present information in the order: What it is → Why it matters → How it works → Example → Key takeaway
2. WHEN the module includes architecture diagrams, THE Content Display SHALL render them as interactive Mermaid diagrams
3. THE Content Display SHALL display code snippets with syntax highlighting using JetBrains Mono font
4. FOR EACH code snippet, THE Content Display SHALL include a copy button that shows a confirmation animation using Framer Motion
5. WHEN a user clicks a code snippet's copy button, THE Content Display SHALL show "Copied!" for 2 seconds before reverting to the original icon

### Requirement 3: Module Progress Tracking

**User Story:** As a learner, I want my progress through modules to be automatically saved, so that I can resume learning from where I left off.

#### Acceptance Criteria

1. WHEN a module is marked as complete, THE Progress Tracker SHALL store the completion status in localStorage
2. THE Progress Tracker SHALL persist the last viewed module index across browser sessions
3. WHEN calculating overall completion, THE Progress Tracker SHALL compute (completed_modules_count / total_modules_count) * 100
4. WHEN the page is refreshed, THE Progress Tracker SHALL restore the last viewed module
5. WHEN a module status changes, THE Progress Tracker SHALL save only the module's completion status; overall percentage SHALL be recomputed on page load

### Requirement 4: Interactive Course Roadmap

**User Story:** As a learner, I want to see the course structure and module relationships, so that I can understand the learning path and prerequisites.

#### Acceptance Criteria

1. THE Course Roadmap SHALL display all 10 modules in a visual roadmap with connection arrows
2. WHEN a user hovers over a module card, THE Course Roadmap SHALL highlight related modules and dependencies
3. FOR EACH completed module, THE Course Roadmap SHALL display a green status indicator
4. FOR UNSTARTED modules, THE Course Roadmap SHALL display a gray status indicator
5. FOR the current module, THE Course Roadmap SHALL display an animated pulse effect

### Requirement 5: Kiro Ecosystem Visualization

**User Story:** As a learner, I want to understand how Kiro's components relate to each other, so that I can grasp the overall agentic development ecosystem.

#### Acceptance Criteria

1. THE Ecosystem Visualization SHALL render Kiro's components as interactive nodes
2. WHEN a user clicks a component node, THE Ecosystem Visualization SHALL highlight related components and show detail panel
3. THE Ecosystem Visualization SHALL display relationship arrows indicating data flow between components
4. FOR EACH relationship, THE Ecosystem Visualization SHALL label the connection type (e.g., "uses", "extends", "integrates with")
5. WHEN the visualization is zoomed or panned, THE Ecosystem Visualization SHALL maintain node relationships and labels

### Requirement 6: Simulated CLI Playground

**User Story:** As a learner, I want to experiment with Kiro CLI commands without affecting my system, so that I can learn commands before trying them in a real environment.

#### Acceptance Criteria

1. WHEN a user types a command in the CLI Playground, THE Simulation Engine SHALL execute predefined responses
2. FOR kiro-cli --help, THE Simulation Engine SHALL return available command options with descriptions
3. FOR kiro-cli login, THE Simulation Engine SHALL simulate authentication flow with success message
4. FOR kiro-cli chat, THE Simulation Engine SHALL simulate entering chat mode with interactive prompts
5. FOR kiro-cli --version, THE Simulation Engine SHALL return the current Kiro CLI version string
6. FOR any command not matching predefined patterns, THE Simulation Engine SHALL show a blank/no-op response

### Requirement 7: Quick Reference Search

**User Story:** As a learner, I want to quickly find CLI commands and their syntax, so that I can reference information without navigating through modules.

#### Acceptance Criteria

1. THE Quick Reference SHALL provide a search input field for finding commands
2. WHILE typing in the search field, THE Quick Reference SHALL filter results in real-time
3. FOR EACH matching command, THE Quick Reference SHALL display: command syntax, description, and module reference
4. WHEN no matches are found, THE Quick Reference SHALL show "No commands found" message
5. ALL search queries SHALL be stored in history, including those returning no results

### Requirement 8: Module Progression Navigation

**User Story:** As a learner, I want to move between modules using navigation controls, so that I can review previous content or jump to the next topic.

#### Acceptance Criteria

1. THE Navigation Controls SHALL display "Previous" and "Next" buttons for module progression
2. WHERE the current module is the first module, THE Navigation Controls SHALL disable the "Previous" button
3. WHERE the current module is the last module, THE Navigation Controls SHALL disable the "Next" button
4. WHEN the "Previous" button is clicked, THE Navigation Controls SHALL load the previous module with slide animation
5. WHEN the "Next" button is clicked, THE Navigation Controls SHALL load the next module with slide animation

### Requirement 9: Module Completion Workflow

**User Story:** As a learner, I want to mark modules as complete after reviewing content, so that I can track my progress through the course.

#### Acceptance Criteria

1. WHEN a user clicks the "Mark Complete" button, THE Progress Tracker SHALL update the module status to completed
2. FOR completed modules, THE Progress Tracker SHALL show a "Completed" badge instead of the "Mark Complete" button
3. WHILE a module is marked complete, THE Progress Tracker SHALL allow the user to unmark it if desired
4. THE Progress Tracker SHALL update the overall course completion percentage after each status change
5. WHEN a module status changes, THE Progress Tracker SHALL save only the module's completion status; overall percentage SHALL be recomputed on page load

### Requirement 10: Content Consistency and Styling

**User Story:** As a learner, I want a consistent, professional visual experience, so that I can focus on learning without distractions from design inconsistencies.

#### Acceptance Criteria

1. ALL pages SHALL use white backgrounds with subtle purple accents as primary color
2. THE Typography SHALL use system fonts for body text and JetBrains Mono for code snippets
3. FOR cards and interactive elements, THE Styling SHALL use 4px border radius consistently
4. WHEN scrolling through content, THE Styling SHALL maintain consistent vertical spacing of 24px between sections
5. THE Layout SHALL use max-width of 1200px for content containers with 20px horizontal padding

### Requirement 11: Responsive Design

**User Story:** As a learner, I want the course to work on different screen sizes, so that I can learn from desktop, tablet, or mobile devices.

#### Acceptance Criteria

1. FOR screens wider than 1024px, THE Layout SHALL show sidebar with full module names visible
2. FOR screens between 768px and 1024px, THE Layout SHALL show sidebar with abbreviated labels
3. FOR screens narrower than 768px, THE Layout SHALL use a hamburger menu for sidebar access
4. THE Module Cards SHALL stack vertically on mobile screens with full-width layout
5. WHEN the screen orientation changes on tablets, THE Layout SHALL reflow elements without breaking