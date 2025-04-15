import { CreditCardType } from "../types";

const creditCards: CreditCardType[] = [
  {
    name: "SAS EuroBonus Mastercard",
    provider: "SEB",
    annualFee: 395,
    interestRate: 16.24,
    benefits: [
      "EuroBonus-poäng på alla köp",
      "Reseförsäkring",
      "Ingen valutaväxlingsavgift",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=300",
  },
  {
    name: "ICA Banken Kort Plus",
    provider: "ICA Banken",
    annualFee: 195,
    interestRate: 14.95,
    benefits: ["Bonus på ICA-butiker", "Reseförsäkring", "Prisgaranti"],
    imageUrl:
      "https://images.unsplash.com/photo-1580508174046-170816f65662?auto=format&fit=crop&w=300",
  },
  {
    name: "Remember Kreditkort",
    provider: "Remember Card",
    annualFee: 0,
    interestRate: 15.9,
    benefits: ["Ingen årsavgift", "Cashback på alla köp", "Mobilförsäkring"],
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=300",
  },
  {
    name: "Swedbank Mastercard",
    provider: "Swedbank",
    annualFee: 195,
    interestRate: 15.95,
    benefits: ["Reseförsäkring", "Avbeställningsskydd", "Förmånliga räntor"],
    imageUrl:
      "https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=300",
  },
  {
    name: "Handelsbanken Allkort",
    provider: "Handelsbanken",
    annualFee: 295,
    interestRate: 15.25,
    benefits: ["Reseförsäkring", "Avbeställningsskydd", "Rabatt på drivmedel"],
    imageUrl:
      "https://images.unsplash.com/photo-1574672280600-4ac79c4d4c95?auto=format&fit=crop&w=300",
  },
  {
    name: "Nordea Credit",
    provider: "Nordea",
    annualFee: 195,
    interestRate: 16.9,
    benefits: ["Reseförsäkring", "Internetköpsskydd", "Concierge-service"],
    imageUrl:
      "https://images.unsplash.com/photo-1577132922436-d9d9a28b6b9f?auto=format&fit=crop&w=300",
  },
  {
    name: "Länsförsäkringar Mastercard",
    provider: "Länsförsäkringar Bank",
    annualFee: 195,
    interestRate: 15.45,
    benefits: ["Reseförsäkring", "Prisgaranti", "ID-stöldskydd"],
    imageUrl:
      "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?auto=format&fit=crop&w=300",
  },
  {
    name: "FOREX Mastercard",
    provider: "FOREX Bank",
    annualFee: 195,
    interestRate: 16.5,
    benefits: [
      "Ingen uttagsavgift utomlands",
      "Reseförsäkring",
      "Rabatt på valutaväxling",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1602776229765-d8c8d45aafa0?auto=format&fit=crop&w=300",
  },
  {
    name: "Marginalen Bank Mastercard",
    provider: "Marginalen Bank",
    annualFee: 195,
    interestRate: 16.9,
    benefits: ["Reseförsäkring", "Avbeställningsskydd", "ID-stöldskydd"],
    imageUrl:
      "https://images.unsplash.com/photo-1559067096-49ebca3406aa?auto=format&fit=crop&w=300",
  },
  {
    name: "Coop Mastercard",
    provider: "MedMera Bank",
    annualFee: 295,
    interestRate: 14.95,
    benefits: ["Poäng på alla köp", "Extra poäng hos Coop", "Reseförsäkring"],
    imageUrl:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=300",
  },
  {
    name: "Norwegian Kreditkort",
    provider: "Norwegian Bank",
    annualFee: 0,
    interestRate: 24.4,
    benefits: [
      "CashPoints på alla köp",
      "Extra CashPoints på Norwegian-flyg",
      "Ingen årsavgift",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1540339832862-46d6a605b15f?auto=format&fit=crop&w=300",
  },
  {
    name: "Resurs Bank Mastercard",
    provider: "Resurs Bank",
    annualFee: 195,
    interestRate: 17.95,
    benefits: ["Reseförsäkring", "Köpskydd", "Delbetalning utan ränta"],
    imageUrl:
      "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?auto=format&fit=crop&w=300",
  },
];

export default creditCards;
