import { StartFunc as PreparePostDataStartFunc } from "../PreparePostData.js";

let StartFunc = async () => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inPostData = PreparePostDataStartFunc();
        let jVarLocalFetchUrl = `/bin/Vouchers/WithCheckAndGenPk`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inPostData)
        };

        const response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
        if (response.status === 200) {
            const data = await response.json();
            LocalReturnObject.KTF = true;
            return await data;
        } else {
            swal.fire({ icon: "error", title: "Duplicate Bill Number" })
        }

    } catch (error) {
        console.log("error:", error);
    }

};

export { StartFunc };