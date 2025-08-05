import React from 'react'
import { useTranslation } from 'react-i18next'
import Food from '../assets/Food.png'
import Icons from '../assets/Icons.png'
import soup from '../assets/soup.png'
import salad from '../assets/salad.png'

const Section1 = () => {
  const { t } = useTranslation()

  return (
    <div className='w-[1500px] bg-white  text-black mx-auto  pt-[80px]'>
<div className='flex items-center gap-[16px]  px-2'>
  <div>
    <img src={Food} alt="" />
    <h3 className='font-bold mt-6 mb-[14px]'>{t('section1.productTitle')}</h3>
    <button className='bg-[#F172281A] w-[204px] h-[42px] rounded-[8px] text-[#F17228] font-bold'>
      {t('section1.remaining')}
    </button>
  </div>

  <div>
    <img src={salad} alt="" />
    <h3 className='font-bold mt-6 mb-[14px]'>{t('section1.productTitle')}</h3>
    <button className='bg-[#F172281A] w-[204px] h-[42px] rounded-[8px] text-[#F17228] font-bold'>
      {t('section1.remaining')}
    </button>
  </div>

  <div>
    <img src={salad} alt="" />
    <h3 className='font-bold mt-6 mb-[14px]'>{t('section1.productTitle')}</h3>
    <button className='bg-[#F172281A] w-[204px] h-[42px] rounded-[8px] text-[#F17228] font-bold'>
      {t('section1.remaining')}
    </button>
  </div>

  <div>
    <img src={soup} alt="" />
    <h3 className='font-bold mt-6 mb-[14px]'>{t('section1.productTitle')}</h3>
    <button className='bg-[#F172281A] w-[204px] h-[42px] rounded-[8px] text-[#F17228] font-bold'>
      {t('section1.remaining')}
    </button>
  </div>
</div>


      <div className=" mt-[80px] bg-[linear-gradient(180deg,_rgba(255,206,103,0.22)_-42.47%,_rgba(253,237,202,0)_100%)] px-[88px] pt-[80px]">
        <h2 className='font-bold text-4xl text-center text-[#F17228]'>{t('section1.howTitle')}</h2>

    <div className='w-[1324px]  mt-[71px] flex gap-[32px] h-[239px]'>
      <div className='w-[307px] h-[239px]'>
        <img src={Icons} alt="" className='h-[142px] w-[112px] mx-auto' />
        <h3 className='font-bold text-center text-2xl'>{t('section1.cardTitle')}</h3>
        <p className='text-center w-full'>{t('section1.cardText')}</p>
      </div>

      <div className='w-[307px] h-[239px]'>
        <img src={Icons} alt="" className='h-[142px] w-[112px] mx-auto' />
        <h3 className='font-bold text-center text-2xl'>{t('section1.cardTitle2')}</h3>
        <p className='text-center w-full'>{t('section1.cardText')}</p>
      </div>

      <div className='w-[307px] h-[239px]'>
        <img src={Icons} alt="" className='h-[142px] w-[112px] mx-auto' />
        <h3 className='font-bold text-center text-2xl'>{t('section1.cardTitle3')}</h3>
        <p className='text-center w-full'>{t('section1.cardText')}</p>
      </div>

      <div className='w-[307px] h-[239px]'>
        <img src={Icons} alt="" className='h-[142px] w-[112px] mx-auto' />
        <h3 className='font-bold text-center text-2xl'>{t('section1.cardTitle4')}</h3>
        <p className='text-center w-full'>{t('section1.cardText')}</p>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Section1
