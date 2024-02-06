import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
// import header from '@/styles/Header.module.scss'
// import Link from 'next/link'
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { useSelector, useDispatch } from 'react-redux';

export default function SideBar({ data, close, navbar, emit_item }) {
    if (!data) {
        data = [
            {
                name: 'Home',
                route: '/',
            },
            {
                name: 'Services',
                route: '/services',
            },
            {
                name: 'Projects',
                route: '/projects',
            },
            {
                name: 'About Us',
                route: '/about',
            },
            {
                name: 'Our Vision & Policy',
                route: '/policy',
            },
            {
                name: 'Gallary',
                route: '/gallary',
            },
        ]
    }
    const [valid, setValid] = useState(false)
    const [member, setMember] = useState(false);
    const ref = useRef(null);
    const [validator, setValidator] = useState(false)


    useEffect(() => {

        const handleClickOutside = (event) => {
            // let el = document.getElementById('side')?.classList;
            // let classs = (el && el != null) && Array.from(el);
            // let out = classs && classs.find(res => res == 'sideActive');
            if (ref.current && !ref.current.contains(event.target) && !navbar) {
                // el.remove('sideActive')
                close()
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [])




    // const route = async (type) => {
    //     if (type == 'login') {
    //         router.push('/login');
    //         close()
    //     } else if (type == 'subscribe') {
    //         router.push('/membership');
    //         close()
    //     }
    // }

    const change_nav = (item) => {
        // console.log(item);
        close()
    }

    // const myAccount = () => {
    //     router.push('/profile?my_account=')
    //     close()
    // }




    return (
        <>
            {(data && data.length != 0 && navbar) && <div className='bg-[#1d050545] w-full h-full w-full z-[100] fixed  top-0 bottom-0 '>
                {/* && navbar */}
                <div id='side' ref={ref} className={`divide-y bg-[#fff] w-[75%] h-full fixed z-[11] top-0 bottom-0 `}>

                    <div className='flex gap-[10px] items-center p-4' >
                        {/* <div style={{ flex: '0 0 40px' }}>
                            <img src={'/profit.svg'} height={40} width={40} alt={'profile'} />
                        </div> */}
                        <div className='w-full'>
                            <p className='text-[18px] font-semibold' style={{ color: '#000' }} >Welcome!</p>
                        </div>

                    </div>

                    <div className='p-4'>
                        {data.map((res, ind) => {
                            return (
                                <div key={ind} className='pb-[10px]'>
                                    <Link  to={res.route}>
                                        {res.name}
                                    </Link>
                                </div>

                            )
                        })
                        }
                    </div>

                    <div className='absolute bottom-[10px] w-[90%] pt-[10px]'>
                        <div className='text-[13px] color-[#595959] text-center'>
                            Stay informed and log in to access the latest news and updates.
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
