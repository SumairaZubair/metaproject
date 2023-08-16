// import hero from '../../Assest/hero1.png'
import '../cssComponents/nav.css'
import hero from '../../Assest/Hero image (2).png'
// import arrow from '../../Assest/arrow.png'
const NavText = ()=>{
    return(
        <div>
             <div className='imgtext'>
                <div className='heading'>
                    <h1>Welcome to Meta Moose World</h1>
                   
                    <p>The woodland of Metaverse is home to 8,888 programmatically 
                        generated Moose. They are massive, majestic, 
                        6 feet tall, and super strong. Meta Moose is
                         lovingly crafted collection that is powered by
                 the Ethereum Blockchain. Come have
                  a look around!</p>
                  <div className='btn'>
                  <button className='disc'>DISCORD</button>
                  <button className='tweet'>TWITTER</button>

                  </div>
                </div>

                <div className='image'> 
                    <img src={hero} alt='hero' className='herro'/>
                </div>
            </div>
            <div className='more'>
                <p className='scroll'>scroll for more</p>
                {/* <img className='arrr' src={arrow}/> */}
                <p className='emoji'>∨</p>
            </div>
        </div>
    )
}

export default NavText