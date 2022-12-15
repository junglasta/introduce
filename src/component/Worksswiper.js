import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Worksswiper = () => {
    const swiperinfo = [
        {
        worktitle : '리액트광고웹앱',
        worktime : '4주',
        co : '단독작업',
        app : ['illust','photoshop','v-code'],
        cls : 'react'
    },
    {
        worktitle : '부트스트랩 퍼블리싱',
        worktime : '1주',
        co : '단독작업',
        app : ['v-code'],
        cls : 'boot'
    },
    {
        worktitle : 'CMS 그누보드',
        worktime : '4주',
        co : '단독작업',
        app : ['illust','photoshop','v-code'],
        cls : 'sir'
    }
];

    return(
        <Swiper className='workSection'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {
            swiperinfo.map( ( item, index ) => {
                    return(
                    <SwiperSlide className={item.cls} key={'sw'+index}>{item.worktitle}</SwiperSlide>
                    )
                }
            )
            
            }
            
        </Swiper>
    )
}

export default Worksswiper;