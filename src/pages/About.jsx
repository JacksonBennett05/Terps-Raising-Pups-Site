import './About.css'
import { useNavigate } from 'react-router-dom'


function About() {
  const navigate = useNavigate()

  return (
    <main className="about-page">
      <img src="/trp/halloween.png" alt="puppies" className="left-img" />
      <div className="right-side">
        <h2>About Us</h2>
        <p>
        Terps Raising Pups are University of Maryland students willing to offer a large part of their time towards 
        raising or sitting puppies that will go on to change someone's life. All students are volunteers. Classes are 
        offered by Guide Dog Foundation not the University of Maryland; meaning you will not receive any academic credit
        </p>
        <p>
          Our group started with one pup on campus in September 2016. We now have close to 30 pups at UMD and more that 
          have found their careers. This makes us GDF’s second biggest college program and we couldn’t be more thankful 
          for the support we’ve received from University of Maryland and the Washington DC area GDF group
        </p>
        <button
            onClick={() => navigate('/our-pups')}
          >
            Meet Our Pups
          </button>
      </div>
      <div className="second-row">
        <h2>WHY WE VOLUNTEER</h2>
        <p>When you raise a puppy through the Guide Dog Foundation for the Blind, that puppy will help somebody else 
          live a life without boundaries as well as change your own life.
        </p>
        <p>
          There is nothing like that moment when something that you and your dog have been working really hard for finally
         clicks. Even better is the pride you feel when that puppy graduates and goes on to fulfill their purpose. 
        </p>
        <p>
          So many of our handlers are repeat puppy raisers because once you raise one you can't imagine not 
          raising another.
        </p>
      </div>
    </main>
  )

}

export default About