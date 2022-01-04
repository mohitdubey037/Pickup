import { addInsurance, getInsurance, removeInsurance } from "services/PaymentServices";

export const creditCardDetails = [
    {
        cardId: 1,
        nameOnCard: "John Doe",
        cardType: "MC",
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
    {
        cardId: 2,
        nameOnCard: "Dhikesh Kandy",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
    {
        cardId: 3,
        nameOnCard: "Krishna Jha",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
];

export const debitCardDetails = [
    {
        cardId: 4,
        nameOnCard: "John Doe",
        cardType: "MC",
        cardNumber: "**** **** **** 1734",
        expiryDate: "05/24",
    },
    {
        cardId: 5,
        nameOnCard: "Dhikesh Kandy",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
    {
        cardId: 6,
        nameOnCard: "Krishna Jha",
        type: "SC",
        cardNumber: "**** **** **** 1122",
        expiryDate: "09/28",
    },
];



export const getInsuranceHandler = async (invoiceId: string) => {
    try {
      const res = await getInsurance(invoiceId)
      return res
    } catch (err) {
      return err;
    }
}

export const addInsuranceHandler = async (invoiceId: string) => {
    try {
      const res = await addInsurance(invoiceId)
      return res
    } catch (err) {
      return err;
    }
}

export const removeInsuranceHandler = async (invoiceId: string) => {
    try {
      const res = await removeInsurance(invoiceId)
      return res
    } catch (err) {
      return err;
    }
}


export const OnHoldTable = [
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'},
    {'Invoice Date':'06/03/2021','Shipment Count':'32','Shipped by':'Paul Lennon','Invoice Amount':'$ 5,654.23','Invoice Number':'32'}
]