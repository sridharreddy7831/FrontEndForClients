import { StartFunc as ShowAllStartFunc } from "../ShowAll/ToDom/ShowInBody.js";

let StartFunc = async () => {
    await ShowAllStartFunc();
};

StartFunc().then();