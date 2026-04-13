const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// ====== DATA (زي ما هي بدون حذف) ======
const users = [
  { 
    NationalNo: "99610687",
    FirstArabicName: "كرسسيم",
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

// ====== Civil API ======
app.get("/civil", (req, res) => {
  const nationalNo = req.query.NationalNo;

  if (!nationalNo) {
    return res.status(400).json({ error: "NationalNo is required" });
  }

  const user = users.find(u => u.NationalNo === nationalNo);

  if (!user) {
    return res.status(404).json({ error: "Not found" });
  }

  return res.json(user);
});

// ====== Credit API ======
app.get("/api/credit-report", (req, res) => {
  res.json({
    RsBody: {
      NewApplicationEnquireSimpleV2Rs: {
        NoOfnonInstallmentsValidation: "0",
        NoOfsubjectInfo: "0",
        LoanSummaryValidation: {
          TotalMonthlyDues: "77",
          TotalFinancedAmount: "3200",
          TotalOutstandingBalance: "449",
          TotalPLFinancedAmount: "3000",
          TotalHLFinancedAmount: "0",
          TotalPaymentAsBR: "77",
          TotalPaymentAsGR: "0",
          DaysPastDues: [
            {
              LastUpdateDate: "30/03/2026",
              ContractNo: "I00340440",
              ProviderCodeEncrypted: "001",
              LimitAmount: "77",
              DPD6Months: "1",
              Status: "B",
              StatusDesc: "No info",
              DPD12Months: "1",
              DPD24Months: "1",
              CardIssuancePeriod: "36",
              MinPaymentPercentage: "0",
              OriginalCurr: "Jordanian dinar",
              ContractPhase: "AC",
              ContractType: "Personal loan (or Business loan)",
              ContractStartDate: "2022-10-23T00:00:00",
              ContractEndDate: "2026-09-30T00:00:00",
              FinancedAmount: "3000",
              PaymentPeriodicityDesc: "Monthly installments-30 days",
              numberOfInstallments: "48",
              Role: "Borrower",
              OutstandingBalance: "449",
              DaysPastDueNum: "1",
              DaysPastDueDesc: "Paid as agreed",
              WorstStatus: "Q",
              WorstStatusDesc: "No info"
            },
            {
              LastUpdateDate: "14/07/2024",
              ContractNo: "D00436120",
              ProviderCodeEncrypted: "002",
              LimitAmount: "222",
              DPD6Months: "0",
              Status: "B",
              StatusDesc: "No info",
              DPD12Months: "0",
              DPD24Months: "6",
              CardIssuancePeriod: "8",
              MinPaymentPercentage: "0",
              OriginalCurr: "Jordanian dinar",
              ContractPhase: "CL",
              ContractType: "Personal loan (or Business loan)",
              ContractStartDate: "2023-12-16T00:00:00",
              ContractEndDate: "2024-07-11T00:00:00",
              FinancedAmount: "200",
              PaymentPeriodicityDesc: "Monthly installments-30 days",
              numberOfInstallments: "1",
              Role: "Borrower",
              OutstandingBalance: "0",
              DaysPastDueNum: "1",
              OverduePaymentsAmount: "0",
              OverduePaymentsNumber: "0",
              DaysPastDueDesc: "Paid as agreed",
              WorstStatus: "Q",
              WorstStatusDesc: "No info"
            }
          ]
        },
        NonInstallmentsValidation: {},
        CreditCardSummaryValidation: {
          TotalLimit: "1300",
          TotalInvestbankLimit: "1300",
          TotalOthersbankLimit: "0",
          TotalPaymentAsBR: "52",
          TotalPaymentAsGR: "0",
          DaysPastDues: [
            {
              LastUpdateDate: "30/03/2026",
              ContractNo: "H00440943",
              ProviderCodeEncrypted: "001",
              LimitAmount: "1300",
              DPD6Months: "1",
              Status: "B",
              StatusDesc: "No info",
              DPD12Months: "1",
              DPD24Months: "1",
              CardIssuancePeriod: "27",
              MinPaymentPercentage: "0.04",
              OriginalCurr: "Jordanian dinar",
              ContractPhase: "AC",
              ContractType: "Credit Card (Installment)",
              ContractStartDate: "2024-01-22T00:00:00",
              ContractEndDate: "2029-01-22T00:00:00",
              FinancedAmount: "1300",
              PaymentPeriodicityDesc: "Monthly installments-30 days",
              numberOfInstallments: "0",
              Role: "Borrower",
              OutstandingBalance: "777",
              DaysPastDueNum: "1",
              OverduePaymentsNumber: "0",
              DaysPastDueDesc: "Paid as agreed",
              WorstStatus: "Q",
              WorstStatusDesc: "No info"
            }
          ]
        },
        FirstNameEnglish: "ELINA",
        LastNameEnglish: "DE MESA",
        GrandFatherFirstNameEnglish: "ABAD",
        FirstNameArabic: "راما",
        LastNameArabic: "رامي",
        MotherFirstNameArabic: "رماس",
        FatherFirstNameArabic: "رامز",
        GrandFatherFirstNameArabic: "روستيكو",
        BirthCountry: "JO",
        BirthPlace: "الفلبين",
        BirthDateDt: "1980-06-30T00:00:00",
        BirthDate: "30/06/1990",
        TasheelatPass: true,
        LoanNofDaysOfDues: "2",
        CreditCardNofDaysOfDues: "1",
        CbContractCode: "B00610",
        ProviderSubjectNo: "40301",
        FullProfile: true,
        NoOfMatched: "0",
        CBSubjectCode: "C0008",
        BusinessRegistrationCodeDt: "0001-01-01T00:00:00",
        Score: "742",
        ContractRequestDateDt: "2026-03-30T00:00:00",
        ContractRequestDate: "30/03/2026",
        RiskLevel: "The credit bureau score indicates a low risk profile for the subject"
      }
    }
  });
});

// ====== Root ======
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ====== Start Server ======
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
