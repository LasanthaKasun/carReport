export default async function current(req, res) {
  const fs = require("fs");
  const path = require("path");

  const dataSet = [];

  if (req.method !== "GET") {
    return res.status(405);
  }
  const fileData = fs.readFileSync(path.join(`./public/db/${req.query.uuid}.json`));
  const json = JSON.parse(fileData);
  dataSet.push(json);

  res.status(201).json({ files: dataSet });
}
