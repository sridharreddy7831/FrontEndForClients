import { StartFunc as StartFuncGetFetch } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
  let jVarLocalFromFetch = await StartFuncGetFetch();
  await StartFuncAfterFetch({ inFetchData: jVarLocalFromFetch });
  jFLocalHideSpinner();
  var $table = $("#table");
  let LocalData = await jFLocalDataSameDate();
  $table.bootstrapTable({
    data: LocalData,
  });
};

let jFLocalHideSpinner = () => {
  let jVarLocalSpinnerId = document.getElementById("SpinnerId");
  jVarLocalSpinnerId.style.display = "none";
};

const jFLocalDataSameDate = async () => {
  let LocalData = await LocalFetchFunc();
  let jVarLocalDateTime = getUrlQueryParams({
    inGetKey: "DateTime",
  });
  let LocalDataWithDateTime = LocalData.filter((element) => {
    let LocalFromDateTime = JLocalDateFunc({
      inDate: element.DateTime,
    });
    // let LocalToDateTime = JLocalDateFunc({
    //   inDate: jVarLocalDateTime,
    // });
    if (LocalFromDateTime == jVarLocalDateTime) {
      return element;
    }
  });
  return LocalDataWithDateTime;
};

const JLocalDateFunc = ({ inDate }) => {
  return new Date(inDate)
    .toLocaleString("en-GB", {
      timeZone: "UTC",
    })
    .replace(",", "");
};

const LocalFetchFunc = async () => {
  let jVarLocalStichRef = getUrlQueryParams({
    inGetKey: "StichRef",
  });
  let LocalURL = `/bin/DeliveryStiching/FilterData/FK/${jVarLocalStichRef}`;
  let Response = await fetch(LocalURL);
  let Data = await Response.json();
  console.log("data: ", Data);
  return Data;
};

let getUrlQueryParams = ({ inGetKey }) => {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const value = parameters.get(inGetKey);
  return value;
};

export { StartFunc };
