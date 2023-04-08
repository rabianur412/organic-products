import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = () => {
  return (
    <div className="container mx-auto mb-16 py-10" >
        <div className="flex flex-col items-center">
            <Title addClass="text-[40px]" >Organik & Ürünler</Title>
          <div className='mt-10 flex items-center gap-3'>
            <button className="px-6 py-2 text-[20px] bg-primary  font-dosis  hover:bg-black hover:text-white ">Tümü</button>
            <button className="px-6 py-2 text-[20px] bg-primary  font-dosis hover:bg-black hover:text-white ">En popüler</button>
            <button className="px-6 py-2 text-[20px] bg-primary  font-dosis hover:bg-black hover:text-white">İndirimdekiler</button>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 py-10">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default MenuWrapper