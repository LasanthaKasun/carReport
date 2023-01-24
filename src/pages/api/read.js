export default async function read(req, res) {
  const fs = require("fs");
  const path = require("path");

  if (req.method !== "POST") {
    return res.status(405);
  }
  const dataArr = [];
  const jsonsInDir = fs
    .readdirSync("./public/db/")
    .filter((file) => path.extname(file) === ".json");

  jsonsInDir.forEach((file) => {
    const fileData = fs.readFileSync(path.join("./public/db/", file));
    const json = JSON.parse(fileData);
    dataArr.push({ ...json, filePath: file.split(".")[0] });
  });
  res.status(201).json({ files: dataArr });
}
