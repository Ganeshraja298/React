import React from "react";
// import ImageGallery from "react-image-gallery";
// import ImageGallery from "../../assets/gallary/IMG-20231018-WA0003.jpg";
import { Gallery } from "react-grid-gallery";


export default function GridGallery ({data}) {
    console.log(data);
    const images = [
        {
           src: "/gallary/IMG-20231018-WA0003.jpg",
           width: 300,
           height: 174,
           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: "/gallary/IMG-20231018-WA0004.jpg",
           width: 320,
           height: 212,
           tags: [
              { value: "Ocean", title: "Ocean" },
              { value: "People", title: "People" },
           ],
           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "/gallary/IMG-20231018-WA0005.jpg",
           width: 320,
           height: 212,
        },{
            src: "/gallary/IMG-20231018-WA0005.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0005.jpg",
            width: 320,
            height: 212,
         },{
            src: "gallary/IMG-20231018-WA0006.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0007.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0009.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0010.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0011.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0012.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0013.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0014.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0015.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0016.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0017.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0018.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0019.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0020.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0021.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0022.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0023.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0024.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0025.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0026.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0027.jpg",
            width: 320,
            height: 212,
         },{
            src: "/gallary/IMG-20231018-WA0028.jpg",
            width: 320,
            height: 212,
         },
     ];
    return(
        <>  
           <Gallery images={images} originalClass= {" h-[80vh] w-[80%]"}  ororiginalHeight={"w-[80vh]"}iginalWidth={"w-[100px]"}/>
        </>
    )
}

