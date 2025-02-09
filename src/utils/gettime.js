const gettime=()=>{
    const now = new Date();

    // دریافت ساعت و دقیقه
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // تنظیم AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // تبدیل ساعت به فرمت 12 ساعته
    hours = hours % 12;
    hours = hours ? hours : 12; // ساعت 0 را به 12 تبدیل می‌کند
    
    // اضافه کردن صفر به دقیقه اگر کمتر از 10 باشد
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    // ترکیب ساعت و دقیقه با AM/PM
    const currenttime = `${hours}:${minutes} ${ampm}`;
    return currenttime
}



export default gettime;