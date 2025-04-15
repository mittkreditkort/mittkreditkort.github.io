import {
  ArrowUpDown,
  CreditCard,
  Gift,
  Percent,
  Search,
  Shield,
} from "lucide-react";
import { useState } from "react";
import creditCards from "./data/swedish-credit-cards";
import { CreditCardType } from "./types";

function App() {
  const [sortBy, setSortBy] = useState<keyof CreditCardType>("annualFee");
  const [searchTerm, setSearchTerm] = useState("");

  const sortedCards = [...creditCards]
    .filter(
      (card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.provider.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (typeof a[sortBy] === "number" && typeof b[sortBy] === "number") {
        return (a[sortBy] as number) - (b[sortBy] as number);
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">
                Kreditkort Jämförelse
              </h1>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Sök kreditkort..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-6">
          <div className="flex items-center">
            <ArrowUpDown className="h-5 w-5 text-gray-500 mr-2" />
            <select
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as keyof CreditCardType)
              }
            >
              <option value="annualFee">Sortera efter årsavgift</option>
              <option value="interestRate">Sortera efter ränta</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.name}
                </h2>
                <p className="text-gray-600 mb-4">{card.provider}</p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Percent className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">
                      Årsavgift: {card.annualFee} kr
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">
                      Ränta: {card.interestRate}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Gift className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="text-gray-900 font-medium">
                        Fördelar:
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 ml-7">
                      {card.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Ansök nu
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            Informationen är endast vägledande. Kontrollera alltid aktuella
            villkor hos kortutgivaren.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
