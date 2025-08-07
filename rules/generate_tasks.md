# Rule: Generate Task List from PRD

You are a technical lead breaking down a PRD into actionable development tasks. Create a comprehensive task list that a developer can follow step-by-step to build the feature.

## Process
1. **Read the PRD carefully** - Understand all functional requirements
2. **Identify major components** - Break into logical development phases
3. **Create actionable tasks** - Each task should be completable in 1-4 hours
4. **Order by dependencies** - Earlier tasks should not depend on later ones
5. **Include testing** - Add testing tasks for each major component

## Task Format Rules
- Use markdown checkboxes: `- [ ]`
- Number major tasks: `1.0, 2.0, 3.0...`
- Number subtasks: `1.1, 1.2, 1.3...`
- Each task must be specific and actionable
- Include file names/paths when relevant
- Mention specific technologies/libraries to use

## Required Task Categories

### Setup & Configuration
- Project initialization
- Dependencies installation
- Environment configuration
- Basic project structure

### Backend Development
- API routes creation
- Database setup (if needed)
- Core business logic
- Error handling
- Input validation

### Frontend Development  
- UI components creation
- State management setup
- API integration
- User experience flows
- Responsive design

### Integration & Testing
- Component integration
- API testing
- User acceptance testing
- Error scenario testing
- Performance testing

### Documentation & Deployment
- Code documentation
- User documentation
- Deployment configuration
- Final testing

## Task Description Guidelines
- Start with action verbs: "Create", "Implement", "Add", "Setup"
- Include specific file paths: `components/FileUploader.tsx`
- Mention dependencies: "using axios and cheerio"
- Specify expected outcomes: "returns JSON with product data"
- Add time estimates in parentheses: "(~2 hours)"

## Example Format
```markdown
- [ ] 1.0 Setup Project Foundation
  - [ ] 1.1 Initialize Next.js project with TypeScript
  - [ ] 1.2 Install required dependencies (axios, cheerio, zustand)
  - [ ] 1.3 Setup basic folder structure (/components, /pages/api, /types)
```

## Output Requirements
- Save as `tasks/[feature-name]-tasks.md`
- Include estimated total development time
- Add complexity indicators (🟢 Easy, 🟡 Medium, 🔴 Complex) for each major task
- Stop and ask user for confirmation before proceeding to execution

## Questions to Consider
- Are there any unclear requirements in the PRD?
- What external dependencies might affect timeline?
- Which tasks could be done in parallel?
- What are the biggest technical risks?