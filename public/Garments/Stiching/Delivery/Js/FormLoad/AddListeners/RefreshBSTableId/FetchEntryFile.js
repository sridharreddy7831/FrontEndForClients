import { StartFunc as StartFuncStichingPOS } from "./StichingPOS/EntryFile.js";
import { StartFunc as StartFuncBillsStiching } from "./ItemDetails/5-FetchFunc.js";
import { StartFunc as StartFuncDeliveryStiching } from "./DeliveryStiching/5-FetchFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    const [StichingPOS, BillsStiching, DeliveryStiching] = await Promise.all([StartFuncStichingPOS(), StartFuncBillsStiching(), StartFuncDeliveryStiching()]);
    await StartFuncAfterFetch({ StichingPOS, BillsStiching, DeliveryStiching });

    return await BillsStiching;
};

export { StartFunc };