# GymGenius

Gym Genius README file.

## Commands

`npm run lint`<br />
`npm run lint:css`<br />
`npm run format`

## Git

### Git Notation

<b>Type:</b> Describes the purpose or category of the commit. It can be one of the following:

`feat:` A new feature or enhancement.<br />
`fix:` A bug fix.<br />
`docs:` Documentation-related changes.<br />
`style:` Code style/formatting changes (e.g., whitespace, formatting).<br />
`refactor:` Code changes that neither fix a bug nor add a feature.<br />
`test:` Adding or modifying tests.<br />
`chore:` Other changes that do not modify code (e.g., build scripts, configuration files).

<b>Scope (optional):</b> Indicates the specific component, module, or area of the codebase that the commit affects. It helps provide additional context. Not all commits require a scope.

<b>Subject:</b> A concise description of the change. It should be written in the imperative present tense and provide a high-level overview of what the commit does.

### Commit Notation

`type(scope): subject`

Here are a few examples of commit messages using this notation:

`feat(user-auth): Add password reset functionality`<br />
`fix(api): Fix issue with null pointer exception in data processing`<br />
`docs(readme): Update installation instructions`<br />
`style(components): Format code according to style guidelines`<br />
`test(api): Add unit tests for user service`<br />
`chore(build): Update dependencies and build scripts`

### Push Notation

`type/ticket-number/subject`<br/>

Here are a few examples of commit messages using this notation:

`feat/KAN-1/some-description`
