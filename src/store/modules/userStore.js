import { userService } from "../../services/userService"

function getUserData() {
  return {
    "id": "57da032c53691e524bf43cb8c3d5844b",
    "firstName": "רם",
    "lastName": "דוידוב",
    "idNumber": "304856859",
    "email": "rami.davidov@gmail.com",
    "phone": "0528897424",
    "type": 0,
    "cycleId": 0,
    "subscriptionExpirationDate": 1626469200,
    "signUpDate": 1623918743,
    "activationDate": 1623918772,
    "packageId": 0,
    "packageProducts": [
      1020
    ],
    "activeBusinessCount": 1,
    "businessId": "2b6313ca-0537-4512-a2ed-5c970c8918e5",
    "inboundEmail": "2a5201a8e20411de6d980631a512a06d@inbound.jupiter.d.greeninvoice.co.il",
    "businesses": [
      {
        "id": "2b6313ca-0537-4512-a2ed-5c970c8918e5",
        "type": 3,
        "taxId": "304856859",
        "name": "רם",
        "title": "",
        "address": "אבן גבירול 79",
        "cityId": 5000,
        "city": "תל אביב - יפו",
        "nameEn": "RAM",
        "titleEn": "",
        "category": "13",
        "subCategory": 1302,
        "cityEn": "Tel Aviv - Yafo",
        "phone": "",
        "templateId": 10,
        "skinId": 9,
        "bankDisplay": false,
        "bankDisplayEn": false,
        "accountantEmails": [],
        "accountantDocsEmailSettings": 0,
        "accountantReportEmailSettings": 0,
        "senderEmailSettings": 2,
        "documentsEmailSettings": 13,
        "incomeReportEmailSettings": 1,
        "incomeReportFormatType": 1,
        "emailSubjectType": 1,
        "reportSendingDay": 5,
        "accountingType": 0,
        "deductionRate": 0,
        "advanceTaxRate": 0,
        "advanceNationalInsuranceRate": 0,
        "active": true,
        "accountEmail": "rami.davidov@gmail.com",
        "documentCount": 0,
        "settings": {
          "documentCurrency": "ILS",
          "documentLang": "he",
          "documentRounding": false,
          "documentQuantityNearPrice": false,
          "documentCopyCurrencyRates": true,
          "documentVatType": 0,
          "rowVatType": 0,
          "mixedVatEnabled": false,
          "receiptIncomeEnabled": false,
          "unsignedEnabled": false,
          "externalCertificateEnabled": false,
          "attachmentEnabled": false,
          "depositDocumentsEnabled": false,
          "selectedPaymentChannels": [],
          "encoding": "auto",
          "showForeignAddress": true,
          "emailButtonBackgroundColor": "#FFC63F",
          "incomeLayout": 1,
          "journey": true,
          "sendMonthlyReportIncome": true,
          "sendMonthlyReportExpense": false,
          "senderEnabled": false
        },
        "creationDate": 1623918864,
        "lastUpdateDate": 1623918895,
        "exemption": true,
        "notifyEmail": "rami.davidov@gmail.com"
      }
    ],
    "documents": [
      10,
      100,
      200,
      210,
      300,
      400,
      500
    ],
    "settings": {
      "popupJourneySeen": true,
      "popupMeshulamSeen": false,
      "popupTrialEndedSeen": false,
      "appOnBoardingSeen": false,
      "persona": 1,
      "twoFactorAuthEnabled": false,
      "autoRenewal": false
    },
    "source": "",
    "pluginTypes": []
  }
}

export const userStore = {
  state: {
    // loggedInUser: null,
    loggedInUser: getUserData(),
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    }
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user
    },
    logout(state) {
      state.loggedInUser = null
    },
  },
  actions: {
    async login(context, { userCred }) {
      const user = await userService.login(userCred)
      try {
        context.commit({ type: 'setLoggedInUser', user })
      } catch (err) {
        console.log('err', err)
      }
    },
  }
}