# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## Unreleased

### Added
- Release automation with Release Please
- Conventional Commits integration for automated versioning
- CONTRIBUTING.md with contribution guidelines
- SECURITY.md documenting security considerations
- .gitignore for Node.js projects

### Changed
- Improved README with professional styling and contribution links
- Enhanced package.json metadata and publish configuration

### Fixed
- Fixed npm socket security alerts regarding URL strings
- Improved filesystem access documentation

---

## [1.0.5] — 2026-08-20

### Added
- Improved README styling with GitHub stars badge
- Issue and feature request links in documentation
- Comprehensive documentation for all 15 documents across Track A and Track B

### Changed
- Removed emoji from README for more professional appearance
- Restructured documentation with tables for better organization
- Enhanced visual hierarchy and readability

### Fixed
- URL formatting in badges for GitHub repository

---

## [1.0.4] — Previous Release

### Added
- Initial stable version of Spec Suite skill
- Full documentation generation framework
- Track A: 7 technical specification documents
- Track B: 8 legal and policy documents
- NPM package distribution

---

## [1.0.0] — Initial Release

### Added
- Core skill architecture with orchestration capabilities
- Document catalog with 15 comprehensive templates
- Dual-track documentation framework (Technical + Legal)
- Reference files for guided document generation
- CLI installer for agent integration
- Project-agnostic implementation for broad compatibility

---

## Release Process

Releases are automated via [Release Please](https://github.com/googleapis/release-please):

- **MAJOR** version (e.g., 1.0.0 → 2.0.0): Breaking changes (`feat!:` or `BREAKING CHANGE`)
- **MINOR** version (e.g., 1.0.0 → 1.1.0): New features (`feat:`)
- **PATCH** version (e.g., 1.0.0 → 1.0.1): Bug fixes (`fix:`, `docs:`, `refactor:`, `perf:`)

No version bump for: test updates, chore commits, CI/CD changes

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Conventional Commit format
- Branching strategy
- Pull request process
- Commit message standards

---

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/):

- Given a version number MAJOR.MINOR.PATCH
- MAJOR: incompatible API changes
- MINOR: backward-compatible new functionality
- PATCH: backward-compatible bug fixes

Versions are automatically generated based on commit types via Release Please.
