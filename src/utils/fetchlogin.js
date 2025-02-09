import api_constant from "./api_constant";

const fetchlogin=async(username,password)=>{
try{
    const data={username,password}
    const res=await fetch(`${api_constant}login`,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json', // نوع داده‌ی ارسالی به سرور
      },
      body:JSON.stringify(data),
    })
    let parseresponse=await res.json();
    return parseresponse
}catch(err){
    return err
}
}

export default fetchlogin;