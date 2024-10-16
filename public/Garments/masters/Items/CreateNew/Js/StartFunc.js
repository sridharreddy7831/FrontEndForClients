import { StartFunc as AddListenersStartFunc } from "./AddListeners/EntryFile.js";

let StartFunc = async () => {
    AddListenersStartFunc();
};

StartFunc().then();