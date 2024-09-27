// import fs from "fs";
// import { StartFunc as getColumnsData } from "./getColumnsData.js";
// import { StartFunc as GetTableNames } from "./GetTableNames.js";
// import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";

// import { StartFunc as prepareSideBar } from "./prepareSideBar.js";
// import sidebarItems from './sideBarItems.json' with {type: 'json'};

const StartFunc = ({ mode, inFilesArray }) => {
    const variables = {};
    let LocalFiles = inFilesArray;

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            isDev: mode === 'development'
        };
    });

    return variables;
};

export { StartFunc };