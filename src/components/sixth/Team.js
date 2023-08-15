import '../cssComponents/team.css'
// import ProgressBar from '../last/ProgressBar'

const Team =()=>{
    return(
        <div>
           <div className="ourTeam">
               <div className="info">
                <h1 className='team'>TEAM.</h1>
                <div className='follow'><p>Following our tremendous ambitions and plowing our wave through the vast universe of the NFT, we wanted to establish a practical, sustainable, and strong membership network, so that our community can embrace all of the benefits of being a member of our exclusive club. Meet the crew behind Meta Moose!</p></div>
               <div className='detailss'>
                <div className='teamCard'>
                    <img src={require('../../Assest/circle1.png')} alt='cirlce images'/>
                    <p className='name'>Gigi</p>
                    <p className='work'>Project Manager & Coordinator</p>
                </div>
                <div className='teamCard'>
                <img src={require('../../Assest/circle2.png')} alt='cirlce images'/>
                    <p className='name' >Dr Moose</p>
                    <p className='work'>Project Manager & Marketing Lead</p>
                </div>
                <div className='teamCard'>
                <img src={require('../../Assest/circle3.png')} alt='cirlce images'/>
                    <p className='name'>Jackson</p>
                    <p className='work'>Blockchain Advisor & Business Developer</p>
                </div>
                <div className='teamCard'>
                <img src={require('../../Assest/circle1.png')} alt='cirlce images'/>
                     <p className='name'>Hot Moose</p>
                     <p className='work'>Lead Developer & Tech</p>
                </div>
                <div className='teamCard'>
                <img src={require('../../Assest/circle5.png')} alt='cirlce images'/>
                     <p className='name'>Nana Famoose</p>
                     <p className='work'>Art Director & Creator of Moose</p>
                </div>

               </div>
               </div>

               <div className='askQuestions'>
              <div className='ask'>  <h1>Frequently Asked Questions.</h1></div>
              <div className='questionss'>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>What is Meta Moose?</p>
               <img className='qArrow' src={require('../../Assest/arrowIcon.png')}/>
               </div>
                <p className='ans'>Our adventure begins deep within the snowy forest. A herd of moose was peacefully living across the immense pond. They had no idea that the world was in grave danger and that it was time to move on, but not all of them were lucky. A bright star fell from the sky, bearing a vital message. Only ten of them will be given a second chance, 7 male and 3 female. It was time to move on to a new world, a new universe, the Metaverse.</p>
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>What is the total supply of the Meta Moose?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>When are the presale and public sale?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>How can I buy a Moose?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>What is the mint price?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>When is the reveal?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>What are the royalties?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>How many Moose are reserved?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>How many Moose are reserved?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
               <div className='qContent'>
               <div className='arrowAns'>
               <p className='ques'>What does the team plan to do after launch?</p>
               <img className='qArrow' src={require('../../Assest/closeIcon.png')}/>
               </div>
               
               </div>
              
               </div>
               </div>
               {/* <ProgressBar/> */}
           </div>
        </div>
    )
}

export default Team