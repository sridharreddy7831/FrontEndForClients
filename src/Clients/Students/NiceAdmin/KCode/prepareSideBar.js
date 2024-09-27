import fs from "fs";
import path from 'path';

const StartFunc = () => {
    let LocalSideBarArray = [];
    let LocalTableSchemaObject = LocalFuncReadJsonFiles();
    // console.log("LocalTableSchemaObject : ", LocalTableSchemaObject);
    LocalSideBarArray = Object.keys(LocalTableSchemaObject).map(element => {
        let LoopInsideObject = {};

        LoopInsideObject.name = element;
        LoopInsideObject.key = element;
        LoopInsideObject.children = LocalTableSchemaObject[element].TableConfig.HtmlConfig.SideBar.children;

        return LoopInsideObject;
    });
    console.log("LocalSideBarArray : ", LocalSideBarArray);
    return LocalSideBarArray;
};

const LocalFuncReadJsonFiles = () => {
    const root = "TableSchema";
    let LocalFilesObject = {};

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'))
        .forEach(filename => {
            let LoopInsideFileData = fs.readFileSync(`${root}/${filename}`, "utf8");
            let LoopInsideJsonFileData = JSON.parse(LoopInsideFileData);
            if ("SideBar" in LoopInsideJsonFileData.TableConfig.HtmlConfig) {
                LocalFilesObject[path.parse(filename).name] = JSON.parse(LoopInsideFileData);

            }
        });

    return LocalFilesObject;
};


export { StartFunc };
