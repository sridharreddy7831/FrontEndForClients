const StartFunc = ({jVarLocalCurrentTarget, inProjectName}) => {
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jVarLocalCurrentTarget.dataset.rowpk;
    jVarLocalBodyData.inProjectName = inProjectName;
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    
    return jVarLocalBodyData;
};

export { StartFunc };