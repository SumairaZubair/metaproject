import '../cssComponents/narrate.css'
// import group from '../../Assest/vector.png'
import animalimg from '../../Assest/Image.png'
import ProgressBar from '../last/ProgressBar'
// import Slider from 'react-slick'
import PictureSlider from '../Third/Slider'
// import group from '../../Assest'
const Narrate = () => {
    return (
        <div className="nMain">
            <div className='h1'>
                <h1>our narrative.</h1>
            </div>
            <div className='narration'>
                <div className='narrateText'>
                    {/* <img src={group} alt='text' /> */}
                    <p>Our adventure begins deep within the snowy forest. A herd of moose was peacefully living across the immense pond. They had no idea that the world was in grave danger and that it was time to move on, but not all of them were lucky. A bright star fell from the sky, bearing a vital message. Only ten of them will be given a second chance, 7 male and 3 female. It was time to move on to a new world, a new universe, the Metaverse. Metaverse. The unknown. Empty. Scary. Our Moose was given a difficult task: to conquer, to rule, to discover, to form a new life. But, brave as they are, using their calm personality and finding selflessness in the deep core of their hearts, significant intellectual contributions were made, and the Meta Moose World was born…Ten years have passed. A colony of 8,888 Moose established a completely new way of life while ruling the new world. To keep the peace and serenity, five factions were formed. Each moose was assigned to one of the factions: the Commoners, the Altruistic, the Fearless, the Astute, and the Commanders.</p>
                </div>
                <div className='narrateImg'>
                    <img src={animalimg} alt='animal' />

                </div>


            </div>
            <div className='wooder'>

                <div className='woodimg'>
                    <h1 className='meet'>Meet the Commanders!</h1>
                    <p>The creators of everything. What do they now you ask? Well, deep in the forest in the leafy sanctuary with scenic splendour and luxurious club amenities, our Moose are chilling in the country club and enjoying its rustic elegance. Drinking booze, smoking cigars, and enjoying the fruits of their labor. Each one out of the 10 Moose is 1/1, super rare, and extremely unique.</p>
                </div>
            </div>
          <PictureSlider/>
            <ProgressBar/>
        </div>
    )
}

export default Narrate