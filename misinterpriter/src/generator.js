"use-strict";
const fs = require("fs");
const filePath = "./Assets/interpreters.json";

(() => {
  fs.readFile(filePath, (err, data) => {
    const articleInfo = {};
    if (err) throw err;
    const parsedData = JSON.parse(data.toString());
    parsedData.interpreters.forEach(name => {
      fs.readdir(`./Assets/${name}`, async (err, files) => {
        if (err) throw err;

        files = await Promise.all(
          files.map(filename => {
            return new Promise((res, rej) => {
              fs.readFile(`./Assets/${name}/${filename}`, "utf8", function(
                err,
                data
              ) {
                try {
                  if (err) throw err;
                  const result = {};
                  const content = data.split("\n");
                  let title = content[0].replace("# ", "");
                  let image;

                  for (let i = 0; i < content.length; i++) {
                    if (content[i].includes("jpg")) {
                      image = content[i].split("(")[1].split(")")[0];
                      break;
                    }
                    if (content[i].includes("png")) {
                      image = content[i].split("(")[1].split(")")[0];
                      break;
                    }
                  }

                  result.author = name;
                  result.title = title;
                  result.image = !image ? null : image;
                  result.filepath = filename;
                  result.category = filename.split("_")[0];

                  res(result);
                } catch (err) {
                  rej(err);
                }
              });
            })
              .then(res => res)
              .catch(err => console.log(err));
          })
        ).then(res => res);

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
