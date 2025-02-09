const getuserinstall = async (setuserinstall, setuserinstallpending) => {
  try {
    setuserinstallpending(true);
    const response = await fetch("https://api1.arzparz.com/api/user/users");
    if (response.ok !== true) {
      setuserinstallpending(false);
      return false;
    }
    const parseresponse = await response.json();
    if (parseresponse.status !== true) {
      setuserinstallpending(false);
      return false;
    }
    setuserinstallpending(false);
    
    setuserinstall(parseresponse.data);
  } catch (err) {
    console.log(err);
    setuserinstallpending(false);
    return false;
  }
};

export default getuserinstall;
