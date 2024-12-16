const apiRequest = async (url='',optionsObj=null,errorMsg=null) =>{
  
    try{
         const sendReq = fetch(url,optionsObj)
         if(!sendReq.ok){
            throw new Error('Please reload the app.. something went wrong')
         }
    }catch(err){
         errorMsg = err.message
    }finally{
        return errorMsg
    }

}

export default apiRequest