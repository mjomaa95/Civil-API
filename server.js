const http = require("http");
const url = require("url");

const users = [
  { 
    NationalNo: "99610687",
FirstArabicName: "كريم",
SecondArabicName: "رمزى",
ThirdArabicName: "كريم",
FourthArabicName: "ناصر",
FirstEnglishName: "KARIM",
SecondEnglishName: "RAMZI",
ThirdEnglishName: "KARIM",
FourthEnglishName: "NASSER",
FullEnglishName: "KARIM RAMZI KARIM NASSER",
FullArabicName: "كريم رمزى كريم ناصر",
Nationality: "اردني",
Gender: "ذكر",
Status: "حي",
Religion: "",
MaritalStatus: "أعزب / عزباء",
MaritalStatusEn: "SINGLE",
CountryOfBirth: "JORDAN",
PlaceOfBirth: "عمان / العاصمه",
DateOfBirth: "23/12/1996",
CardOffice: "بطاقات عمان الغربية"
  
  },
  { 
    
    NationalNo: "12345678",
    FirstArabicName: "كريم",
SecondArabicName: "رمزى",
ThirdArabicName: "كريم",
FourthArabicName: "ناصر",
FirstEnglishName: "KARIM",
SecondEnglishName: "RAMZI",
ThirdEnglishName: "KARIM",
FourthEnglishName: "NASSER",
FullEnglishName: "KARIM RAMZI KARIM NASSER",
FullArabicName: "كريم رمزى كريم ناصر",
Nationality: "اردني",
Gender: "ذكر",
Status: "حي",
Religion: "",
MaritalStatus: "أعزب / عزباء",
MaritalStatusEn: "SINGLE",
CountryOfBirth: "JORDAN",
PlaceOfBirth: "عمان / العاصمه",
DateOfBirth: "23/12/1996",
CardOffice: "بطاقات عمان الغربية"
  }
];

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (req.url.startsWith("/civil")) {
    const nationalNo = queryObject.NationalNo;

    if (!nationalNo) {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "NationalNo is required" }));
    }

    const user = users.find(u => u.NationalNo === nationalNo);

    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Not found" }));
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(user));
  }

  res.writeHead(404);
  res.end();
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
