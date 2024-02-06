
export default function Testimonial({data,cardClass}) {

    return (
        <>
           {data && data.map(((testimonial,index)=>(
            <div className={`${cardClass} relative shadow-lg bg-[#fff] my-[10px] p-[20px] p-[20px] pt-[40px] rounded-lg text-center md:mb-[50px]`}>
                {testimonial.image && 
                <div className='absolute left-[45%] md:left-[42%] top-[-30px] rounded-full bg-[#fff] z-1 w-[65px] h-[65px] rounded-full
                flex items-center justify-center border-4 border-[#f1ffff]'>
                    <img src={testimonial.image} alt="" className='w-[60px] h-[60px] rounded-full '/></div> }
                {testimonial.title && <p className='mt-[30px] font-semibold'>{testimonial.title}</p>}
                {testimonial.description && <p className='text-secondary_text font-semibold '>{testimonial.description}</p>}
                                
                <div className='bg-[#fff] z-1 mt-[30px] rounded-full w-full text-center
                flex items-center justify-center'>
                    <img src={'/icons/quote.png'} alt="" className='w-[40px]'/></div> 
                {testimonial.content && <p className='mt-[30px] text-[15px] text-primary_text font-semibold'>{testimonial.content}</p>}

            </div>
           )))}
        </>
    )
}