import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const sliderImageUrl = [
  //First image url
  {
    url:
      "https://img.freepik.com/premium-vector/flat-design-interior-website-cover-with-social-media-banner_252008-1402.jpg"
  },
  {
    url:
      "https://i.fbcd.co/products/resized/resized-750-500/interior-design-facebook-cover-banner-template-01-0d41aff226582f57b6c8f15f3aaec090711f2c570e2a2d996249ce78febc6a71.jpg"
  },
  //Second image url
  {
    url:
      "https://thumbs.dreamstime.com/z/interior-design-cartoon-web-banner-home-kitchen-cafe-appliances-cooking-modern-furniture-served-table-near-large-213311814.jpg"
  },
  //Third image url
  {
    url:
      "https://img.freepik.com/free-psd/interior-design-horizontal-banner_23-2148968338.jpg"
  },

  //Fourth image url

];

const Carousal = ( {data,settings_info, imgContainerClass,cardClass, imgClass, slider_id, slider_child_id, type, route, title_class, subtitle_class, primary_text_class, hashtags_class, hide_scroll_button, noPrimaryText, routers, parent, productNavigation}) => {
  console.log(settings_info);
  var settings = settings_info ? settings_info : {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000   
  };
  return (
    <div className="parent">
      <Slider {...settings} >
      {data && data.map((res, index) => {
                        return (
                            // '/' + router.asPath.split('/')[1] +
                            <div key={index} className={`${cardClass} overfow-hidden`}>
                                <div className={` flex flex-col justify-between`}>
                                    <div className={imgContainerClass}>
                                       {res.image &&  <img src={res.image} alt="" className={imgClass}/>}
                                    </div>
                                    {(res.primary_text && res.secondary_text && !noPrimaryText) && <p className={`${primary_text_class} flex gap-2 items-center py-[5px]`}>
                                    <span className={`primary_text leading-normal tracking-wider !text-[10px] line-clamp-1`}>{res.primary_text}</span> <span className="h-[10px] w-[1px] bg-[#6f6f6f]"></span> <span className='secondary_text line-clamp-1'>{res.secondary_text}</span></p>}
                                    {res.title && <h4 className={`title  ${title_class ? title_class : 'line-clamp-2'}`}>{res.title ? res.title : ''}</h4>}
                                    {res.short_description && <p className={` ${subtitle_class ? subtitle_class : 'line-clamp-2'} sub_title !mt-[6px] `}>{res.short_description}</p>}
                                    {(res.sub_title || res.blog_intro) && <p className={` ${subtitle_class ? subtitle_class : 'line-clamp-2'} sub_title !mt-[6px] `}>{res.sub_title ? res.sub_title : res.blog_intro ? res.blog_intro : ''}</p>}
                                    {(res.hashtags || res.publisher) && <p className={`${hashtags_class} hashtags pt-1 line-clamp-1`}>{res.hashtags ? res.hashtags : res.publisher ? res.publisher : ''}</p>}
                                   
                                </div>
                            </div>
                        )
                    })}
        {/* {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider image_slider_class" key={index} >
              <img src={imageUrl.url} alt="interior" />
            </div>
          );
        })} */}
      </Slider>
    </div>
  );
};
export default Carousal;

// swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"