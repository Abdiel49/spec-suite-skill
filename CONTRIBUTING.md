# Contributing to Spec Suite

Thank you for your interest in contributing to Spec Suite. This document provides guidelines for contributing to this project.

---

## Code of Conduct

Be respectful, inclusive, and constructive in all interactions. We are committed to maintaining a welcoming and professional community.

---

## How to Contribute

### Reporting Issues

Found a bug or have a feature request?

1. Check existing [issues](https://github.com/Abdiel49/spec-suite-skill/issues) to avoid duplicates
2. Open a new issue with:
   - Clear description of the problem or feature
   - Steps to reproduce (for bugs)
   - Expected vs. actual behavior
   - Environment details (OS, Node version, etc.)

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b ft/your-feature-name`
3. Make your changes with meaningful commits (see Conventional Commits below)
4. Push to your fork and open a Pull Request
5. Provide a clear description of changes and link related issues

---

## Conventional Commits

This project uses **Conventional Commits** to automate versioning and changelog generation via Release Please.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type | Version Impact | Usage |
|------|---|---|
| **feat** | MINOR | New feature or capability |
| **fix** | PATCH | Bug fix or issue resolution |
| **docs** | PATCH | Documentation updates |
| **refactor** | PATCH | Code restructuring (no feature change) |
| **perf** | PATCH | Performance improvements |
| **test** | No bump | Test additions or modifications |
| **chore** | No bump | Maintenance, dependencies, config changes |
| **ci** | No bump | CI/CD workflow updates |

### Examples

**Feature:**
```
feat(cli): add support for custom output directory

Users can now specify where generated documents should be saved
using the --output flag.
```

**Bug Fix:**
```
fix(schema): correct database relationship mapping

Fixed issue where many-to-many relationships were not properly
represented in the ERD output.
```

**Breaking Change** (triggers MAJOR version bump):
```
feat(core)!: redesign document generation API

BREAKING CHANGE: The generate() function signature has changed.
Use new generateDocument() method instead.
```

**Documentation:**
```
docs(readme): update installation instructions

Clarified the NPM installation process with examples.
```

**Chore (no version bump):**
```
chore(deps): update commander to v13.0.0
```

---

## Release Process

Releases are automated via [Release Please](https://github.com/googleapis/release-please) and follow Semantic Versioning.

### How It Works

1. Commits with conventional format are merged to `main`
2. Release Please automatically creates a Release PR with:
   - Updated version in `package.json`
   - Generated `CHANGELOG.md` entries
   - Git tags
3. Merge the Release PR → package is published to NPM

### Triggering a Release

Simply merge a PR with conventional commits to `main`. Release Please handles the rest.

To manually skip a release, include `skip ci` in the commit message.

---

## Development Workflow

### Prerequisites

- Node.js 18+
- npm (included with Node)

### Setup

```bash
git clone https://github.com/Abdiel49/spec-suite-skill.git
cd spec-suite-skill
npm install
```

### Testing

```bash
# Run all tests
npm test

# Watch mode
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Linting & Formatting

```bash
# Check for linting errors
npm run lint

# Format code
npm run format
```

### Local CLI Testing

```bash
node bin/cli.js
```

---

## Documentation

- **README.md** — User-facing project overview
- **SKILL.md** — AI agent skill documentation
- **SECURITY.md** — Security policy and considerations
- **CHANGELOG.md** — Release history and changes
- **references/** — Document generation templates

When adding features, update relevant documentation.

---

## Commit Message Checklist

Before pushing commits, verify:

- ✅ Type is one of: feat, fix, docs, refactor, perf, test, chore, ci
- ✅ Scope is concise and lowercase (e.g., `cli`, `schema`, `core`)
- ✅ Subject is imperative, lowercase, under 50 characters
- ✅ Body (if present) explains *why*, not *what*
- ✅ Footer includes issue references if applicable: `Closes #123`

### Invalid Examples ❌

```
Fixed bug in schema            # No type
feature: added new thing       # Wrong format
feat: Fixed the schema         # Not imperative
feat(CLI): add flag            # Scope should be lowercase
```

### Valid Examples ✅

```
feat(schema): add relationship mapping
fix(cli): correct output directory creation
docs(readme): update installation steps
Closes #42
```

---

## Pull Request Checklist

- ✅ Branch follows naming: `ft/feature-name` or `fx/bug-name`
- ✅ All commits use Conventional Commit format
- ✅ PR description references related issues
- ✅ Tests pass locally
- ✅ No unnecessary files in changeset
- ✅ `.gitignore` is respected

---

## Questions?

Open an issue or reach out via [GitHub Discussions](https://github.com/Abdiel49/spec-suite-skill/discussions).

---

**Thank you for contributing to Spec Suite!**
