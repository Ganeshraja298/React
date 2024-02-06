import { useState } from 'react'
import website from '../libs/homepage.json'
export default function Footer() {
    const [footerInfo, setFooterInfo] = useState(website.footer_content)
    // console.log(footerInfo);
    return (
        <>
            <div className='bg-[#f4f4f480] pb-[25px]'>
                {footerInfo &&
                    <div className="min-h-[200px] lg:flex">
                        {footerInfo.items && footerInfo.items.length != 0 && footerInfo.items.map((footer, footer_index) => {
                            let section_name = footer.items[0].section_name
                            let column_data = footer.items[0]
                            if (footer.column_index == footer_index && section_name == "Menu") {
                                return (
                                    <div key={footer_index} style={{ flex: `0 0 ${100 / footerInfo.items.length}%` }} className={`px-[20px] py-[5px] lg:p-[25px]`}>
                                        <p className='font-bold mb-[10px]'>{column_data.title}</p>
                                        {column_data.menus && column_data.menus.length != 0 && column_data.menus.map((item, item_index) => {
                                            return (
                                                <div key={item_index} className='mb-[10px]'>
                                                    <a href={item.redirect_url} className='text-[14px]'>{item.menu_label}</a>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            } else if (footer.column_index == footer_index && section_name == "Footer About") {
                                return (
                                    <div key={footer_index} style={{ flex: `0 0 ${100 / footerInfo.items.length}%` }} className={`px-[20px] py-[5px] lg:p-[25px]`}>

                                        {(column_data.logo || column_data.image) && <img className='pt-[10px]' src={column_data.logo || column_data.image}
                                            height={50} width={50} />}
                                        {(column_data.address) && <div className='py-[10px] flex gap-[10px] text-[14px]'><p className='w-[20px]'><img src={column_data.address_icon} alt="" /> </p> <p className='font-semibold'>{column_data.address}</p> </div>}
                                        {(column_data.phone || column_data.mobile) && <div className='py-[10px] flex gap-[10px] text-[14px]'><p className='w-[20px]'><img src={column_data.mobile_icon} alt="" /></p>
                                            <a href={'tel:' + column_data.mobile} className='font-semibold '>{column_data.phone || column_data.mobile}</a> </div>}
                                        {column_data.email && <div className='py-[10px] flex gap-[10px] text-[14px]'><p className='w-[20px]'><img src={column_data.email_icon} alt="" /></p>  <p className='font-semibold'>{column_data.email}</p></div>}
                                        {/* {column_data.content && <p className='py-[5px] text-[14px]'>{column_data.content}</p>} */}

                                    </div>
                                )
                            } else if (footer.column_index == footer_index && section_name == "Social Links") {
                                return (
                                    <div key={footer_index} style={{ flex: `0 0 ${100 / footerInfo.items.length}%` }} className={`px-[20px] py-[5px] lg:p-[25px]`}>
                                        <p className='font-bold mb-[10px]'>{section_name}</p>
                                        {column_data.social_links && column_data.social_links.length != 0 && column_data.social_links.map((link, link_index) => {
                                            return (<a href={link.link_url} key={link_index} className='flex items-center gap-[10px] mb-[10px] text-[14px]'>
                                                <img src={link.icon} height={20} width={20} />
                                                <span className='text-[14px]'>{link.type}</span>
                                            </a>)
                                        })}
                                    </div>
                                )
                            }

                        })
                        }
                    </div>
                }
                {/* <div className='text-center'>
            <p dangerouslySetInnerHTML={{ __html: footerInfo.cp_fc_content}}></p>
            <p dangerouslySetInnerHTML={{ __html: footerInfo.cp_sc_content}}></p>
            </div> */}
            </div>
        </>
    )
}