import React, { useEffect, useState, useRef } from 'react'


export default function CustomSlider({ data, cardClass, imgClass, slider_id, slider_child_id, type, route, title_class, subtitle_class, primary_text_class, hashtags_class, hide_scroll_button, noPrimaryText, routers, parent, productNavigation }) {

    let isDown = false;
    var slider = '';
    useEffect(() => {
        // router = type == 'widget' ?  routers : useRouter()
        if (slider_child_id) {
            slider = document.getElementById(slider_child_id);
            // setTimeout(() => {
            // }, 2000);
            (() => {
                slider.addEventListener('mousedown', start);
                slider.addEventListener('touchstart', start);

                slider.addEventListener('mousemove', move);
                slider.addEventListener('touchmove', move);

                slider.addEventListener('mouseleave', end);
                slider.addEventListener('mouseup', end);
                slider.addEventListener('touchend', end);
            })();
        }

    }, [])

    const sctollTo = (direction) => {
        if (slider_id && slider_child_id) {
            let custom_slider = document.getElementById(slider_id)
            let slider_div = document.getElementById(slider_child_id)
            let slider_width = custom_slider.clientWidth
            if (direction == 'next') {
                slider_div.scrollLeft += slider_width
            } else {
                slider_div.scrollLeft -= slider_width
            }
            // let nextBtn = document.getElementById('next_' + slider_id)
            // let prevBtn = document.getElementById('prev_' + slider_id)
            // if (slider_div.scrollLeft >= slider_div.clientWidth) nextBtn.classList.add('hidden')
            // else nextBtn.classList.remove('hidden')
            // if (slider_div.scrollLeft == 0) prevBtn.classList.add('hidden')
            // else prevBtn.classList.remove('hidden')
        }
    }

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    let startX = ''
    let scrollLeft = ''

    // start
    const end = () => {
        isDown = false;
        slider.classList.remove('active');
    }

    const start = (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    const move = (e) => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
    }

    return (
        <>
            {(!type || type == 'widget') && <div className='relative' id={slider_id}>
                <div className={`${hide_scroll_button && 'hidden'} slider_arrow absolute top-[40%] left-[-15px] h-[25px] w-[25px] z-10 bg-[#fff] text-black  rounded-full flex items-center justify-center  cursor-pointer md:hidden`}
                    onClick={() => sctollTo('prev')} id={'prev_' + slider_id}>
                    <img alt="Prev" src={'/icons/left-arrow.png'} width={25} height={25} ></img>
                </div>
                <div id={slider_child_id} ref={containerRef}
                    className=' overflow-auto scroll-smooth lg:flex-[0_0_calc(25%_-_15px)] scrollbar-hide md:gap-[10px] gap-[20px] flex md:p-[0px] md:w-[calc(100vw_-_41px)]'
                >
                    {data && data.map((res, index) => {
                        return (
                            // '/' + router.asPath.split('/')[1] +
                            <div key={index} className={`${cardClass} overfow-hidden`}>
                                <div className={` flex flex-col justify-between`}>
                                    <div>
                                       {res.image &&  <img src={res.image} alt="" class={imgClass}/>}
                                    </div>
                                    {(res.primary_text && res.secondary_text && !noPrimaryText) && <p className={`${primary_text_class} flex gap-2 items-center py-[5px]`}><span className={`primary_text leading-normal tracking-wider !text-[10px] line-clamp-1`}>{res.primary_text}</span> <span className="h-[10px] w-[1px] bg-[#6f6f6f]"></span> <span className='secondary_text line-clamp-1'>{res.secondary_text}</span></p>}
                                    <h4 className={`title  ${title_class ? title_class : 'line-clamp-2'}`}>{res.title ? res.title : res.item ? res.item : ''}</h4>
                                    {res.short_description && <p className={` ${subtitle_class ? subtitle_class : 'line-clamp-2'} sub_title !mt-[6px] `}>{res.short_description}</p>}
                                    {(res.sub_title || res.blog_intro) && <p className={` ${subtitle_class ? subtitle_class : 'line-clamp-2'} sub_title !mt-[6px] `}>{res.sub_title ? res.sub_title : res.blog_intro ? res.blog_intro : ''}</p>}
                                    {(res.hashtags || res.publisher) && <p className={`${hashtags_class} hashtags pt-1 line-clamp-1`}>{res.hashtags ? res.hashtags : res.publisher ? res.publisher : ''}</p>}
                                   
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`${hide_scroll_button && 'hidden'} slider_arrow absolute top-[40%] right-[-15px] h-[25px] w-[25px] z-10 bg-[#fff] text-black  rounded-full flex items-center justify-center cursor-pointer md:hidden`}
                    onClick={() => sctollTo('next')} id={'next_' + slider_id}>
                    <img alt="forward" src={'/icons/right-arrow.png'} width={25} height={25}></img>
                </div>
            </div>}
        </>
    )
}
