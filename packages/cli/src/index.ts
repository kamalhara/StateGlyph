#!/usr/bin/env node

import { Command } from "commander";

import { addIcons } from "./add";
import { formatIconList } from "./list";

const program = new Command();

program
  .name("stateicons")
  .description("Browse and add StateIcons components to a React project.")
  .version("0.1.0")
  .showHelpAfterError();

program
  .command("list")
  .description("List every available icon, grouped by category.")
  .action(() => {
    process.stdout.write(`${formatIconList()}\n`);
  });

program
  .command("add")
  .description("Copy one or more StateIcons into the current project.")
  .argument("<icons...>", "Icon names to add, or 'all'")
  .option(
    "-d, --dir <directory>",
    "Destination directory",
    "components/stateicons",
  )
  .option("--force", "Overwrite existing icon files", false)
  .option(
    "--dry-run",
    "Show what would be created without writing files",
    false,
  )
  .action(
    async (
      icons: string[],
      options: { dir: string; force: boolean; dryRun: boolean },
    ) => {
      try {
        const result = await addIcons(icons, {
          directory: options.dir,
          force: options.force,
          dryRun: options.dryRun,
        });

        const verb = options.dryRun ? "Would add" : "Added";

        if (result.added.length > 0) {
          process.stdout.write(`${verb}:\n`);
          for (const file of result.added) {
            process.stdout.write(`  ${file}\n`);
          }
        }

        if (result.skipped.length > 0) {
          process.stdout.write("Skipped existing files:\n");
          for (const file of result.skipped) {
            process.stdout.write(`  ${file}\n`);
          }
          process.stdout.write("Use --force to overwrite them.\n");
        }

        if (!options.dryRun && result.added.length > 0) {
          process.stdout.write(
            "\nThe generated components require react and lucide-react.\n",
          );
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        program.error(message);
      }
    },
  );

program.action(() => {
  program.outputHelp();
});

await program.parseAsync();
