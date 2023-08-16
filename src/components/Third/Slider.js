

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../cssComponents/slider.css'

// const images = [
//     require('../../Assest/0160.png'),
//     require('../../Assest/5402.png'),
//     require('../../Assest/3567.png'),
//     require('../../Assest/3555.png'),
//     require('../../Assest/0174.png'),
//     require('../../Assest/0160.png'),
//     require('../../Assest/0031.png'),
//     require('../../Assest/0029.png'),
//     require('../../Assest/0028.png'),
//     require('../../Assest/0006.png'),
//     require('../../Assest/0174.png'),
//     require('../../Assest/5402.png'),
//     require('../../Assest/3567.png'),
//     require('../../Assest/3555.png'),
//     require('../../Assest/5402.png'),
//     require('../../Assest/3567.png'),
//     require('../../Assest/3555.png'),
//     require('../../Assest/0174.png'),
//     require('../../Assest/0160.png'),
//     require('../../Assest/0031.png'),
//     require('../../Assest/0029.png'),
//     require('../../Assest/0028.png'),

// ];

// const PictureSlider = () => {
//     const settings = {
//         spaceBetween:0,
//         slidesToShow: 7,
//         slidesToScroll: 2,
//         autoplay: true,
//         speed : 7000, // 2 seconds per slide
//         pauseOnHover: true,
//         arrows: false,
//         cssEase: 'linear',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1.5,
                    
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="slider-container">
//     <div className="row">
//         <Slider {...settings}>
//             {images.slice(0, images.length / 2).map((image, index) => (
//                 <div key={index} className="slide">
//                     <img className='img'  src={image} alt={`Image ${index + 1}`} />
//                 </div>
//             ))}
//         </Slider>
//     </div>
//     <div className="row" >
//         <Slider {...settings}>
//             {images.slice(images.length / 2).map((image, index) => (
//                 <div key={index} className="slide">
//                     <img src={image} alt={`Image ${index + 1}`} />
//                 </div>
//             ))}
//         </Slider>
//     </div>
// </div>

//     );
// }




// export default PictureSlider;





import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../cssComponents/slider.css';


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

]



const PictureSlider = () => {
    const straightSliderSettings = {
        spaceBetween: 0,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed: 7000, // 7 seconds per slide
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

    const reverseSliderSettings = {
        spaceBetween: 0,
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        speed: 7000, // 7 seconds per slide
        pauseOnHover: true,
        arrows: false,
        cssEase: 'linear',
        rtl: true, // Set rtl to true for reverse sliding
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
        <div className="slider-container">
            <div className="row">
                {/* Straight Slider */}
                <Slider {...straightSliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img className='img' src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="row">
                {/* Reverse Slider */}
                <Slider {...reverseSliderSettings}>
                    {images.map((image, index) => (
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

