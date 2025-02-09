const addbanner=async(title,email,mobile,type,banner,address,website,text,setyespending)=>{

    let validtitle="-";
    let validemail="-"
    let validtext="-"
    let validmobile="-"
    let validtype=type
    let validbanner="-"
    let validaddress="-"
    let validwebsite="-"
    
if(title!==""){
    validtitle=title
}
if(email!==""){
    validemail=email
}
if(text!==""){
    validtext=text
}
if(mobile!==""){
    validmobile=mobile
}

if(banner!=""){
    
    validbanner=banner
}
if(address!==""){
    validaddress=address
}
if(website!==""){
    validwebsite=website
}

const body=JSON.stringify({title:validtitle,email:validemail,mobile:validmobile,banner:validbanner,type:validtype,address:validaddress,website:validwebsite,text:validtext})

setyespending(true)
try{
    const response=await fetch("https://api1.arzparz.com/api/advertisement",{
        method:"POST",
        headers: {
            "Content-Type": "application/json", // تنظیم نوع محتوا
          },
          body:body
    })
    if(!response.ok){
        setyespending(false)
        return false
    }
    const parseresponse=await response.json()
    if(parseresponse.status===false){
        setyespending(false)
    return false
    }
    setyespending(false)
    return true
}catch(err){
    console.log(err);
    setyespending(false)
    
    return false
}




}


export default addbanner