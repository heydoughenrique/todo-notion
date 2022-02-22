const { Client } = require("@notionhq/client");
const { camelizeKeys } = require("humps");

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = "66e85c4cc9b545ec85ce0a6003d71ed7";

export default async (req, res) => {
  const { completed } = req.query;
  const data = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Done",
      checkbox: {
        equals: Boolean(completed),
      },
    },
  });
  res.status(200).json(camelizeKeys(data.results));
};
