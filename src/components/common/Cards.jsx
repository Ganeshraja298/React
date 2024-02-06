import React from 'react'
// import styles from '@/styles/Cards.module.scss'
// import { check_Image } from '@/libs/api'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import Tags from './Tags'
// import ImageLoader from '../ImageLoader';

export default function Cards({ title_class,titleOnly, imgClass,noPrimaryText, data, isHome=undefined, check, contentHeight, flex, isBorder, cardClass}) {
  return (
    <>
      {data && data.map((res, index) => {
        return (
          // '/' + router.asPath.split('/')[1] + line-clamp-1
          <div key={res.title ? res.title : index}  className={`${flex} cursor-pointer ${isBorder && 'border rounded-[10px]'} ${cardClass}`} >
            <div className={`${isBorder && 'p-[10px] '} ${contentHeight}  flex justify-between flex-col`}>
              {((res.primary_text && res.secondary_text) && !noPrimaryText) && <p className='flex gap-2  items-center'><span className='primary_text fnt_13 line-clamp-1'>{res.primary_text || res.type}</span> <span className='h-[10px] w-[1px] bg-[#6f6f6f]'></span> <span className='secondary_text line-clamp-1'>{res.secondary_text}</span></p>}
              {(res.image) && <img className={imgClass} src={res.image}/>}
              {(!res.primary_text && res.type) && <p className='flex gap-2 '><span className='primary_text fnt_13'>{res.type}</span></p>}
              {res.title && <h4 className={`${title_class} lg:min-h-[40px] ${isHome ? '' : 'mt-2'} `}>{res.title ? res.title : ''}</h4>}
              {(res.sub_title || res.blog_intro) && !titleOnly && <p className={`sub_title pt-1 ${(isHome && res.title) ? 'line-clamp-1 lg:pt-[10px]' : (isHome && !res.title) ? 'line-clamp-2' : 'line-clamp-2'}`}>{ res.blog_intro ? res.blog_intro : res.sub_title ? res.sub_title : ''}</p>}
              {/* {((res.publisher) && !noPrimaryText) && <p className={`hashtags pt-[10px]`}>{res.hashtags ? res.hashtags : res.publisher ? res.publisher : ''}</p>} */}
              {((res.hashtags) && !noPrimaryText) && <p className={`light_text pt-[10px]`}>{res.hashtags ? res.hashtags : ''}</p>}
            </div>
          </div>
        )
      })}
    </>
  )
}
