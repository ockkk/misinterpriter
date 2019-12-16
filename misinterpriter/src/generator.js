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
