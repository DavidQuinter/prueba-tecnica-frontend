export const getTodayDate = (locale = "es") => {
    const date = new Date();
  
    const dayToday = new Intl.DateTimeFormat(locale, { weekday: "long" }).format(date);
    const month = new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
    const monthDay = date.getDate();
    const fullYear = date.getFullYear();
  
    return [dayToday, monthDay, month, fullYear];
  };
  