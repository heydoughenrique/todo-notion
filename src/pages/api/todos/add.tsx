import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DATABASE_ID = "66e85c4cc9b545ec85ce0a6003d71ed7";

export default async (req, res) => {
  const data = await notion.pages.create({
    parent: {
      database_id: DATABASE_ID,
    },
    properties: {
      Name: { title: [{ text: { content: req.body.text } }] },
      Done: { checkbox: false },
    },
  });
  res.status(200).json(data);
};
