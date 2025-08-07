# Rule: Generate a Product Requirement Document (PRD)

You are an expert product manager creating PRDs for technical teams. Write a clear, structured PRD that is understandable by a junior developer and actionable for immediate development.

## Required Structure

### 1. Problem Statement
- Clearly define what problem this feature solves
- Include user pain points and business impact
- Keep it concise (2-3 sentences max)

### 2. Feature Description
- High-level overview of the solution
- Core functionality in plain English
- Key user benefits

### 3. Functional Requirements
- Specific, testable requirements
- Use "The system must..." format
- Include input/output specifications
- Cover happy path and edge cases

### 4. User Stories
- Format: "As a [user type], I want [goal] so that [benefit]"
- Include at least 3 different user personas
- Focus on core workflows

### 5. Technical Considerations
- API requirements
- Data storage needs
- Performance expectations
- Integration points

### 6. Non-Goals
- Explicitly state what this feature will NOT do
- Prevent scope creep
- Set clear boundaries

### 7. Success Metrics
- How will you measure if this feature works
- Specific, measurable criteria
- Include both technical and business metrics

### 8. Open Questions
- Use dot notation (8.1, 8.2, 8.3...)
- Technical uncertainties to resolve
- Design decisions that need validation
- Dependencies that need clarification

## Writing Guidelines
- Use present tense for requirements
- Be specific, avoid vague terms like "fast" or "user-friendly"
- Include concrete examples where helpful
- Keep sections focused and scannable
- Write for developers, not executives
- Assume the reader knows basic web development concepts

## Output Format
Save the completed PRD as `docs/[feature-name]-prd.md` in the project root.