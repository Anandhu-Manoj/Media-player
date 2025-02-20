import commonApi from "./commonApi";

export const uploadVideo=async(video)=>{
  return await commonApi("post","/videos",video)

}
export const getAllVideo=async()=>{
    return await commonApi("get","/videos","")
}

export const addHistory=async(videDetails)=>{
  return await commonApi("post","/History",videDetails)
}

export const getAllHistory=async()=>{
  return await commonApi("get","/History","")
}

export const deleteHistory=async(id)=>{
return await commonApi("delete",`/History/${id}`,{})
}

export const deleteVideo=async(id)=>{
  return await commonApi("delete",`/videos/${id}`,{})
}
export const createCatogary=async(catagoryDetails)=>{
  return await commonApi("post","/catogories",catagoryDetails)
}
export const  getCatogory=async()=>{
  return await commonApi("get","/catogories","")
}
export const deleteCategory = async (id) => {
  return await commonApi("delete", `/catogories/${id}`, {});
};

export const getSingleVideo=async(id)=>{
  return await commonApi("get",`/videos/${id}`,"")
}

export const updateCatogory=async(id,catagoryDetails)=>{
  return await commonApi("put",`/catogories/${id}`,catagoryDetails)

}