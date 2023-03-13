const sharp = require("sharp");
const fs = require("fs");

const assetsDir = "./assets/test/";
const outputDir = "./images/";

let files = fs.readdirSync(assetsDir);

for (file of files) {
  let filename = file.slice(0, file.indexOf("."));
  console.log(filename);

  sharp(`${assetsDir}/${file}`)
    .resize({ width: 780 })
    .jpeg({ mozjpeg: true })
    .toFile(`${outputDir}/${filename}.jpg`);

    sharp(`${assetsDir}/${file}`)
    .resize({ width: 780 })
    .webp({quality: 60})
    .toFile(`${outputDir}/${filename}.webp`);

}
