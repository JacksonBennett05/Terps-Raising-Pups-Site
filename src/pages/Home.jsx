import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="home-page">
      <div className="heading">
        <img src="/puppies.png" alt="puppies" className="left-img" />

        <div className="right-side">
          <img src="/slogan.png" alt="slogan" className="slogan-img" />

          <button
            className="apply-btn"
            onClick={() => navigate('/getting-started')}
          >
            Apply Today &gt;
          </button>
        </div>
      </div>

      <div className="content">
        <h1 className='landing'>Terps Raising Pups</h1>
        <p className='text'>
          We are a chapter of the Guide Dog Foundation for the Blind at the University of Maryland College Park.
          We Are a group of students that are volunteer puppy raisers and sitters working to raise and train future guide
          dogs for individuals with vision impairments. The Guide Dog Foundation (GDF) provides fully trained guide dogs
          to vision-impared persons at no cost to them. GDF relies soley on donations and colunteered time and effort, and
          is an award-winning non-profit based in Long Island, New York. Terps Raising Pups also has raisers who are a
          part of a trial program through the Guide Foundation's sister program, America's Vet Dogs, to raiser future PTSD
          service dogs for veterans, active-duty service members, and first responders with PTSD.
        </p>
      </div>
    </main>
  )
}

export default Home