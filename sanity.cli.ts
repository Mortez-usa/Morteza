import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./lib/sanity/config";

export default defineCliConfig({
  api: {
    projectId: "1j9i5rny",
    dataset: "production"
  }
});
