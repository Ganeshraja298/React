import React from 'react'

export default function List({ imgFlex, hash_bg, contentWidth, primary_pb, line, data, isTop, isReverse, borderRadius, titleClass, imgWidth, isBB, flex, isMp, fullWidth, noWidth, tittleOnly,imgClass, isDesc, descLine, mb }) {
    function navigate(event, res) {
        event.stopPropagation();
        // '/' + router.asPath.split('/')[1] +
    }

    return (
        <>
            {data && data.map((res, index) => {
              
                return (
                    // style={{flex:flex}}
                    <div key={res.title ? res.title : index} onClick={($event) => navigate($event, res)} 
                    className={`${flex} flex cursor-pointer gap-[15px] items-center ${(index != data.length - 1 && !isMp) ? 'pb-[10px]' : (isMp && index != data.length - 1) ?
                        'lg:mb-[20px] lg:pb-[20px] md:pb-[10px] md:mb-[10px]' : ''} ${mb && index != data.length - 1 ? 'lg:mb-[10px]' : ''} relative  ${(isReverse) ? 'flex-row-reverse items-center  mb-[10px] justify-between' : ''} ${(isReverse && index != data.length - 1) ?
                            'border_bottom' : ''} ${(isBB && index != data.length - 1) && 'border_bottom mb-[10px]'}`}>
                         { res.image && <div className={`${imgClass}`}>
                            <img src={res.image} alt="" />
                            </div>}       
                        {((res.primary_text || res.secondary_text) && isTop) && <p className={`flex line-clamp-1   items-center absolute`}><span className='primary_text pr-[8px] line-clamp-1'>{res.primary_text}</span> <span className='h-[10px] w-[1px]  bg-[#6f6f6f]'></span> <span className='pl-[8px] line-clamp-1 secondary_text'>{res.secondary_text}</span></p>}
                        <div className={`${(!fullWidth && !isReverse) && ''} ${contentWidth} flex flex-col leading-[1] ${isTop && 'pt-[25px]'}`}>
                            {((res.primary_text || res.secondary_text) && !isTop) && <p className={`flex items-center line-clamp-1 ${primary_pb}`}><span className='primary_text pr-[8px] line-clamp-1 '>{res.primary_text}</span> <span className='h-[10px] w-[1px] bg-[#6f6f6f] '></span> <span className='secondary_text line-clamp-1 pl-[8px] '>{res.secondary_text}</span></p>}
                            {res.title && <h6 className={`${titleClass}  pt-[5px]}`}>{res.title ? res.title : ''}</h6>}
                            {((res.sub_title || res.blog_intro) && !tittleOnly) && <p className={`sub_title pt-[5px] ${line ? line : 'line-clamp-2'}`}>{res.sub_title ? res.sub_title : res.blog_intro ? res.blog_intro : ''}</p>}
                            {/* {((res.hashtags || res.publisher) && !tittleOnly) && <p className={`hashtags  ${hash_bg ? hash_bg : 'pt-[5px]'} font-[500]`}>by {res.hashtags ? res.hashtags : res.publisher ? res.publisher : ''}</p>} */}
                            {(isDesc && res.description) && <div className={`${descLine ? descLine : ''} sub_title innertag pt-[5px] line-clamp-1`} dangerouslySetInnerHTML={{ __html: res.description }} />}
                        </div>
                    </div>
                )
            })}
        </>
    )
}
