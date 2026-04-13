const http = require("http");
const url = require("url");

const users = [
  { 
    NationalNo: "99610687",
    FirstArabicName: "كريم996",
    SecondArabicName: "محمد",
    ThirdArabicName: "احمد",
    FourthArabicName: "ناصر",
    FirstEnglishName: "KARIM",
    SecondEnglishName: "mohmd",
    ThirdEnglishName: "ahmad",
    FourthEnglishName: "NASSER",
    FullEnglishName: "KARIM NASSER",
    FullArabicName: "كريم ناصر",
    Nationality: "اردني",
    Gender: "ذكر",
    Status: "حي",
    Religion: "",
    MaritalStatus: "أعزب / عزباء",
    MaritalStatusEn: "SINGLE",
    CountryOfBirth: "JORDAN",
    PlaceOfBirth: "عمان / العاصمه",
    DateOfBirth: "23/12/1993",
    CardOffice: "بطاقات عمان "
  },
  { 
    NationalNo: "12345678",
    FirstArabicName: "حسام",
    SecondArabicName: "محمد",
    ThirdArabicName: "احمد",
    FourthArabicName: "ناصر",
    FirstEnglishName: "KARIM",
    SecondEnglishName: "mohmd",
    ThirdEnglishName: "ahmad",
    FourthEnglishName: "NASSER",
    FullEnglishName: "KARIM NASSER",
    FullArabicName: "كريم ناصر",
    Nationality: "اردني",
    Gender: "ذكر",
    Status: "حي",
    Religion: "",
    MaritalStatus: "أعزب / عزباء",
    MaritalStatusEn: "SINGLE",
    CountryOfBirth: "JORDAN",
    PlaceOfBirth: "عمان / العاصمه",
    DateOfBirth: "23/12/1993",
    CardOffice: "بطاقات عمان "
  }
];

// ✅ FULL CREDIT REPORT (بدون حذف)
const creditReport = {
  RsBody: {
    NewApplicationEnquireSimpleRs: {
      NoOfnonInstallmentsValidation: "1",
      NoOfsubjectInfo: "0",
      LoanSummaryValidation: {
        TotalMonthlyDues: "209",
        TotalFinancedAmount: "29120",
        TotalOutstandingBalance: "11127",
        TotalPLFinancedAmount: "0",
        TotalHLFinancedAmount: "0",
        TotalPaymentAsBR: "209",
        TotalPaymentAsGR: "247",
        DaysPastDues: [
          {
            LastUpdateDate: "09/04/2026",
            ContractNo: "I00327010",
            ProviderCodeEncrypted: "002",
            LimitAmount: "209",
            DPD6Months: "1",
            Status: "Q",
            StatusDesc: "No info",
            DPD24Months: "1",
            DPD12Months: "1",
            CardIssuancePeriod: "36",
            MinPaymentPercentage: "0",
            ContractPhase: "AC",
            ContractType: "Murabaha",
            ContractStartDate: "2022-07-04",
            ContractEndDate: "2027-06-25",
            FinancedAmount: "12556",
            numberOfInstallments: "60"
          },
          {
            LastUpdateDate: "09/04/2026",
            ContractNo: "R00419637",
            ProviderCodeEncrypted: "002",
            LimitAmount: "141",
            DPD6Months: "2",
            Status: "Q",
            StatusDesc: "No info",
            DPD24Months: "2",
            DPD12Months: "2",
            CardIssuancePeriod: "31",
            MinPaymentPercentage: "0",
            ContractPhase: "AC",
            ContractType: "Murabaha",
            ContractStartDate: "2023-10-17",
            ContractEndDate: "2029-10-25",
            FinancedAmount: "10158",
            numberOfInstallments: "72"
          },
          {
            LastUpdateDate: "09/04/2026",
            ContractNo: "000320689",
            ProviderCodeEncrypted: "002",
            LimitAmount: "106",
            DPD6Months: "2",
            Status: "Q",
            StatusDesc: "No info",
            DPD24Months: "2",
            DPD12Months: "2",
            CardIssuancePeriod: "36",
            MinPaymentPercentage: "0",
            ContractPhase: "AC",
            ContractType: "Murabaha",
            ContractStartDate: "2022-07-07",
            ContractEndDate: "2027-06-25",
            FinancedAmount: "6406",
            numberOfInstallments: "60"
          },
          {
            LimitAmount: "0",
            DPD6Months: "0",
            DPD24Months: "0",
            DPD12Months: "0",
            CardIssuancePeriod: "0",
            MinPaymentPercentage: "0",
            ContractPhase: "CL",
            ContractStartDate: "0001-01-01",
            ContractEndDate: "0001-01-01",
            FinancedAmount: "0",
            numberOfInstallments: "0"
          }
        ]
      },
      NonInstallmentsValidation: {
        DaysPastDues: [
          {
            LastUpdateDate: "12/03/2026",
            ContractNo: "700321901",
            ProviderCodeEncrypted: "002",
            LimitAmount: "0",
            DPD6Months: "0",
            Status: "Q",
            StatusDesc: "No info",
            DPD24Months: "0",
            DPD12Months: "0",
            CardIssuancePeriod: "35",
            MinPaymentPercentage: "0",
            ContractPhase: "AC",
            ContractStartDate: "0001-01-01",
            ContractEndDate: "0001-01-01",
            FinancedAmount: "0",
            numberOfInstallments: "0"
          }
        ]
      },
      CreditCardSummaryValidation: {
        TotalLimit: "100",
        TotalInvestbankLimit: "0",
        TotalOthersbankLimit: "100",
        TotalPaymentAsBR: "5",
        TotalPaymentAsGR: "0",
        DaysPastDues: [
          {
            LastUpdateDate: "09/04/2026",
            ContractNo: "T00586631",
            ProviderCodeEncrypted: "002",
            LimitAmount: "100",
            DPD6Months: "1",
            Status: "Q",
            StatusDesc: "No info",
            DPD24Months: "1",
            DPD12Months: "1",
            CardIssuancePeriod: "6",
            MinPaymentPercentage: "0",
            ContractPhase: "AC",
            ContractType: "Charge Card (Payable in full each month)",
            ContractStartDate: "2025-11-23",
            ContractEndDate: "2028-11-20",
            FinancedAmount: "100",
            numberOfInstallments: "0"
          }
        ]
      },
      FirstNameEnglish: "SAMER",
      LastNameEnglish: "nader",
      FatherFirstNameEnglish: "sami",
      GrandFatherFirstNameEnglish: "OKLEH",
      FirstNameArabic: "سامر",
      LastNameArabic: "نادر",
      FatherFirstNameArabic: "سامي",
      GrandFatherFirstNameArabic: "عقله",
      MotherFirstNameEnglish: "KHOLA",
      BirthDateDt: "1977-05-30",
      BirthDate: "30/05/1979",
      LoanNofDaysOfDues: "4",
      CreditCardNofDaysOfDues: "1",
      CbContractCode: "L0061195",
      ProviderSubjectNo: "SUBNO0000118027",
      FullProfile: false,
      NoOfMatched: "1",
      CBSubjectCode: "P00019983",
      TasheelatPass: true,
      BusinessRegistrationCodeDt: "0001-01-01"
    }
  }
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const queryObject = parsedUrl.query;

  // ✅ Civil API
  if (parsedUrl.pathname === "/civil") {
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

  // ✅ Credit Report API
  if (parsedUrl.pathname === "/api/credit-report") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(creditReport));
  }

  // Root
  if (parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Server is running 🚀");
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
