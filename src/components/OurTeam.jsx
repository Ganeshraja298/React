import React from 'react'
import { Link } from 'react-router-dom'
// import styles from '@/styles/Cards.module.scss'
// import { check_Image } from '@/libs/api'
// import Image from 'next/image'
// import { useRouter } from 'next/router'
// import Tags from './Tags'
// import ImageLoader from '../ImageLoader';

export default function OurTeam({ title_class,titleOnly, imgClass,noPrimaryText, data, isHome=undefined, check, contentHeight, flex, isBorder, cardClass}) {
  return (
    <>
      {data && data.map((res, index) => {
        return (
          // '/' + router.asPath.split('/')[1] + line-clamp-1
          <div key={res.title ? res.title : index}  className={`${cardClass} md:mb-[20px]`} >
            <div className='flex-[0_0_130px] md:text-center'>
            {(res.image) && <img className={imgClass} src={res.image}/>}
            </div>
            <div className={`${isBorder && 'p-[10px] flex-1'} ${contentHeight}  flex justify-between flex-col md:text-center`}>
              {((res.primary_text && res.secondary_text) && !noPrimaryText) && <p className='flex gap-2  items-center'><span className='primary_text fnt_13 line-clamp-1'>{res.primary_text || res.type}</span>
               </p>}
              {(res.sub_title) && <p className={`text-[13px] text-secondary_text md:mt-[20px]`}>{  res.sub_title }</p>}              
              {res.title && <h4 className={`font-semibold my-[5px] text-[18px]`}>{ res.title}</h4>}
              {res.description && <h4 className={`text-[#4c4c4c] text-[14px] leading-5`}>{ res.description }</h4>}
              {res.social_links && <div className='flex gap-[20px] my-[20px] md:justify-center'>                  
                    {res.social_links.instagram && <Link to={res.social_links.instagram}><img src="/social_icons/instagram.png" alt="instagram" className='w-[22px] h-[22px]'/></Link> }              
                    {res.social_links.linkedin && <Link to={res.social_links.linkedin}><img src="/social_icons/linkedin.png" alt="linkedin" className='w-[20px] h-[20px]'/></Link> }              
                    {res.social_links.facebook && <Link to={res.social_links.facebook}><img src="/social_icons/facebook.png" alt="facebook" className='w-[20px] h-[20px]'/></Link> }              
                    {res.social_links.twitter && <Link to={res.social_links.twitter}><img src="/social_icons/twitter.png" alt="twitter" className='w-[20px] h-[20px]'/></Link> }              
                </div>}
            </div>
          </div>
        )
      })}
    </>
  )
}
