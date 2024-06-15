import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

const directoryPath = path.join(__dirname, "../public/images/works-original/");
const exclude = [".", "..", ".DS_Store"];

fs.readdir(directoryPath, async (err, directories) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  for (const dir of directories) {
    if (exclude.includes(dir)) {
      continue;
    }

    const sourcePath = path.join(directoryPath, dir);

    const files = await fs.promises.readdir(sourcePath);
    for (const filename of files) {
      if (exclude.includes(filename)) {
        continue;
      }

      const destPath = sourcePath.replace("/works-original/", "/works/");

      const imageSourcePath = path.join(sourcePath, filename);
      const imageDestPath = path.join(destPath, filename);
      const thumbPath = path.join(destPath, "thumbs", filename);

      fs.mkdirSync(path.dirname(thumbPath), { recursive: true });

      await Promise.all([
        sharp(imageSourcePath)
          .resize(850, 650, { fit: "inside" })
          .toFile(imageDestPath),
        sharp(imageSourcePath)
          .resize(122, 122, { fit: "cover" })
          .toFile(thumbPath),
      ]);
    }
  }
});
