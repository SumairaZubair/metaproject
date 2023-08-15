import '../cssComponents/cart.css'
import Team from '../sixth/Team'
const Cart =()=>{
    return(
        <div className='background'>
          <div className="pictures">
           <div className='cartt'>
            <h1 className='mint'>Mint your mooose.</h1>
            <div className='balance'>
                <p className='my'>My balance: <span>0 ETH</span></p>
                <p className='wallet'>connect wallet</p>
               
            </div>
            <div className='amount'>
              <div className='amountSec'> 
                 <p className='buy'>Amount to buy</p>
                <p>-</p>
                <button className='btnn'>2</button>
                <p>+</p>
                <p className='max'>Max</p></div>
            </div>
            <div className='price'>
               <div className='content'>
               <p className='token'>Price per token</p>
                <p className='eth'>0.000 ETH</p>
               </div>
            </div>
            <div className='total'>
                <div className='totalPrice'>
                    <p className='tp'>Total price</p>
                    <p className='eth'>0.000 ETH</p>
                </div>
            <div className='box'>Mint</div>
            </div>
           </div>
          </div>
          <Team/>
        </div>
    )
}

export default Cart