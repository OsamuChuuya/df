import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useTranslation } from 'react-i18next'
import pan from '../assets/pan.png'
import sand from '../assets/sand.png'
import wich from '../assets/wich.png'
import burger from '../assets/burger.png'
const Swipercard = () => {
  const { t } = useTranslation()

  const cards = [
    {
      title: 'Cheese Burger',
      place: 'Burger Arena',
      price: '$3.88',
      img: burger,
    },
    {
      title: "Toffee's Cake",
      place: 'Top Sticks',
      price: '$4.00',
      img: pan,
    },
    {
      title: 'Dancake',
      place: 'Cake World',
      price: '$1.99',
      img: burger,
    },
    {
      title: 'Crispy Sandwitch',
      place: 'Fastfood Dine',
      price: '$3.00',
      img: sand,
    },
    {
      title: 'Thai Soup',
      place: 'Foody man',
      price: '$2.79',
      img: wich,
    },
    {
      title: 'Thai Soup',
      place: 'Foody man',
      price: '$2.79',
      img: pan,
    },
  ]

  return (
    <div>
      <div className='flex items-center gap-[16px] w-[1440px] h-[470px]  mx-auto'>
        <Swiper
          modules={[Navigation]}
          navigation
        //   spaceBetween={16}
          slidesPerView={5}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className='w-[283px] h-[469px] '>
                <img src={card.img} alt="" />
                <h3 className='mt-[16px] ml-1 font-bold text-2xl mb-[8px]'>{card.title}</h3>
                <p className='text-[#FFB30E] text-2xl font-normal ml-3 mb-[8px]'>{card.place}</p>
                <p className='font-bold text-2xl ml-1 mb-[0px]'>{card.price}</p>
                <button className='bg-[#F17228] rounded-[8px] w-[283px] h-[60px] text-white font-bold text-[18px]'>Order Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Swipercard
