# Security Policy

## Supported Versions

The default supported branch is `main`.

## Reporting a Vulnerability

If you discover a security issue affecting the Vyira website or repository, please report it privately instead of opening a public issue.

- Email: `vyirainternational@gmail.com`
- Subject line: `Vyira Security Report`

Please include:

- A clear description of the issue
- Steps to reproduce it
- The affected page or file
- Any screenshots or proof of concept that help explain the risk

## Security Notes

This site is deployed as a static GitHub Pages website. That reduces some common attack surface because there is no custom application server or database running behind the storefront.

Important operational protections still matter:

- Protect the GitHub account with a strong password and two-factor authentication
- Protect the GoDaddy account with a strong password and two-factor authentication
- Rotate and remove any exposed tokens immediately
- Keep dependencies and GitHub Actions up to date

## Response Goal

Security reports will be reviewed as quickly as possible and fixed based on severity and reproducibility.
