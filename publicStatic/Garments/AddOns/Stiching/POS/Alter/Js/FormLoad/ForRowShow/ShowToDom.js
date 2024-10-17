let StartFunc = ({ inDataToShow }) => {
    let data = inDataToShow;
    jFLocalToInputAccountNameId(data.AccountName);
    jFLocalToInputBSGroupId(data.BSGroup);
    jFLocalToInputSubGroupId(data.SubGroup);

};

let jFLocalToInputAccountNameId = (inValue) => {
    let jVarLocalHtmlId = 'AccountNameId';
    let jVarLocalAccountNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAccountNameId === null === false) {
        jVarLocalAccountNameId.value = inValue;
    };
};

let jFLocalToInputBSGroupId = (inValue) => {
    let jVarLocalHtmlId = 'BSGroupId';
    let jVarLocalBSGroupId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBSGroupId === null === false) {
        jVarLocalBSGroupId.value = inValue;
    };
};

let jFLocalToInputSubGroupId = (inValue) => {
    let jVarLocalHtmlId = 'SubGroupId';
   let jVarLocalSubGroupId = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalSubGroupId === null === false) {
      jVarLocalSubGroupId.value = inValue;
   };
};

export { StartFunc };