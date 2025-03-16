import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    {
        message: "Introdu un url: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    var imagine = qr.image(url);
    imagine.pipe(fs.createWriteStream("imagine.png"));

    fs.writeFile("link-github.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
