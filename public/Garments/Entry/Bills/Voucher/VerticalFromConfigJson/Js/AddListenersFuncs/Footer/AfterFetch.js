let StartFunc = ({ inFetchPostData, inHtmlCard }) => {
    let jVarLocalFetchData = inFetchPostData;
    if (jVarLocalFetchData.KTF === false) {
        jFLocalForFailure({ inHtmlCard });
    } else {
        jFLocalForSuccess();
    };
};

let jFLocalForSuccess = () => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../ShowAll/ShowAll.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

let jFLocalForFailure = ({ inHtmlCard }) => {
    inHtmlCard.classList.remove("border-success");
    inHtmlCard.classList.add("border-danger");
    let jVarLocalShowFailure = inHtmlCard.querySelector("#ShowFailure");
    jVarLocalShowFailure.classList.remove("visually-hidden");
    let jVarLocalFirstInput = inHtmlCard.querySelector("input");
    jVarLocalFirstInput.focus();
};

export { StartFunc };