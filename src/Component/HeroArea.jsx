import banner from "../assets/images/banner.png"
const HeroArea = () => {
  return (
    <div className="relative z-0">
       <img src={banner} alt="" className="w-full md:h-[600px] h-[auto] object-cover" />
       <div className="absolute top-44 left-50 z-10 w-1/3">
        <h1 className=" bg-gradient-to-r from-[#165831] to-[#4e996c] text-transparent bg-clip-text font-black text-[40px]">Florida and Texas 
Hard Money Lenders</h1>
<p className="text-xl py-5">Fast Closing Fix and Flip and Rental Loans For Your Investment Properties.</p>
  <button className="btn bg-[#165831] text-white font-bold ">GET APPROVED ONLINE</button>
       </div>

    </div>
  )
}

export default HeroArea