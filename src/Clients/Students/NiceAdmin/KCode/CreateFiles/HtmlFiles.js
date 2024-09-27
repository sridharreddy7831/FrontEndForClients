import fs from "fs";
import path, { resolve } from 'path';
import { StartFunc as GetTableNames } from "../GetTableNames.js";

const LocalFuncGetFiles = ({ inSrcPath, inSourceFolderName }) => {
    const root = `${inSrcPath}/${inSourceFolderName}/HtmlTemplateFiles`;
    let files = {}

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.html'))
        .forEach(filename => {
            files[filename.slice(0, -5)] = resolve(root, filename)
        });

    return files;
};

const StartFunc = ({ inSrcPath, inSourceFolderName }) => {
    const root = `${inSrcPath}/${inSourceFolderName}/HtmlFiles`;

    if (!fs.existsSync(root)) {
        fs.mkdirSync(root);
    }

    let TableNamesAsArray = GetTableNames();
    let LocalHtmlFiles = LocalFuncGetFiles({ inSrcPath, inSourceFolderName });
    // console.log("LocalHtmlFiles : ", LocalHtmlFiles, root);
    TableNamesAsArray.forEach(LoopTableName => {
        for (const [key, value] of Object.entries(LocalHtmlFiles)) {
            let LocalFileData = fs.readFileSync(value, "utf8");
            // console.log("LocalFileData : ", key, LoopTableName);
            if (key === "index") {
                fs.writeFileSync(`${root}/${key}.html`, LocalFileData);
                continue;
            };

            fs.writeFileSync(`${root}/${LoopTableName}${key}.html`, LocalFileData);
        };
    });
};

export { StartFunc };