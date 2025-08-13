# EMPACTS Technical Documentation

Technical documentation website for the EMPACTS development team, built with Docusaurus.

## About EMPACTS

EMPACTS is a youth organization dedicated to helping SDG (Sustainable Development Goals) startups in Vietnam grow and succeed. Our development team focuses on building innovative platforms that connect startups with mentors, fostering collaboration and knowledge sharing.

## Features

- **System Architecture Documentation** - Complete platform architecture with Mermaid.js diagrams
- **API Reference** - Comprehensive API documentation with examples
- **Development Guidelines** - Coding standards and best practices
- **Tag System** - Easy categorization and discovery of documentation
- **Related Documents** - Cross-references between related topics
- **Search Functionality** - Quick access to any topic
- **Responsive Design** - Works on desktop and mobile devices

## Quick Start

### Prerequisites

- Node.js 18.0 or above
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/empacts-dev/EMPACTS-Technical-Docs.git
cd EMPACTS-Technical-Docs

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
# Build for production
npm run build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Documentation Structure

```
docs/
├── intro.md                    # Welcome and overview
├── architecture/               # System architecture
│   ├── overview.md            # High-level architecture
│   └── database.md            # Database schema
├── api/                       # API documentation
│   ├── overview.md            # API reference overview
│   ├── authentication.md      # Authentication guide
│   └── endpoints.md           # API endpoints
└── development/               # Development guidelines
    ├── guidelines.md          # Coding standards
    ├── testing.md             # Testing strategies
    └── deployment.md          # Deployment process
```

## Contributing

### Adding New Documentation

1. Create a new markdown file in the appropriate directory
2. Add frontmatter with metadata:
   ```yaml
   ---
   sidebar_position: 1
   tags: [category, subcategory]
   ---
   ```
3. Use Mermaid.js for diagrams:
   ```mermaid
   graph TD
       A[Start] --> B[Process]
       B --> C[End]
   ```
4. Add tags and related documents at the bottom

### Documentation Standards

- Use clear, concise language
- Include code examples where appropriate
- Add diagrams for complex concepts
- Tag documents for easy discovery
- Link to related documents
- Follow the established structure

## Technology Stack

- **Docusaurus 3.8.0** - Static site generator
- **React 19.0.0** - Frontend framework
- **Mermaid.js** - Diagram rendering
- **Inter Font** - Typography
- **GitHub Pages** - Hosting

## Design System

The documentation follows EMPACTS design guidelines:

- **Primary Color**: #9200FE (Purple)
- **Typography**: Inter font family
- **Spacing**: Consistent 16px and 32px increments
- **Components**: Cards, buttons, and forms follow design system

## Support

- **Documentation Issues**: Create an issue in this repository
- **Development Questions**: Contact the development team
- **EMPACTS Website**: https://empacts.org

## License

This project is part of the EMPACTS organization and follows our internal development guidelines.
