import fs from "fs";
import { StartFunc as GetTableNames } from "../GetTableNames.js";
import sideBarItemsTemplateJson from '../sideBarItemsTemplate.json' with {type: 'json'};

const StartFunc = ({ inSrcPath }) => {
    const root = `${inSrcPath}/KCode`;

    let TableNamesAsArray = GetTableNames();

    let LocalSideBar = TableNamesAsArray.map(LoopTableName => {
        let LoopInsideObject = {};
        LoopInsideObject.name = LoopTableName;
        LoopInsideObject.key = LoopTableName;
        LoopInsideObject.children = LocalFuncAddTableName({ inTableName: LoopTableName });

        return LoopInsideObject;
    });

    fs.writeFileSync(`${root}/sideBarItems.json`, JSON.stringify(LocalSideBar));
};

const LocalFuncAddTableName = ({ inTableName }) => {
    let LocalNewArray = sideBarItemsTemplateJson.map(element => {
        let LoopInsideObject = { ...element };
        LoopInsideObject.url = `${inTableName}${LoopInsideObject.url}`;

        return LoopInsideObject;
    });
    // console.log("LocalNewArray : ", inTableName, LocalNewArray);
    return LocalNewArray;
};

export { StartFunc };