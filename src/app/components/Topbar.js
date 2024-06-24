import React from 'react'

function Topbar() {
  return (
    <div className='w-full'> 
                <div className='w-[100px] h-[61px] py-[9px] px-[28px] bg-[#E7E7E7]'>
                            <h1 className='text-[#DC4A2D] leading-[27px] text-[20px] font-[700px] w-[47px] h-[27px]'>
                                Logo
                            </h1>
                </div>


                <div className='w-[538px] h-[74px] pl-[595px] pt-[17px] flex  justify-evenly'>
                    <div className='w-[79px] h-[27px] pt-[24px] pl-[23px] gap-8px flex '>
                            <div className='w-[24px] h-[24px] '>
                                💞
                            </div>
                            <div  className='w-[47px] h-[27px]'>
                                Jobs
                            </div>
                    </div>
                    <div className='w-[79px] h-[27px] pt-[24px] pl-[23px] gap-8px flex flex-row '>
                            <div className='w-[24px] h-[24px] '>
                                ✅
                            </div>
                            <div  className='w-[47px] h-[27px]'>
                                Messages
                            </div>
                    </div>

                    <div className='w-[79px] h-[27px] pt-[24px] pl-[23px] gap-8px flex flex-row'>
                            <div className='w-[24px] h-[24px] '>
                                🔥
                            </div>
                            <div  className='w-[47px] h-[27px]'>
                                Payments
                            </div>
                    </div>
                    

                </div>
                <div></div>
    </div>
  )
}

export default Topbar
