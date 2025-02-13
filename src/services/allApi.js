import commonApi from "./commonApi";

export const uploadVideo=async(video)=>{
  return await commonApi("post","/videos",video)

}
export const getAllVideo=async()=>{
    return await commonApi("get","/videos","")
}
