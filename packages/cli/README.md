# @stateicons/cli

Copy editable StateIcons components into a React project.

```bash
npx @stateicons/cli list
npx @stateicons/cli add upload
```

Add more than one icon or choose a different destination:

```bash
npx @stateicons/cli add upload save --dir src/components/stateicons
npx @stateicons/cli add all
```

Use `--dry-run` to preview files and `--force` to replace existing files.
Without `--force`, the CLI safely skips files that already exist.

The generated components are TypeScript React files. They are self-contained
and depend only on `react` and `lucide-react`, so you can edit them freely in
your own project.

MIT licensed. The source icons from Lucide use the ISC License.
