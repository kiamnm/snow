const calcconverter=async(from,to,amount,setpending,setrightvalue,setallprice)=>{
    
    setpending(true)
    const data={
        from,
        to,
        amount
    }
    try{
        const response=await fetch("https://api1.arzparz.com/api/currency/transfer",{
    
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
        })
        if(response.ok!==true){
            setpending(false)
            
            return false

            
        }
        const parseresponse=await response.json()
        if(parseresponse.status!==true){

            setpending(false)
            return false
            
        }
        
        
        setrightvalue(parseresponse.data.price)
        setpending(false)
        setallprice(parseresponse.data.all)
        return parseresponse.data
        
    }catch(err){
        console.log(err);
        setpending(false)
        return false
        
    }

}
export default calcconverter