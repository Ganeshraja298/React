import React from 'react'
// import styles from '@/styles/Cards.module.scss'
// import { check_Image } from '@/libs/api'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import Tags from './Tags'
// import ImageLoader from '../ImageLoader';

export default function Counter({ title_class, data, isHome=undefined, contentHeight, flex, isBorder, cardClass}) {
  return (
    <>
      {data && data.map((res, index) => {
        return (
          // '/' + router.asPath.split('/')[1] + line-clamp-1
          <div key={res.title ? res.title : index}  className={`${res.class} rounded-lg text-center p-[20px] ${isBorder && 'border rounded-[10px]'} ${cardClass}`} >
            <div className={`${isBorder && 'p-[10px] '} ${contentHeight}  flex justify-between flex-col`}>
              {res.count && <p className={`text-[42px] font-bold text-Primary_text`}>{res.count}+</p>}
              {res.title && <h4 className={`${title_class}  text-Primary_text lg:min-h-[40px] ${isHome ? '' : 'mt-2'} `}>{res.title ? res.title : ''}</h4>}
            </div>
          </div>
        )
      })}
    </>
  )
}
