import React from 'react'

const LoanProducts = () => {
  return (
    <div>

                <div className='py-16'>
            <h1 className='text-[#165831] font-black text-2xl md:text-[40px] text-center py-10'>LOAN PRODUCT</h1>

            <div className=' py-5 grid md:grid-cols-3 grid-cols-1'>

                {/* 1st card */}
                <div className="relative w-full max-w-sm mx-auto p-6 bg-[#165831] text-white rounded-xl shadow-md overflow-hidden">

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        
                        <div className="bg-green-800 p-4 rounded-lg mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 3L2 9h20L12 3z" />
                                <path d="M2 9v12h20V9" strokeLinecap="round" strokeLinejoin="round" />
                                <text x="7" y="18" fontSize="8" fill="white">RENT</text>
                            </svg>
                        </div>

                        
                        <h2 className="text-2xl font-bold text-white">Rental Property</h2>
                        <p className="text-sm text-white text-center">
                            30 Year DSCR loans in Florida and Texas
                        </p>

                        <ul className="text-sm text-white space-y-1 self-start">
                            <li>✅ Up to $1,500,000</li>
                            <li>✅ Interest Rate 6.75%-8.25%</li>
                            <li>✅ Origination Fee From 1.5%</li>
                            <li>✅ Up to 85% of LTV</li>
                        </ul>

                        <a href="#" className="text-white underline text-sm mt-2">
                            🔍 Learn More
                        </a>
                    </div>

                 
                    <div className="mt-6 mb-5">
                        <button className="w-full bg-white text-green-800 py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                            GET APPROVED ONLINE
                        </button>
                    </div>


                </div>


                {/* 2nd card  */}
                <div className="relative w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Top Slant */}
                    <div className="absolute -top-4 -left-4 w-full h-8 bg-green-800 rotate-[-3deg] z-0 rounded-t-xl" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        {/* Icon */}
                        <div className="bg-green-800 p-4 rounded-lg mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 3L2 9h20L12 3z" />
                                <path d="M2 9v12h20V9" strokeLinecap="round" strokeLinejoin="round" />
                                <text x="7" y="18" fontSize="8" fill="white">RENT</text>
                            </svg>
                        </div>

                        {/* Content */}
                        <h2 className="text-2xl font-bold text-green-800">Rental Property</h2>
                        <p className="text-sm text-gray-600 text-center">
                            30 Year DSCR loans in Florida and Texas
                        </p>

                        <ul className="text-sm text-gray-800 space-y-1 self-start">
                            <li>✅ Up to $1,500,000</li>
                            <li>✅ Interest Rate 6.75%-8.25%</li>
                            <li>✅ Origination Fee From 1.5%</li>
                            <li>✅ Up to 85% of LTV</li>
                        </ul>

                        <a href="#" className="text-green-700 underline text-sm mt-2">
                            🔍 Learn More
                        </a>
                    </div>

                    {/* Button */}
                    <div className="mt-6 mb-5">
                        <button className="w-full bg-green-800 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                            GET APPROVED ONLINE
                        </button>
                    </div>

                    {/* Bottom Slant */}
                    <div className="absolute -bottom-4 right-1 w-full h-8 bg-green-800 rotate-[3deg] z-0 rounded-b-xl " />
                </div>

                {/* 3rd card  */}
                <div className="relative w-full max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Top Slant */}
                    <div className="absolute -top-4 -left-4 w-full h-8 bg-green-800 rotate-[-3deg] z-0 rounded-t-xl" />

                    <div className="relative z-10 flex flex-col items-center gap-4">
                        {/* Icon */}
                        <div className="bg-green-800 p-4 rounded-lg mt-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 3L2 9h20L12 3z" />
                                <path d="M2 9v12h20V9" strokeLinecap="round" strokeLinejoin="round" />
                                <text x="7" y="18" fontSize="8" fill="white">RENT</text>
                            </svg>
                        </div>

                        {/* Content */}
                        <h2 className="text-2xl font-bold text-green-800">Rental Property</h2>
                        <p className="text-sm text-gray-600 text-center">
                            30 Year DSCR loans in Florida and Texas
                        </p>

                        <ul className="text-sm text-gray-800 space-y-1 self-start">
                            <li>✅ Up to $1,500,000</li>
                            <li>✅ Interest Rate 6.75%-8.25%</li>
                            <li>✅ Origination Fee From 1.5%</li>
                            <li>✅ Up to 85% of LTV</li>
                        </ul>

                        <a href="#" className="text-green-700 underline text-sm mt-2">
                            🔍 Learn More
                        </a>
                    </div>

                    {/* Button */}
                    <div className="mt-6 mb-5">
                        <button className="w-full bg-green-800 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                            GET APPROVED ONLINE
                        </button>
                    </div>

                    {/* Bottom Slant */}
                    <div className="absolute -bottom-4 right-1 w-full h-8 bg-green-800 rotate-[3deg] z-0 rounded-b-xl " />
                </div>

            </div>

        </div>

    </div>
  )
}

export default LoanProducts