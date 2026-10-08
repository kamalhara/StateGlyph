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

1. Create a branch with `git switch -c codex/add-your-icon`.
2. Open `tooling/generate-icon-library.mjs`. Copy an entry in `extendedIcons` and
   give it a unique `slug`, camel-case name, Pascal-case name, title, description,
   core category, display category, initial state, and transition. Define every
   state with a glyph key, accessible label, and description. Use `continuous:
true` only for a spinning state. For example, the added Theme icon uses:

   ```js
   {
     slug: "theme",
     camel: "theme",
     pascal: "Theme",
     title: "Theme",
     description: "Switches between light, dark, and system themes.",
     coreCategory: "appearance",
     docsCategory: "Appearance",
     initialState: "light",
     transition: "rotate",
     states: [
       s("light", "sun", "Light theme", "Light theme is selected."),
       s("dark", "moon", "Dark theme", "Dark theme is selected."),
       s("system", "monitor", "System theme", "Follow the device theme."),
     ],
   }
   ```

   Theme already exists; use this as a reference rather than adding a duplicate.

3. Register each new glyph in the generator's `lucide` map, such as `sun:
"Sun"`. The key is the state definition's glyph name; the value is the
   `lucide-react` export. Existing glyph mappings can be reused.
4. For a new category, add its core key to `StateIconCategory` in
   `packages/core/src/types.ts`, its label to `packages/cli/src/list.ts`, and its
   description and ordering to `categoryDescriptions` and `categoryPriority`
   inside the generator's `docsRegistry` template. Adjust `iconPriority` there
   when a common control belongs near the top of the website.
5. Run `npm run generate`, then `npm run format`. This generates core
   definitions/catalog/exports, React wrappers/glyph maps/subpath exports, the
   website catalog, and the standalone CLI animation renderer. Commit these
   generated files with the generator. Edit the generator for future changes
   so another generation run preserves them.
6. Update the catalog and CLI count expectations in
   `packages/core/src/catalog.test.ts` and `packages/cli/src/list.test.ts`.
   Glyph coverage and CLI template tests already exercise every catalog entry.
   Add behavior tests if the change introduces new rendering behavior. Run
   `npm run format:check`, then the verification commands above. Use
   `npm run dev` to try the icon's page and change its states in the browser.
7. Run `npm run changeset`. Select affected published packages and choose a
   minor bump for a new icon or category. These four packages have linked
   versions. Describe the addition and commit the `.changeset/*.md` note along
   with the implementation. Website-only changes do not need a package bump.
8. Review exactly what will be committed with `git status --short` and
   `git diff`. Stage the changed source, generated files, tests, and release
   note, then commit with `git commit -m "feat: add your icon"`. Keep unrelated
   files out of the commit.
9. After the owner approves the reviewed changes, confirm the owner's GitHub
   account with `gh auth status`, then push the branch with
   `git push -u origin codex/add-your-icon` and open a pull request. Follow
   [RELEASE.md](./RELEASE.md) to apply version changes, update the lockfile,
   publish npm packages, and verify registry versions after approval.

Keep `packages/react/src/components/animated-icon.tsx` as the source of the shared
animation implementation; generation copies it into the CLI's source template.
The React component receives your application state, for example
`<ThemeStateIcon state="dark" />`; timers belong in demos or your application.

## Community standards

Participation in StateGlyph is governed by the
[Code of Conduct](./CODE_OF_CONDUCT.md). Report security vulnerabilities using
the private process described in [SECURITY.md](./SECURITY.md), not a public
issue.

By contributing, you agree that your contribution is licensed under the MIT
License used by this repository.
