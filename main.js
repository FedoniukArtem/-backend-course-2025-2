const currency = "USD";
const date_from = "20220707";  // 7 липня 2022
const date_to = "20220719";    // 19 липня 2022

// Створюємо об'єкт URL з базою сервера НБУ
const url = new URL("/NBUStatService/v1/statdirectory/exchange", "https://bank.gov.ua/");

// Додаємо параметри до URL через searchParams
url.searchParams.append("valcode", currency);
url.searchParams.append("from", date_from);
url.searchParams.append("to", date_to);
url.searchParams.append("json", ""); // формат відповіді JSON

console.log(url.toString());
