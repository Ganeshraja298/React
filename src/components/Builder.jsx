
import { useEffect, useState } from 'react';
import homepage from '../libs/homepage.json'
import projects from '../libs/projects.json'
import about from '../libs/about.json'
import Carousal from './common/Carousal' 
import gallery from '../libs/gallary.json'
import GridGallery from './common/Gallaery';
import Cards from '../components/common/Cards'
import List from '../components/common/List'
import CustomSlider from './common/CustomSlider'
import { Link } from 'react-router-dom';
import policy from '../libs/policy.json'
import services from '../libs/services.json'
import Testimonial from './testimonials/testimonial';
import Counter from './Counter'
import OurTeam from './OurTeam';
export default function PagePuilder ({pageName}) {
    const [pageData,setPageData] = useState(homepage)
    const [isMobile,setIsMobile] = useState()
    const [clientsSliderSerttings,setclientsSliderSerttings] = useState(false)
    const clientsSliderSerttings_web ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000   
      }
      const clientsSliderSerttings_mobile ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000   
      }
     useEffect(()=>{
        findViewport()
     getPageData(pageName)
     },[pageName])

     const findViewport=()=>{
         if(typeof window !== 'undefined') {
            window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true);
            window.innerWidth > 768 ? setclientsSliderSerttings(clientsSliderSerttings_web) : 
            setclientsSliderSerttings(clientsSliderSerttings_mobile);
         }
     }

     const getPageData = () => {
        if(pageName === '/'){
            setPageData(homepage)
        }else if(pageName === '/gallery'){
            // console.log(gallery);
            setPageData(gallery)
        }else if(pageName === '/policy'){
            // console.log(gallery);
            setPageData(policy)
        }else if(pageName === '/services'){
            console.log(services);
            setPageData(services)
        }else if(pageName === '/about'){
            console.log(about);
            setPageData(about)
        }else if(pageName === '/project'){
            console.log(projects);
            setPageData(projects)
        }
     }
     
    return ( <>
        {pageData && pageData!=="empty" && pageData.page_content.length !==0  && pageData.page_content.map((content,con_index)=>{
            return(
                
                <div key={con_index} className=''>
                      { (content.section_name && content.section_name === "Image") && <div className='min-h-[250px] lg:h-[500px] w-full'>
                       <img src={content.image} alt={content.alt} className="lg:h-[500px] h-[250px] w-full"/>
                     </div>}
                { (content.section_name && content.section_name === "Carousal") && <div>
    </div>}
                {content.section_name && (content.section_name === "Content with slider 4" || content.section_name === "Right Content Left Image" ||
                content.section_name === "Left Content Right Image") && 
                
                <div className={`${content.section_name === "Right Content Left Image" && "flex-row-reverse"} section-${con_index} lg:flex lg:items-center gap-[15px] px-[20px] py-[20px]`}>
                    <div className={`flex-1 ${content.section_name === "Right Content Left Image" ? '' : 'lg:pl-[100px]'}`}>
                        <h5 className='subtitle'>{content.sub_title}</h5>
                        {content.title && <h2 className=' md:text-[26px] font-semibold text-primary_text text-[42px] py-[15px]'>{content.title} <span className='highlight'>{content.title1} </span><span className='title'>{content.title2}</span></h2>}
                        {content.content && <p className='content'>{content.content}</p>}
                        {content.btn && <div className='py-[20px] font-25'><button className='primary_button' >{content.btn && "Explore"}</button></div> } 
                        { content.data && <List data={content.data} imgClass={'w-[30px]'} titleClass={'text-secondary_text mb-[5px]  leading-5 text-[16px] lg:w-[350px]'}/>  }
                    </div>
                    <div  style={{flex:"0 0 50%"}}>
                        <img className='text-center m-auto w-[400px]' alt={'image'+con_index} src={content.bg_image || content.left_image || content.right_image}
                         />
                    </div>
                </div>
                }
                 {content.section_name && content.section_name === "Gallery" && 
                <div className=' p-[20px] lg:w-[80%]  m-auto'>
                <GridGallery />
                </div>
                }
                {content.section_name && content.section_name === "Why Us" && 
                <div className='cardmx-[20px]'>
                 <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[20px]'>{content.title}</h2>
                 <div className='lg:flex gap-[20px] py-[20px]'>
                   
                 <Cards data={content.data}  title_class={'px-[20px]  py-[20px] text-primary_text text-[18px]'} imgClass={'h-[300px]'} cardClass={'flex-[0_0_calc(25%_-_20px)]  text-center'}/>
                 </div>
                </div>
                }
                {content.section_name && content.section_name === "Service List" && 
                <div className='bg-[#f0f8ff] py-[20px]'>
                 <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px]'>{content.title}</h2>
                <div className='lg:flex gap-[50px] justify-center py-[20px] px-[20px]'>
                <div className='card lg:min-w-[400px] md:mb-[25px] bg-[#fff]'>
                    <h5 className='text-[18px] pb-[20px] font-semibold text-primary_text'>{content.title1}</h5>
                    <List data={content.data1} imgClass={'w-[30px]'} titleClass={'text-secondary_text'}/>  
                </div>
                <div className='card lg:min-w-[400px] bg-[#fff]'>
                <h5 className='text-[18px] pb-[20px] font-semibold text-primary_text'>{content.title2}</h5>
                <List data={content.data2} imgClass={'w-[30px]'} titleClass={'text-secondary_text'}/>  
                </div> 
                </div>
                </div>
                }
                {content.section_name && content.section_name == "Images With Text" && 
                <div className='bg-[#f0f8ff] py-[20px]'>
                 <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px]'>{content.title}</h2>
                <div className='lg:flex gap-[20px] py-[20px] px-[20px] flex-wrap'>
                <Cards data={content.data}  title_class={'px-[20px]  py-[20px] text-primary_text text-[18px] font-semibold'} imgClass={'h-[300px] rounded-lg'} cardClass={'flex-[0_0_calc(25%_-_20px)]  overflow-hidden text-center'}/> 
            </div>
            </div>
                }
                {content.section_name && content.section_name === "Clients" && 
                <div className='px-[20px] py-[20px]' >                 
                    <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[20px]'>{content.title}</h2>
                   <Carousal settings_info={clientsSliderSerttings} data={content.data}  title_class={'px-[20px]  py-[20px] text-primary_text text-[18px]'} 
                   imgContainerClass={'border border-border_color ml-[20px] rounded'} imgClass={'h-[100px]  w-[100%] object-contain'} cardClass={'flex-[0_0_calc(25%_-_20px)]  text-center'}/>
                </div>
                }
               {content.section_name && content.section_name === "Custom Slider" && 
                <div className='px-[20px]'>
                    <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[10px]'>{content.title}</h2>
                    <div className='flex justify-end w-full'>
                    <Link className='flex px-[10px] py-[5px] cursor-pointer' to={'/gallery'} onClick={()=>setPageData('/gallery')}>
                        <p  className='text-primary_color text-[14px]'>View All </p> 
                        <img src="/icons/right-arrow-red.png" alt="" className='w-[20px] ml-[10px]'/> 
                        </Link>
                    </div>
                       
                <div className='lg:flex gap-[50px] justify-center py-[20px] lg:px-[20px] cursor-pointer'>
                    <CustomSlider data={content.data} slider_id={"slider_"+ con_index} slider_child_id={"slider_child_"+ con_index} 
                     cardClass={'border border-border_color rounded flex-[0_0_calc(65%_-_15px)] lg:flex-[0_0_calc(20%_-_15px)] rounded-lg overflow-hidden'} imgClass={'h-[200px] w-[100%]'}/>
                 </div>
                </div>
                }
                {content.section_name && content.section_name === "Testimonials" && 
                <div className='px-[20px] bg-[#f1ffff] pt-[20px]'>
                    <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[10px]'>{content.title}</h2>                       
                <div className='lg:flex gap-[50px] justify-center py-[40px] lg:px-[80px] cursor-pointer overflow-auto'>
                  <Testimonial data={content.data} cardClass={'lg:flex-[0_0_calc(33.33%_-_20px)]'}/>
                </div>
                </div>
                }
                 {content.section_name && content.section_name === "Counters" && 
                                 <div className='px-[20px] bg-[#f1ffff] pt-[20px] lg:pb-[20px]'>
                <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[10px]'>{content.title}</h2>                       
                <div className='lg:flex gap-[50px] justify-center md:mx-[20px] mt-[20px] lg:px-[80px] cursor-pointer overflow-auto bg-'>
                  <Counter data={content.data} cardClass={`lg:flex-[0_0_calc(25%_-_20px)] md:mb-[20px]`} title_class={'text-[26px] font-semibold'}/>
                </div>
                </div>
                }
                {content.section_name && content.section_name === "Our Team" && 
                <div className='px-[20px] bg-[#a6bfc1] pt-[20px] lg:pb-[20px] md:pb-[20px]'>
                <h2 className='text-center md:text-[26px] font-semibold text-primary_text text-[42px] py-[10px]'>{content.title}</h2>                       
                <div className='lg:flex gap-[30px] justify-center md:mx-[20px] my-[20px] lg:w-[80%] m-auto cursor-pointer flex-wrap'>
                <OurTeam data={content.data}  title_class={'text-primary_text text-[18px] font-semibold'} 
                imgClass={'h-[130px] w-[130px] rounded-full md:m-auto'} 
                cardClass={'flex-[0_0_calc(50%_-_30px)] p-[20px] bg-[#fff] lg:flex overflow-hidden items-start gap-[20px]'}/> 
                </div>
                </div>
                }
                </div>
            )
        })}
        </> );
}
