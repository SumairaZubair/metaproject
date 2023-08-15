import '../cssComponents/specs.css'
import Cart from '../fifth/Cart'
const Specs =()=>{
    return(
        <div>

            <div className='img-text'>
                <div className='brown'>
               <div className='points'>
                    <h1 className='brownHead'>Specs and Traits.</h1>
                <p>• The purchase price of Moose will be 0.088ETH + gas fee.</p>
                <p>• There will be 2222 Female Moose and 6666 Male Moose. Each Moose is custom-designed and developed with distinct characteristics.</p>
                <p>• Every Moose is unique and algorithmically generated from more than 200 possible traits! We specifically choose all 8 groups of traits: Background, Eyes, Mouth, Head, Fur, Clothes, Antlers, and Accessories.</p>
                <p>• Some of them are rarer than the other, with 10 commanders being 1/1 with unique traits that cannot be found in others.</p>
                <p>• By purchasing a Moose, you become a member of the Country Club. You will not only have beautiful fine art but as well all creative and commercial rights.</p>
                <p>• By being a member of Country Club you will have access to soooo many benefits and exclusive giveaways.</p>
                <p>• We will be revealing the special utility that would bring so much value and make us unique in the sea of PFP NFT projects. Become a member and stay tuned to find out. You will not regret it! We promise.</p>

               </div>
                </div>
                <div className='imagess'>
                    {/* <img src={require('../../Assest/picss.png')}/> */}
                </div>
            </div>
            <Cart/>
        </div>
    )
}
export default Specs