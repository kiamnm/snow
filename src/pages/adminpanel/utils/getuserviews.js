const getuserviews=async(setuserviews, setuserviewspending)=>{
    try {
        setuserviewspending(true);
        const response = await fetch("https://api1.arzparz.com/api/user/views.json");
        if (response.ok !== true) {
          setuserviewspending(false);
          return false;
        }
        const parseresponse = await response.json();
        if (parseresponse.status !== true) {
          setuserviewspending(false);
          return false;
        }
        setuserviewspending(false);
        
        setuserviews(parseresponse.data);
      } catch (err) {
        console.log(err);
        setuserviewspending(false);
        return false;
      }
}

export default getuserviews