const getallitemadmin = async (setallcurrency,setisgetallpending) => {
    setisgetallpending(true)
    try {
      const response = await fetch(
        "https://api1.arzparz.com/api/currency"
      );
  console.log(response,"response");
      if (!response.ok) {
        setisgetallpending(false)
        return false;
      }
      const parseresponse = await response.json();
      if (!parseresponse.status) {
        setisgetallpending(false)
        return false;
      }
      console.log(parseresponse,"parseresponse");
      setisgetallpending(false)
      const data = parseresponse.data;
      setallcurrency(data);
    } catch (err) {
      setisgetallpending(false)
      console.log(err);
      return false;
    }
  };
  
  export default getallitemadmin;
  