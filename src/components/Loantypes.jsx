import React from 'react'
import Header from './Header';

export default function Loantypes() {
  return (
    <div>
        <div className="flex flex-col min-h-screen font-sans bg-[#E7E8D1] text-gray-800">
            <Header />
            <section className="py-16 text-center bg-[#E7E8D1]">
                <h2 className="text-4xl font-semibold text-[#F98866] uppercase mb-10">Our Loan Products</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {["Personal Loans", "Home Loans", "Agriculture Loans", "Education Loans"].map((loanType, index) => (
                        <div key={index} className="w-56 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1">
                            <h3 className="text-2xl font-semibold text-[#763626] mb-4">{loanType}</h3>
                            <p className="text-gray-600 mb-4">
                                {loanType === "Personal Loans" ? "Get quick personal loans for any need."
                                : loanType === "Home Loans" ? "Affordable home loans to make your dream come true."
                                : loanType === "Agriculture Loans" ? "Make your land more peaceful."
                                : "Secure your future with our education loans."}
                            </p>
                            <button className="bg-[#E3867D] text-white py-2 px-4 rounded hover:bg-slate-700 transition">
                                <a href="userloandetails">Apply Now</a>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    </div>
  )
}
