import express from "express";
import supabase from "../services/supabaseClient.js";
import { validateQuery } from "../utils/validate.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { query } = req.body;

  if (!validateQuery(query)) {
    return res.status(400).json({ error: "Query is required" });
  }

  // Save query
  await supabase.from("queries").insert([
    { query_text: query }
  ]);

  let topic = null;
  if (query.toLowerCase().includes("rag")) {
    topic = "rag";
  }

  if (!topic) {
    return res.json({
      answer: "Currently I can help with limited AI learning topics.",
      resources: []
    });
  }

  const { data: resources } = await supabase
    .from("resources")
    .select("title, type, file_url")
    .eq("topic", topic);

  return res.json({
    answer:
      "Retrieval-Augmented Generation (RAG) is a method that enhances AI responses using external knowledge sources.",
    resources
  });
});

export default router;
