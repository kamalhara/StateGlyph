# Contributing to StateGlyph

Thank you for helping improve StateGlyph.

## Set up the repository

You need Node.js 22.19 or newer and npm 10.9 or newer.

```bash
git clone https://github.com/kamalhara/StateGlyph.git
cd StateGlyph
npm install
npm run dev
```

## Before making a change

- Search existing issues before opening a duplicate.
- Keep each pull request focused on one improvement.
- Use an existing Lucide icon when adding or changing an icon state.
- Include accessible labels and respect reduced-motion preferences.

## Find a contribution

Issues labelled
[`good first issue`](https://github.com/kamalhara/StateGlyph/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
are intended to be approachable without deep knowledge of the repository.
Issues labelled
[`help wanted`](https://github.com/kamalhara/StateGlyph/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
are ready for community contributions. Comment on an issue before starting
substantial work so effort is not duplicated.

## Verify your work

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

If your change affects a published package, create a changeset:

```bash
npm run changeset
```

Choose the affected package and explain the user-visible change. Do not edit
package versions manually; the release workflow applies changesets.

## Adding an icon

An icon needs a typed definition in `packages/core`, a React component in
`packages/react`, an export from both package entry points, and documentation.
Add tests for metadata and state mappings when appropriate.

## Community standards

Participation in StateGlyph is governed by the
[Code of Conduct](./CODE_OF_CONDUCT.md). Report security vulnerabilities using
the private process described in [SECURITY.md](./SECURITY.md), not a public
issue.

By contributing, you agree that your contribution is licensed under the MIT
License used by this repository.
