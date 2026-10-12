/**
 * Kiro Crash Course - Type Definitions (JSDoc)
 * 
 * These types are used throughout the application for:
 * - Module data structures
 * - Progress tracking
 * - CLI command definitions
 * - Animation variants
 */

/**
 * @typedef {Object} ModuleExample
 * @property {string} title - Example title
 * @property {string} description - Brief description of the example
 * @property {string} code - The actual code snippet
 * @property {'typescript'|'javascript'|'json'|'bash'|'markdown'} [language] - Code language for syntax highlighting
 */

/**
 * @typedef {Object} ModuleContent
 * @property {string} whatItIs - Explanation of what the concept is
 * @property {string} whyItMatters - Explanation of why this concept is important
 * @property {string} howItWorks - Explanation of how the concept works
 * @property {string} [example] - Optional single example
 * @property {ModuleExample[]} [examples] - Optional array of detailed examples
 * @property {string} keyTakeaway - Key lesson or takeaway from the module
 * @property {boolean} [hasMermaidDiagram] - Flag to indicate if module has a Mermaid diagram
 * @property {boolean} [hasInteractiveElement] - Flag to indicate if module has interactive elements
 */

/**
 * @typedef {Object} Module
 * @property {string} id - Unique identifier for the module
 * @property {string} title - Display title of the module
 * @property {string} description - Short description shown in sidebar
 * @property {number} order - Position in the course sequence (0-9)
 * @property {ModuleContent} content - The actual content of the module
 * @property {string[]} [prerequisites] - Optional array of prerequisite module IDs
 * @property {string[]} [relatedModules] - Optional array of related module IDs
 * @property {boolean} [completed] - Completion status (optional, derived from progress)
 */

/**
 * @typedef {Object} CLICommand
 * @property {string} command - The CLI command (e.g., "kiro-cli --help")
 * @property {string} description - What the command does
 * @property {string} category - Category of the command (e.g., "basics", "authentication", "chat")
 * @property {string[]} [examples] - Optional array of usage examples
 * @property {string} [moduleReference] - Reference to which module covers this command
 */

/**
 * @typedef {Object} SearchResult
 * @property {string} command - The matching command
 * @property {string} description - Command description
 * @property {string} module - Module reference
 * @property {number} score - Relevance score (for ranking)
 */

/**
 * @typedef {Object} ProgressState
 * @property {number} currentModuleIndex - Index of currently viewed module (0-9)
 * @property {string[]} completedModules - Array of completed module IDs
 * @property {string[]} searchHistory - Array of previous search queries
 * @property {number} lastViewedModule - Index of last viewed module for persistence
 * @property {boolean} sidebarCollapsed - Whether sidebar is collapsed on mobile
 */

/**
 * @typedef {Object} AnimationVariants
 * @property {Object} enter - Animation variants for entering elements
 * @property {Object} exit - Animation variants for exiting elements
 * @property {Object} hover - Animation variants for hover states
 * @property {Object} tap - Animation variants for tap/click states
 */

/**
 * @typedef {Object} FramerMotionTransitions
 * @property {Object} fade - Fade transition configuration
 * @property {Object} slide - Slide transition configuration
 * @property {Object} scale - Scale transition configuration
 * @property {Object} spring - Spring physics configuration
 */