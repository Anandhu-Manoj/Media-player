import axios from "axios";
import baseURL from "./baseURL";



const commonApi=async(httpMethod,endPoint,requestBody)=>{
    const requestConfig={
        method:httpMethod,
        url:baseURL+endPoint,
        data:requestBody,
    }
return  await axios(requestConfig).then((res)=>{
    return res
 }).catch((err)=>{
    return err
 })
}

export default commonApi
