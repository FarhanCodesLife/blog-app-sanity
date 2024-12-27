import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const payload = req.body; // The payload from the request
      console.log("Webhook Payload:", payload);
  
      switch (req.method) {
        // CREATE: Handle new content creation
        case "POST":
          if (payload._type === "blogs") {
            console.log(`New Blog Created: ${payload.blogtitle}`);
            // Perform actions like saving to a database
          }
          res.status(200).json({ message: "Blog created successfully" });
          break;
  
        // READ: Fetch data (Optional, if your API supports it)
        case "GET":
          // Example for fetching all blogs
          console.log("Fetching blogs...");
          res.status(200).json({ message: "Fetching blogs..." });
          break;
  
        // UPDATE: Handle content updates
        case "PUT":
          if (payload._type === "blogs") {
            console.log(`Blog Updated: ${payload.blogtitle}`);
            // Perform update logic, e.g., update in the database
          }
          res.status(200).json({ message: "Blog updated successfully" });
          break;
  
        // DELETE: Handle content deletions
        case "DELETE":
          if (payload._type === "blogs") {
            console.log(`Blog Deleted: ${payload.blogtitle}`);
            // Perform delete logic, e.g., remove from the database
          }
          res.status(200).json({ message: "Blog deleted successfully" });
          break;
  
        default:
          // Method not allowed
          res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
          res.status(405).end(`Method ${req.method} Not Allowed`);
          break;
      }
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  
  // skim9fLj3mvVEGxyERNSHPFwq5ymiLUEhFMsKS7PSHuk6CMKifznb9VZo3AskrYwP8poMNgmisZBYXrctfWh2MtgxMcxZRcoX8u5IDP91JQBGyxNLbgcm9XKuZ02lCiXRWdlR1wjdACIXb6haQoKlmvSiVTJfwrzxrxIHWOffIHJJhuHk9J3"
