
import {useState,useEffect} from 'react';
import Project from './project.css';

function Nav() {
  const [active, setActive] = useState('navBarSection');
  const [black, setBlack] = useState('image');

  function hiddenIt() {
    setBlack('noImage')
  }
  function showIt() {
    setBlack('image')
  }
  function closeNav() {
    setActive('nav')
  }
  function showNav() {
    setActive('nav1')
  }
  return ( 
    <main>
      
      <div className={active}>
    <h1>dot</h1>
      <div className='listItems'>
          <li><a>home</a></li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <div className='buttons'>
            <button>login</button>
            <button>signUp</button>
          </div>
          
      </div>
    <div className='wrongIcon' onClick={closeNav}>
      wrong
      </div>
      </div>
      
      <div className='dots'>
        <div className='dot1'>
          <h1>DOT</h1>
          <div className='navLists'>
            <li>Home</li>
            <li>Products</li>
            <li>Resourses</li>
            <li>Contact</li>
            <li>Blog</li>
           
          </div>
          <p onClick={showNav}>windows</p>
          <div className='login1'>
            <button>login</button>
            <button>signup</button>
         </div>
        </div>
        </div>
      <div className='dot'>
        <div className='intro'>
        <h1>Plan Your Trip With Travel Dot </h1>
        <p>Travel to your favourite city with respectful of the environment</p>
          <button>Explore Now</button>
        </div>
      </div>
      <div className='inputSet'>
          <div className='inputText'>
            <p>nb</p>
            <input type='text'/>
          </div>
          <div className='inputText'>
            <p>nb</p>
            <input type='text'/>

          </div>
          <div className='inputText'>
            <p>nb</p>
            <input type='text'/>
        </div>
        <button>Search</button>
      </div>
      <div className='popular'>
        <div className='popularGrid'>
        <div className='popularDestination'>
        <h3>Popular Destination</h3>
        <p>From historical cities to natural specghghgh,cmome thij uyuy best of the world</p>
       </div>
          <div className='arrows'>
          <img src='images/about-section.jpeg'></img>
          <img src='images/about-section-Copy.jpeg'></img>
        </div>
        </div>
        <div className='popular1'>
        <div className='images'>
          <img src='images/green.jpeg'></img>
         
          <div  className={black}>
          <h4>Some text</h4>
          <p>Loram ipsum dolor sit amet.</p>
          
          <img src='images/spmvv.jpeg'></img>
          </div>
          <div onMouseOut={ showIt} onMouseOver={hiddenIt} className='ol1'>
          <div className='ol'>
            <p>02</p>
            <h1></h1>
          </div>
          <div className='london'>
            <h5>London</h5>
            <div className='dot2'>
            <h1></h1>
            <p>Dot</p>
            </div>
          </div>
          </div>
        </div>

        <div className='images'>
          <img src='images/about-section.jpeg'></img>
          <div  className={black}>
          <h4>Some text</h4>
          <p>Loram ipsum dolor sit amet.</p>
          
          <img src='./images/home1.png'></img>
          </div>
          <div onMouseOut={ showIt} onMouseOver={hiddenIt} className='ol1'>
          <div className='ol'>
            <p>02</p>
            <h1></h1>
          </div>
          <div className='london'>
            <h5>London</h5>
            <div className='dot2'>
            <h1></h1>
            <p>Dot</p>
            </div>
          </div>
          </div>
        </div>

        <div className='images'>
          <img src='images/about-section.jpeg'></img>
         
          <div  className={black}>
          <h4>Some text</h4>
          <p>Loram ipsum dolor sit amet.</p>
          
          <img src='images/about-section.jpeg'></img>
          </div>
          <div onMouseOut={ showIt} onMouseOver={hiddenIt} className='ol1'>
          <div className='ol'>
            <p>03</p>
            <h1></h1>
          </div>
          <div className='london'>
            <h5>London</h5>
            <div className='dot2'>
            <h1></h1>
            <p>Dot</p>
            </div>
          </div>
          </div>
        </div>

        <div className='images'>
          <img src='images/about-section.jpeg'></img>
         
          <div  className={black}>
          <h4>Some text</h4>
          <p>Loram ipsum dolor sit amet.</p>
          
          <img src='images/about-section.jpeg'></img>
          </div>
          <div onMouseOut={ showIt} onMouseOver={hiddenIt} className='ol1'>
          <div className='ol'>
            <p>04</p>
            <h1></h1>
          </div>
          <div className='london'>
            <h5>London</h5>
            <div className='dot2'>
            <h1></h1>
            <p>Dot</p>
            </div>
          </div>
          </div>
        </div>
      </div>
        </div>
      
      <div className='special'>
        <div className='specialOffers'>
        <h3>Special offers</h3>
        <p>from historical cities to natural spectaculars, come see the best of the world!</p>
        </div>
        <div className='specialOffer'>
        <div className='details'>
          <div className='offer'>
          <img src='images/about-section.jpeg'></img>
        
          </div>
          <div className='fullDetails'>
          <div className='rupees'>
            <h3>$4,500</h3>
            <p>for Next</p>
          </div>
          <div className='facilities'>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>2 Beds</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>1 Both</p>
            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Wi-Fi</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Shuffle</p>
              </div>
            </div>
            <div className='navigator'>
              <img src='images/about-section.jpeg'></img>
               <p>450 Vine #320, Camboda</p>
              </div>
            <div className='viewDetails'>
              <button>View Details</button>
              <img src='images/about-section.jpeg'></img>
             </div>
          </div>

        </div>

        <div className='details'>
          <div className='offer'>
          <img src='images/about-section.jpeg'></img>
          
          </div>
          <div className='fullDetails'>
          <div className='rupees'>
            <h3>$4,500</h3>
            <p>for Next</p>
          </div>
          <div className='facilities'>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>2 Beds</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>1 Both</p>
            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Wi-Fi</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Shuffle</p>
              </div>
            </div>
            <div className='navigator'>
              <img src='images/about-section.jpeg'></img>
               <p>450 Vine #320, Camboda</p>
              </div>
            <div className='viewDetails'>
              <button>View Details</button>
              <img src='images/about-section.jpeg'></img>
             </div>
          </div>

        </div>

        <div className='details'>
          <div className='offer'>
          <img src='images/about-section.jpeg'></img>
        
          </div>
          <div className='fullDetails'>
          <div className='rupees'>
            <h3>$4,500</h3>
            <p>for Next</p>
          </div>
          <div className='facilities'>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>2 Beds</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>1 Both</p>
            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Wi-Fi</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Shuffle</p>
              </div>
            </div>
            <div className='navigator'>
              <img src='images/about-section.jpeg'></img>
               <p>450 Vine #320, Camboda</p>
              </div>
            <div className='viewDetails'>
              <button>View Details</button>
              <img src='images/about-section.jpeg'></img>
             </div>
          </div>

        </div>

        <div className='details'>
          <div className='offer'>
          <img src='images/about-section.jpeg'></img>
         
          </div>
          <div className='fullDetails'>
          <div className='rupees'>
            <h3>$4,500</h3>
            <p>for Next</p>
          </div>
          <div className='facilities'>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>2 Beds</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>1 Both</p>
            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Wi-Fi</p>

            </div>
            <div className='facility'>
              <img src='images/about-section.jpeg'></img>
              <p>Shuffle</p>
              </div>
            </div>
            <div className='navigator'>
              <img src='images/about-section.jpeg'></img>
               <p>450 Vine #320, Camboda</p>
              </div>
            <div className='viewDetails'>
              <button>View Details</button>
              <img src='images/about-section.jpeg'></img>
             </div>
          </div>

        </div>
        </div>
      </div>
      
      <div className='hiking'>
        <div className='hikings'>
        <h3>Why Hikings?</h3>
      </div>
       
        <div className='gridHiking'>
        <div className='hikingImage'>
        <img src='images/about-section.jpeg'></img>
          <div className='content'>
          <h3>100+ Mountains</h3>
        <p>Research shows that a chance to break away from the norma rthythms of daily life reduces stress and improves health and well-being</p>
            </div>
        </div>

        <div className='hikingImage'>
        <img src='images/about-section.jpeg'></img>
          <div className='content'>
          <h3>1090+ Hikings</h3>
        <p>Research shows that a chance to break away from the norma rthythms of daily life reduces stress and improves health and well-being</p>
            </div>
       </div>
       <div className='hikingImage'>
        <img src='images/about-section.jpeg'></img>
          <div className='content'>
          <h3>2000+ Customers</h3>
        <p>Research shows that a chance to break away from the norma rthythms of daily life reduces stress and improves health and well-being</p>
            </div>
        </div> 
       </div>
        
      </div>
      
      <div className='wonderful'>
        <div className='wonder'>
          <div>
          <h3>Wonderful House experience nin there!</h3>
      <p>The adventure sudtracting to based on equally weighted changes of scores from live country</p>
         
       </div>
          <img src='images/about-section.jpeg'></img>
      
        </div>
      </div>

      
      <div className='blogs'>
        <div className='blogIntro'>
        <h3>  our Best Blog?</h3>
        <p>An insight to theinggfgff experience in the world!</p>
        </div>
        <div className='gridBlog'>
        <div className='blog'>
          <img src='images/about-section.jpeg'></img>
          <h3>Beautiful Morocco, let us travel!</h3>
          <p>The Kingdom Morocco is a Muslim country in Western North Africa with coastines on the Atlantic Ocean and Mediterranean Sea.</p>
          <div className='readMore'>
          <p>Read More</p>
            <img src='images/about-section.jpeg'></img>

        </div>
        </div>

        <div className='blog'>
          <img src='images/about-section.jpeg'></img>
          <h3>Beautiful Morocco, let us travel!</h3>
          <p>The Kingdom Morocco is a Muslim country in Western North Africa with coastines on the Atlantic Ocean and Mediterranean Sea.</p>
          <div className='readMore'>
          <p>Read More</p>
            <img src='images/about-section.jpeg'></img>

        </div>
        </div>

        <div className='blog'>
          <img src='images/about-section.jpeg'></img>
          <h3>Beautiful Morocco, let us travel!</h3>
          <p>The Kingdom Morocco is a Muslim country in Western North Africa with coastines on the Atlantic Ocean and Mediterranean Sea.</p>
          <div className='readMore'>
            <p>Read More</p>
            <img src='images/about-section.jpeg'></img>

        </div>
        </div>
       </div>
      </div>

      <div className='footer'>
        <div className='footerGrid'>
        <div className='footerIcon'>
        <img src='images/about-section.jpeg'></img>
<h3>Dot</h3>
        </div>
        <div className='contactInfo'>
        <img src='images/about-section.jpeg'></img>
        <img src='images/about-section.jpeg'></img>
        <img src='images/about-section.jpeg'></img>
        </div>
        </div>
        <div className='info'>
          <h4>Information</h4>
          <p>Home</p>
          <p>Explore</p>
          <p>Travel</p>
          <p>Blog</p>
        </div>
        <div className='helpful'>
          <h4>Helpful Links</h4>
          <p>Destination</p>
          <p>Support</p>
          <p>Travel & Condition</p>
          <p>Privacy</p>
        </div>
        <div className='contact'>
          <h4>contact</h4>
          <p>Home</p>
          <p>nnnnn@jj8989</p>
        </div>

      </div>
   </main>
    )
}






export default Nav