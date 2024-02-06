import { useEffect, useState } from "react";
import {Link} from  'react-router-dom'
export default function BottomTabs({ activeTab, getActiveTab,changePageName,pageName }) {
        const [is_tabs, setIs_tabs] = useState(false)
            const [tabs, setTabs] = useState([
        {
            "menu_label": "Home",
            "redirect_url": "/",
            "icon": "/bottom_tabs/home.png",
            "active_icon": "/bottom_tabs/home-red.png",
        },
        {
            "menu_label": "Projects",
            "redirect_url": "/project",
            "icon": "/bottom_tabs/verified.png",
            "active_icon": "/bottom_tabs/verified-red.png",

        },
        {
            "menu_label": "Service",
            "redirect_url": "/services",
            "icon": "/bottom_tabs/service.png",
            "active_icon": "/bottom_tabs/service-red.png",

        },
        {
            "menu_label": "Vision",
            "redirect_url": "/policy",
            "icon": "/bottom_tabs/purpose.png",
            "active_icon": "/bottom_tabs/purpose-red.png",

        },
        {
            "menu_label": "About",
            "redirect_url": "/about",
            "icon": "/bottom_tabs/users.png",
            "active_icon": "/bottom_tabs/users-red.png",

        },
    ])
    useEffect(() => {
        if (!activeTab) {
            // let route = '/'
            // let redirect_url = route[1] ? '/' + route[1] : '/'
            tabs.map(nd => {
                console.log(nd.redirect_url,pageName);
                nd.active = nd.redirect_url == pageName ? true : false 
            })
            setIs_tabs(true)
        } else {
            tabs.map(nd => {
                nd.active = nd.menu_label == activeTab.menu_label ? true : false
            })
            
        }
    }, [activeTab])

    const changeNav = (nav) => {
        getActiveTab(nav)
    }
    return (<>
        <div id='tabs'>
           
            {is_tabs && <ul className='flex items-baseline w-full bg-[#fff] py-[10px]' style={{ borderTop: '1px solid #ddd' }}>
                {tabs.map((nav, index) => {
                    return (
                        // <Link href={nav.redirect_url}>
                        <> {console.log(tabs)}
                        <Link to={nav.redirect_url} key={index} className={`flex flex-col flex-[0_0_20%] gap-[5px] justify-between cursor-pointer text-[14px] font-medium whitespace-pre text-[#858585] removeFlick     ${nav.active && 'active_nav'}`}
                            onClick={() => {changeNav(nav);changePageName(nav.redirect_url)}} style={{ border: 'none' }}>
                            <img alt={nav.menu_label} src={nav.active == true ? nav.active_icon : nav.icon} className="m-auto w-[22px] " />
                            <p className={`text-[12px] text-center ${nav.active ? 'text-primary_color' :''}`}>{nav.menu_label}</p>
                        </Link>
                        </>
                        // </Link>
                    )
                })}
            </ul>}
        </div>
    </>);
}

