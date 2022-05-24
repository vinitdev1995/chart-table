import axios from "axios";
import getAuthHeaders from "./apiCall";


/** Common API call Handler */
export const HttpsAction = async ({
                                      method = "GET",
                                      url = "",
                                        endPoint = "",
                                      data = {},
                                      headers = {},
                                      positiveCallBack = e => e,
                                      negativeCallBack = e => e,
                                      finallyCallBack = e => e,
                                  }) => {
    try {
        url = url ||  `http://localhost:8080/api/${endPoint}`;
        headers = {...headers, ...(getAuthHeaders())};
        return await axios({
            method,
            url,
            data,
            headers
        }).then(async response => await positiveCallBack(response))
    } catch (e) {
        return await negativeCallBack(e)
    } finally {
        await finallyCallBack()
    }
};