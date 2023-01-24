import { IncomingForm } from "formidable";
import mv from "mv";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function upload(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      const ext = files.file.originalFilename.split(".")[1];
      const uuid = Math.random().toString(26).slice(2);
      var oldPath = files.file.filepath;
      var newPath = `./public/images/${uuid}.${ext}`;
      mv(oldPath, newPath, function (err) {});
      res.status(201).json({
        uuid,
        url: `/images/${uuid}.${ext}`,
      });
      return resolve();
    });
  });
}
