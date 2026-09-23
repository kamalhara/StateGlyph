# Changesets

Run `npm run changeset` when a pull request changes a package that users can
install. Select the affected packages, choose the version impact, and write a
short explanation for users.

The generated Markdown file should be committed with the code change. The
release workflow collects those files, prepares package versions and
changelogs, and publishes approved releases.
