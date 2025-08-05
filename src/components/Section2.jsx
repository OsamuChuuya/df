import React from 'react'
import { useTranslation } from 'react-i18next'
import foodphoto from '../assets/foodphoto.png'
import Icon from '../assets/Icon.png'
import sandwich from '../assets/sandwich.png'
import Swipercard from './Swipercard'
import pizza from '../assets/pizza.png'
import burger2 from '../assets/burger2.png'
import noodles from '../assets/noodles.png'
import steak from '../assets/steak.png'
import meet from '../assets/meet.png'

const Section2 = () => {
  const { t } = useTranslation()

  return (
    <div className='w-[1500px] mx-auto bg-white text-black pt-[80px]'>
      <div>
        <h1 className='font-bold text-4xl text-center'>
          {t('section2.popularTitle')}
        </h1>

        <div className='flex items-center w-[1440px] h-[470px] mx-auto mt-[88px]'>
          <Swipercard />
        </div>

        <div className='mt-[80px] pt-[82px] pb-[55px] bg-[#FEFAF1]'>
          <h1 className='font-bold text-4xl text-center'>
            {t('section2.searchTitle')}
          </h1>
<div className='w-[1400px] h-[270px] mx-auto mt-[88px] flex gap-[34px] items-center'>
  <div className='w-[218px] h-[270px]'>
    <img src={pizza} alt="pizza" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.pizza')}
    </p>
  </div>

  <div className='w-[218px] h-[270px]'>
    <img src={burger2} alt="burger" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.burger')}
    </p>
  </div>

  <div className='w-[218px] h-[270px]'>
    <img src={noodles} alt="noodles" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.noodles')}
    </p>
  </div>

  <div className='w-[218px] h-[270px]'>
    <img src={foodphoto} alt="subsandwich" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.subsandwich')}
    </p>
  </div>

  <div className='w-[218px] h-[270px]'>
    <img src={foodphoto} alt="chowmein" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.chowmein')}
    </p>
  </div>

  <div className='w-[218px] h-[270px]'>
    <img src={steak} alt="steak" />
    <p className='font-bold mt-[26px] text-2xl text-center'>
      {t('section2.food.steak')}
    </p>
  </div>
</div>

        </div>
      </div>

      <div className='w-full h-[456px] bg-[#FEEFD0] px-[137px] pt-[130px]'>
<div className='bg-white w-[1230px] p-[55px] h-[246px] flex items-center gap-[100px] rounded-4xl shadow-[0px_27px_82px_0px_#FFAE0047]'>
  <div className='w-[316px] flex gap-[30px] items-center h-[136px]'>
    <img src={Icon} alt="" />
    <h3 className='w-[130px] h-[84px] text-[35px] font-bold text-orange-500'>
      {t('section2.quickDelivery')}
    </h3>
  </div>

  <div className='w-[316px] flex gap-[30px] items-center h-[136px]'>
    <img src={Icon} alt="" />
    <h3 className='w-[130px] h-[84px] text-[35px] font-bold text-orange-500'>
      {t('section2.quickDelivery')}
    </h3>
  </div>

  <div className='w-[316px] flex gap-[30px] items-center h-[136px]'>
    <img src={Icon} alt="" />
    <h3 className='w-[130px] h-[84px] text-[35px] font-bold text-orange-500'>
      {t('section2.quickDelivery')}
    </h3>
  </div>
</div>

      </div>

      <div className='w-full'>
        <div className='w-[1380px] h-[1107px]  mx-auto my-[80px]'>
          <div className='w-full flex h-[512px]'>
            <div className='h-[512px] w-[519px] p-[56px]'>
              <h2 className='font-bold text-4xl mb-[19px] mt-[63px]'>
                {t('section2.dealsTitle1')} <span className='text-[#FFB30E]'>{t('section2.dealsTitle2')}</span>
              </h2>
              <p className='font-semibold text-[18px] mb-[111px]'>
                {t('section2.dealsText1')}
              </p>
              <button className='bg-[#FF8A00] w-[407px] h-[60px] rounded-[8px] text-white font-extrabold text-[18px]'>
                {t('section2.proceed')}
              </button>
            </div>
            <img src={sandwich} alt="" className='w-[861px]' />
          </div>

          <div className='w-full flex mt-[80px] h-[512px]'>
            <img src={meet} alt="" className='w-[861px]' />
            <div className='h-[512px] w-[519px] p-[56px]'>
              <h2 className='font-bold text-4xl mb-[19px] mt-[63px]'>
                {t('section2.dealsTitle3')} <br /> <span className='text-[#FFB30E]'>{t('section2.dealsTitle4')}</span>
              </h2>
              <p className='font-semibold text-[18px] mb-[94px]'>
                {t('section2.dealsText2')}
              </p>
              <button className='bg-[#FF8A00] w-[407px] h-[60px] rounded-[8px] text-white font-extrabold text-[18px]'>
                {t('section2.proceed')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
