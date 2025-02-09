const getallbaners = async (setallbanners,setgetbannerpending) => {
  setgetbannerpending(true)
  try {
    const response = await fetch(
      "https://api1.arzparz.com/api/advertisement/report"
    );

    if (!response.ok) {
      setgetbannerpending(false)
      return false;
    }
    const parseresponse = await response.json();
    if (!parseresponse.status) {
      setgetbannerpending(false)
      return false;
    }
    setgetbannerpending(false)
    const data = parseresponse.data;
    setallbanners(data);
  } catch (err) {
    setgetbannerpending(false)
    console.log(err);
    return false;
  }
};

export default getallbaners;
