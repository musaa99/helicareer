import React from 'react'
import andriod from "../asset/andriod.svg"

const Main = () => {
  return (
    <div className='flex'>
        {/* <div className='text-start'>11/11/2022</div>

        <div className='flex '>
            <p className='bg-[red] mr-[20px]'> hello</p>
            <div className='flex justify-evenly'>

            <div className='bg-[blue]'>Joe John</div>
            <div className='bg-[blue]'>Status</div>
            <div className='bg-[blue]'>Type</div>
            </div>
        </div> */}
        <div className='text-start'>11/11/2022
        </div>
        <div className='w-[]'>
            <img src={andriod} alt="" />
        </div>

        <div>
        </div>
    </div>
  )
}

export default Main