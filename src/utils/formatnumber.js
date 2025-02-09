function formatnumber(number) {
    
    const formattedNumber = parseFloat(number.toFixed(3)); 
  
    
    const formattedWithCommas = formattedNumber
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  
    return formattedWithCommas;
  }

export default formatnumber