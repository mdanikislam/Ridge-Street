import whereLand from "../assets/images/map.png"

const WhereWeLand = () => {
  return (
    <div>

            <div className='bg-green-800 py-16'>
        <div className='md:pl-[154px] pl-20 pt-5 mb-20'>
            <h1 className='text-[56px] font-black  text-white'>WHERE WE LAND</h1>
        <p className='text-white text-[24px]'>Ridge Street provides hard money loans to real estate investors in 35 states.  </p>
<p className='text-white text-[24px]'>We focus our efforts in <span className='text-[32px] font-bold'>Texas</span> and <span className='text-[32px] font-bold'>Florida</span>.</p>
        </div>

        <div className='flex justify-center items-center'>
            <img className="w-1/2" src={whereLand} alt="" />
        </div>

    </div>

    </div>
  )
}

export default WhereWeLand