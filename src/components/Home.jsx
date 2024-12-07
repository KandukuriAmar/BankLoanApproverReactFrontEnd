import React from 'react';
import Header from './Header';

const Home = () => {
    const username = localStorage.getItem('username');

    return (
        <div className="h-full flex flex-col bg-[#E7E8D1] text-gray-800">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1">
                <section className="flex flex-col justify-center items-center text-center h-[88vh] bg-[#E7E8D1] text-white p-5 gap-4">
                    <h1 className="text-black text-2xl font-semibold">Welcome to Loan Approval System</h1>
                    <button className="bg-[#e3867d] text-white py-3 px-5 rounded-lg transition-transform transform hover:bg-[#004a99] hover:scale-105 shadow-md">
                        <a href="loantypes" className="text-white">Get Started</a>
                    </button>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#476C7C] text-white p-6 text-center">
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a href="#" className="hover:text-[#e3867d]">Privacy Policy</a>
                    <a href="#" className="hover:text-[#e3867d]">Terms and Conditions</a>
                    <a href="#" className="hover:text-[#e3867d]">Sitemap</a>
                    <a href="#" className="hover:text-[#e3867d]">Facebook</a>
                    <a href="#" className="hover:text-[#e3867d]">Twitter</a>
                    <a href="#" className="hover:text-[#e3867d]">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
