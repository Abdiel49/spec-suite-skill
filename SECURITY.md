# Security Policy

This document outlines the security practices and considerations for Spec Suite.

---

## Overview

Spec Suite is a CLI skill that generates professional documentation for AI agents. It operates locally, requires no network access at runtime, and accesses only the filesystem necessary for document generation.

---

## Security Considerations

### Filesystem Access

**What it does:**
- Reads `SKILL.md` and reference templates from the package directory
- Creates a target directory: `.agents/skills/spec-suite/`
- Copies documentation files to the specified output directory

**What it does NOT do:**
- Access system credentials or `.env` files
- Read SSH keys or private keys
- Scan user home directories
- Modify or delete files outside the target directory
- Access sensitive application files

**Safety:**
- All file operations are explicit and scoped to user-specified directories
- No recursive directory traversal
- No hidden or unexpected file access

---

### Shell Access

**What it does:**
- Uses Node.js standard library functions: `console.log()`, `process.exit()`, `process.cwd()`
- Leverages `fs-extra` library for safe file operations

**What it does NOT do:**
- Execute shell commands via `exec()`, `spawn()`, or `eval()`
- Pass user input to shell interpreters
- Modify system files or configurations
- Access system binaries or services

**Safety:**
- No dynamic code execution
- No command injection vectors
- File paths are normalized and validated

---

### Network Access

**What it does:**
- Displays badges and links in README documentation (static references only)
- Links to GitHub repository, NPM registry, and developer blog (informational only)

**What it does NOT do:**
- Make HTTP requests at runtime
- Send data to external servers
- Phone home or collect usage metrics
- Access external APIs or services

**Safety:**
- No network activity occurs during installation or usage
- All external links are transparent and public
- No hidden data exfiltration

---

### Environment Variables

**What it does:**
- Node.js runtime may read standard environment variables (internal process management)

**What it does NOT do:**
- Intentionally access `NODE_ENV`, `PATH`, database credentials, API keys, or tokens
- Transmit environment variables to external services
- Log environment contents

**Safety:**
- No credential stuffing or credential theft
- No data exfiltration via environment variables

---

## Socket.dev Alerts Explained

Socket.dev security scanner flags patterns that *could* indicate malicious behavior. These alerts for Spec Suite are **false positives** resulting from:

1. **URL Strings (Low)** — Package contains links to GitHub repository and documentation sites
   - **Status**: Legitimate. URLs are informational and transparent.
   - **Resolution**: All external links are intentional and documented.

2. **Filesystem Access (Low)** — Package reads and writes documentation files
   - **Status**: Legitimate. Required for core functionality.
   - **Resolution**: Operations are scoped to user-specified directories only.

3. **Shell Access (Low)** — Package uses Node.js standard library functions
   - **Status**: Legitimate. CLI requires filesystem operations.
   - **Resolution**: No shell command execution or code evaluation.

4. **Environment Variable Access (Low)** — Runtime may access process variables
   - **Status**: Expected. Node.js process management requires this.
   - **Resolution**: Credentials are never accessed or transmitted.

---

## Vulnerability Reporting

**Do not open public issues for security vulnerabilities.**

To report a security vulnerability:

1. Email: [security concern] to the repository maintainer (check GitHub profile)
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if applicable)

3. Allow 48 hours for initial response
4. Work with the maintainer to verify and patch before public disclosure

---

## Dependency Security

### Current Dependencies

| Dependency | Purpose | Security Notes |
|-----------|---------|---|
| `commander` (^12.0.0) | CLI argument parsing | Actively maintained, widely used, regularly audited |
| `fs-extra` (^11.2.0) | File system operations | Actively maintained, stable, no known vulnerabilities |

### Audit Process

```bash
# Check for known vulnerabilities
npm audit

# Update to patched versions if available
npm audit fix
```

### Maintenance

- Dependencies are kept up-to-date
- Security advisories are monitored
- Patches are released promptly for critical issues

---

## Code Security Practices

### Validation
- All file paths are normalized using `path.resolve()`
- No use of string concatenation for paths
- Directory traversal attempts are prevented

### Error Handling
- Errors are caught and logged explicitly
- No sensitive data in error messages
- Process exits cleanly on failure

### No Dynamic Execution
- No `eval()`, `exec()`, `spawn()`, or similar functions
- No code generation or dynamic imports
- All functionality is static and predetermined

---

## Best Practices for Users

### Installation

```bash
# Install from npm (verified source)
npx spec-suite-skill

# Or clone from GitHub and review source code
git clone https://github.com/Abdiel49/spec-suite-skill.git
npm install
```

### Usage

1. Run the installer in your project directory
2. Specify output directory for generated documents
3. Review generated documentation before publishing
4. Apply organization-specific customizations

### Permissions

- Run as your own user, not as `sudo` or `root`
- No elevated privileges are needed
- Output directory should be writable by your user

---

## Security Updates

Security updates are released as **PATCH** versions:

```bash
# Update to latest patch
npm update spec-suite-skill

# Check for available updates
npm outdated
```

Subscribe to [GitHub releases](https://github.com/Abdiel49/spec-suite-skill/releases) for security announcements.

---

## Third-Party Security Audits

This package is monitored by:
- [Socket.dev](https://socket.dev/npm/package/spec-suite-skill) — Runtime behavior analysis
- [npm audit](https://docs.npmjs.com/cli/v10/commands/npm-audit) — Dependency vulnerability scanning

---

## Compliance

Spec Suite itself is a utility tool and does not handle production data. However, generated documents may contain sensitive information:

- Review generated documents before sharing
- Apply access controls appropriate to your organization
- Follow your company's data handling and compliance policies
- Customize legal documents with legal counsel review

---

## Questions?

For security-related questions, open a [GitHub discussion](https://github.com/Abdiel49/spec-suite-skill/discussions) or contact the maintainer directly.

---

**Last Updated**: 2026-08-20  
**Maintained By**: Abdiel49  
**Repository**: https://github.com/Abdiel49/spec-suite-skill
