import React from 'react'
import logo from '../assets/LOGO.png'
import ramen from '../assets/ramen.png'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className='w-[1500px] bg-white mx-auto '>
      <nav className='flex items-center py-[20px] px-3.5 justify-between h-[80px]'>
        <img src={logo} alt="Logo" />
        <div className='flex items-center gap-5'>
          <select
            className='w-[100px] text-black text-center h-[41px] shadow-[0px_4px_4px_0px_#00000040]'
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">Uzbek</option>
          </select>
          <button className='w-[118px] h-[46px] bg-white shadow-[0px_5px_10px_0px_#FFAE0042]  text-orange-500'>
            {t('header.login')}
          </button>
        </div>
      </nav>

      <div className='flex items-center h-[661px] bg-amber-400 px-[40px]'>
        <div>
          <h1 className='text-white font-bold text-[88px] mt-[15px] mb-[15px]'>
            {t('header.title')}
          </h1>
          <p className='font-normal text-2xl'>
            {t('header.description')}
          </p>

          <div className='w-[800px] bg-white mt-[32px] py-[24px] px-[24px] rounded-2xl h-[191px]'>
            <div className='flex gap-4 w-full'>
              <button className='bg-[#F172281A] w-[140px] h-[38px] rounded-[8px] text-[#F17228] font-bold'>
                {t('header.delivery')}
              </button>
              <button className='bg-[#7262591a] w-[140px] h-[38px] rounded-[8px] text-[#757575] font-bold'>
                {t('header.pickup')}
              </button>
            </div>

            <div className='flex gap-[16px] items-center pt-[40px]'>
              <input
                type="text"
                placeholder={t('header.placeholder')}
                className='w-[593px] text-black p-2 bg-[#F5F5F5] h-[49px]'
              />
              <button className='bg-[#F65900] w-[188px] text-white h-[60px] font-bold text-[18px] rounded-[10px]'>
                {t('header.find')}
              </button>
            </div>
          </div>
        </div>

        <img src={ramen} alt="Ramen" className='mt-[170px] w-[600px] h-[500px]' />
      </div>
    </div>
  )
}

export default Header
