const deletebanner=async(id,setyesdeletepending)=>{
    
try{
    setyesdeletepending(true);
    const response=await fetch(`https://api1.arzparz.com/api/advertisement/${id}`,{
        method:"DELETE"
    })
    if(!response.ok){
        setyesdeletepending(false)
        return(false)
    }
    const parseurl=await response.json()
    if(!parseurl.status){
        setyesdeletepending(false)
        return(false)
    }else{
        setyesdeletepending(true)
        return true
    }

}catch(err){
console.log(err);
setyesdeletepending(false)
return false
}
}

export default deletebanner