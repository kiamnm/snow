const edititem=async (editid,sortedit,mainedit,hideedit,textedit,linkedit,setyeseditpending)=>{
    let validtextedit="-";
    let validlinkedit="-"
    
    
if(textedit!==""){
    validtextedit=textedit
}
if(validlinkedit!==""){
    validlinkedit=linkedit
}


const body=JSON.stringify({index_sort:sortedit,is_main:mainedit,is_hide:hideedit,text:textedit,link:linkedit})

setyeseditpending(true)
try{
    const response=await fetch(`https://api1.arzparz.com/api/currency/${editid}`,{
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
    console.log(parseresponse,"parserespons eedit");
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


export default edititem