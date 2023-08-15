// // import React from 'react';
// // import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// // import '../cssComponents/slider.css'

// // const PictureSlider = () => {
// //     const settings = {
// //         slidesToShow: 6,
// //         slidesToScroll: 1,
// //         autoplay: true,
// //         autoplaySpeed: 0,
// //         speed: 8000,
// //         pauseOnHover: false,
// //         cssEase: 'linear'
// //     };

// //     return (
// //         <div id="gallery">
// //             <Slider {...settings}>
// //                 {/* <div><img src="image1.jpg" alt="Image 1" /></div>
// //                 <div><img src="image2.jpg" alt="Image 2" /></div> */}
// //                 {/* Add more image divs */}
// //                 <div>
// //                 <img src="https://source.unsplash.com/_C5zsV_p-YI/900x900"/>
// //   <img src="https://source.unsplash.com/58WRkqcAn9o/900x900"/>
// //   <img src="https://source.unsplash.com/9z-veIxii6k/900x900"/>
// //   <img src="https://source.unsplash.com/AwnggmGaFms/900x900"/>
// //   <img src="https://source.unsplash.com/Bi0atWiKP-4/900x900"/>
// //   <img src="https://source.unsplash.com/YeOMRwgvPv4/900x900"/>
// //   <img src="https://source.unsplash.com/3cNc1U7nJcs/900x900"/>
// //   <img src="https://source.unsplash.com/mNOaXIjJkok/900x900"/>
// //   <img src="https://source.unsplash.com/pz_hAv6ER7c/900x900"/>
// //   <img src="https://source.unsplash.com/oqmIM9bkAWQ/900x900"/>
// //   <img src="https://source.unsplash.com/Sjk38bu7VXg/900x900"/>
// //   <img src="https://source.unsplash.com/9jsV5uKbAEM/900x900"/>
// //   <img src="https://source.unsplash.com/CgR5CX2j0mc/900x900"/>
// //   <img src="https://source.unsplash.com/aAmYwM9dHUM/900x900"/>
// //   <img src="https://source.unsplash.com/yN7prWLW7xg/900x900"/>
// // </div>
// //             </Slider>
// //         </div>
// //     );
// // }

// // export default PictureSlider;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import './slider.css'; // Import your CSS
// import '../cssComponents/slider.css'

// const PictureSlider = () => {
//     const settings = {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000, // 2 seconds per slide
//         pauseOnHover: true,
//         arrows: false,
//         vertical: true, // Enable vertical sliding for upward movement
//         verticalSwiping: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ]
//     };


//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
               
//                     <div  className="slide">
//                         <div className='slide'>
//                         <img src={require('../../Assest/8881.png')}/>
//                         </div>
//                         <img src={require('../../Assest/8834.png')}/>
//                         <img src={require('../../Assest/5402.png')}/>
//                         <img src={require('../../Assest/3567.png')}/>
//                         <img src={require('../../Assest/3555.png')}/>
//                         <img src={require('../../Assest/0174.png')}/>
//                         <img src={require('../../Assest/0160.png')}/>
//                         <img src={require('../../Assest/0031.png')}/>
//                         <img src={require('../../Assest/0029.png')}/>
//                         <img src={require('../../Assest/0028.png')}/>
//                         <img src={require('../../Assest/0006.png')}/>
//                         <img src={require('../../Assest/8881.png')}/>
//                         <img src={require('../../Assest/8834.png')}/>
//                         <img src={require('../../Assest/3567.png')}/>

//                     </div>
               
//             </Slider>
//         </div>
//     );
// }

// export default PictureSlider;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../cssComponents/slider.css'

const images = [
    require('../../Assest/0160.png'),
    require('../../Assest/5402.png'),
    require('../../Assest/3567.png'),
    require('../../Assest/3555.png'),
    require('../../Assest/0174.png'),
    require('../../Assest/0160.png'),
    require('../../Assest/0031.png'),
    require('../../Assest/0029.png'),
    require('../../Assest/0028.png'),
    require('../../Assest/0006.png'),
    require('../../Assest/0174.png'),
    require('../../Assest/5402.png'),
    require('../../Assest/3567.png'),
    require('../../Assest/3555.png'),
    require('../../Assest/5402.png'),
    require('../../Assest/3567.png'),
    require('../../Assest/3555.png'),
    require('../../Assest/0174.png'),
    require('../../Assest/0160.png'),
    require('../../Assest/0031.png'),
    require('../../Assest/0029.png'),
    require('../../Assest/0028.png'),

];

const PictureSlider = () => {
    const settings = {
        spaceBetween:0,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed : 7000, // 2 seconds per slide
        pauseOnHover: true,
        arrows: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    
                }
            }
        ]
    };

    return (
        // <div className="slider-container">
        //     <div className="row">
        //         <Slider {...settings}>
        //             {images.slice(0, images.length / 2).map((image, index) => (
        //                 <div key={index} className="slide">
        //                     <img src={image} alt={`Image ${index + 1}`} />
        //                 </div>
        //             ))}
        //         </Slider>
        //     </div>
        //     <div className="row">
        //         <Slider {...settings}>
        //             {images.slice(images.length / 2).map((image, index) => (
        //                 <div key={index} className="slide">
        //                     <img src={image} alt={`Image ${index + 1}`} />
        //                 </div>
        //             ))}
        //         </Slider>
        //     </div>
        // </div>

        <div className="slider-container">
    <div className="row">
        <Slider {...settings}>
            {images.slice(0, images.length / 2).map((image, index) => (
                <div key={index} className="slide">
                    <img className='img'  src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
    <div className="row">
        <Slider {...settings}>
            {images.slice(images.length / 2).map((image, index) => (
                <div key={index} className="slide">
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
</div>

    );
}




export default PictureSlider;
