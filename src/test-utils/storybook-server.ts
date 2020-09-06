// Copies from
import { downloadChisel } from "chisel-tunnel";
import { ChildService } from "child-service";

interface StorybookServerOptions {
  port: number;
}

export function storybookServer({
  port,
}: StorybookServerOptions): ChildService {
  return new ChildService({
    command: "./node_modules/.bin/storybook-server",
    args: [
      "-s",
      "public",
      "--ci",
      "--quiet",
      "--no-version-updates",
      "--no-release-notes",
      "--port",
      String(port),
    ],
    readyRegex: / Storybook.*started /,
    listenOnStderr: false,
  });
}
