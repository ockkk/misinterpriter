"use-strict";
const fs = require("fs");
const filePath = "./Assets/interpreters.json";

(() => {
  fs.readFile(filePath, (err, data) => {
    const articleInfo = {};
    if (err) throw err;
    const parsedData = JSON.parse(data.toString());

    parsedData.interpreters.forEach(name => {
      fs.readdir(`./Assets/${name}`, (err, files) => {
        if (err) throw err;

        files = files.map(filename => {
          const result = [];
          const splitedFileName = filename.split("_");

          splitedFileName[2] = splitedFileName[2].replace(".md", "");

          splitedFileName.forEach(el => result.push(el));
          result.push(filename);

          return result;
        });

        articleInfo[name] = files;

        fs.writeFile(
          "./Assets/articleData.json",
          JSON.stringify(articleInfo),
          err => {
            if (err) throw err;
          }
        );
      });
    });
  });
})();
