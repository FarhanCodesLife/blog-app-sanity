export default async function handler(req,res) {
    if (req.method === "POST") {
      try {
        const payload = req.body; // The payload from Sanity
  
        // Log or process the payload
        console.log("Webhook Payload:", payload);
  
        // Perform actions with the data (e.g., save to database, trigger email)
        if (payload._type === "blogs") {
          console.log(`New Blog Created: ${payload.title}`);
        }
  
        res.status(200).json({ message: "Webhook processed successfully" });
      } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  



  






// skim9fLj3mvVEGxyERNSHPFwq5ymiLUEhFMsKS7PSHuk6CMKifznb9VZo3AskrYwP8poMNgmisZBYXrctfWh2MtgxMcxZRcoX8u5IDP91JQBGyxNLbgcm9XKuZ02lCiXRWdlR1wjdACIXb6haQoKlmvSiVTJfwrzxrxIHWOffIHJJhuHk9J3