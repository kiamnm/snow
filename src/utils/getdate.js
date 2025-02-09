const currentday=()=>{
    const now= new Date();
    const alldaysofweek=[
        "Sunday",    
  "Monday",    
  "Tuesday",   
  "Wednesday", 
  "Thursday",  
  "Friday",    
  "Saturday" 
    ]
    const allmonthofyear = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const day = now.getDate()
      const month = allmonthofyear[now.getMonth()];
    const dayofweek=alldaysofweek[now.getDay()]
    return {dayofweek,day,month}
}

export default currentday