const editbanner=async(title,email,mobile,type,banner,address,website,text,count,count_fake,setyeseditpending,id)=>{

    let validtitle="-";
    let validemail="-"
    let validtext="-"
    let validmobile="-"
    let validtype=type
    let validbanner="-"
    let validaddress="-"
    let validwebsite="-"
    let validatecount="-"
    let validatecount_fake="-"
    
if(title!==""){
    validtitle=title
}
if(count!==""){
    validatecount=count
}
if(count_fake!==""){
    validatecount_fake=count_fake
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

const body=JSON.stringify({title:validtitle,email:validemail,mobile:validmobile,banner:validbanner,type:validtype,address:validaddress,website:validwebsite,text:validtext,count:validatecount,count_fake:validatecount_fake})

setyeseditpending(true)
try{
    const response=await fetch(`https://api1.arzparz.com/api/advertisement/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json", // تنظیم نوع محتوا
          },
          body:body
    })
    if(!response.ok){
        setyeseditpending(false)
        return false
    }
    const parseresponse=await response.json()
    if(!parseresponse.status){
        setyeseditpending(false)
    return false
    }
    setyeseditpending(false)
    return true
}catch(err){
    console.log(err);
    setyeseditpending(false)
    
    return false
}




}


export default editbanner