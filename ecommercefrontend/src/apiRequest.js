const apiRequest = async (url = '', optionsObj = null) => {
    try {
      
        const sendReq = await fetch(url, optionsObj);

        if (!sendReq.ok) {
            throw new Error('Please reload the app.. something went wrong');
        }

        return await sendReq.json();
    } catch (err) {
        return {error: err.message}
    }
}

export default apiRequest;