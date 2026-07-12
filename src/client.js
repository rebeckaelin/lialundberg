import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2wf26oig",
  dataset: "production",
  apiVersion: "2023-10-01", // or use current date format: "2024-11-29"
  useCdn: false, // set to false if you need fresh data
});
