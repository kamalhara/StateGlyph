# Releasing StateGlyph

The 0.2.0 feature release contains 55 icons in 14 displayed categories and
animated outgoing/incoming glyph transitions in both the React package and CLI.
The documentation adds a cycling homepage preview, common controls first in the
catalog, consistent card layouts, and expandable sidebar categories.
The four published packages are linked and receive the same minor release.

## Prepare and verify

```bash
npm ci
npm run generate
npm run format
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

Commit the implementation and its `.changeset/` release note. To prepare the
versioned release locally:

```bash
npm run version-packages
npm install --package-lock-only --ignore-scripts
```

Changesets consumes the release note, writes package changelogs, updates package
versions and internal dependencies. Commit these version changes and the updated
lockfile as a separate release commit. Do not recreate a consumed changeset for
the same addition, or the next release will bump versions again.

## Publish

Push or publish only after the repository owner approves this release. Use the
owner’s signed-in GitHub account for the push; verify it with `gh auth status`.

Authenticate with an npm account authorized for the `@stateglyph` scope:

```bash
npm login
npm whoami
npm run release
```

The release command builds packages and publishes unpublished versions through
Changesets. npm may require an interactive one-time password, or the GitHub
workflow can use the repository's configured NPM_TOKEN.

For the GitHub workflow, push the branch, open and merge a reviewed PR into
master, then run Actions → Release on master. When version changes have already
been applied, the workflow publishes the unpublished versions. When outstanding
changesets remain, it first opens a release PR; merge that PR, then run it again.

Confirm the four registry versions after publishing:

```bash
npm view @stateglyph/core version
npm view @stateglyph/react version
npm view @stateglyph/cli version
npm view @stateglyph/transitions version
```

Then verify the documentation host has rebuilt from the updated master. The
checked-in release workflow does not configure the website's hosting provider.

## Validate the release archive

From the repository root:

```bash
npm pack --workspace=@stateglyph/core --dry-run
npm pack --workspace=@stateglyph/react --dry-run
npm pack --workspace=@stateglyph/cli --dry-run
npm pack --workspace=@stateglyph/transitions --dry-run
```

All packages include their licenses and notices. The React archive includes 55
per-icon JavaScript/type entries, and the CLI archive bundles its standalone
animation template. Runtime dependencies remain React and Lucide; the CLI's
copied components do not depend on StateGlyph packages.
