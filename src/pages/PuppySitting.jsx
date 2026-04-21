import './RaisingSitting.css'
import { Link } from 'react-router-dom'

function PuppySitting() {
  return (
    <main className='sitting'>
      <h1 className='ps-header'>What Is A Puppy Sitter?</h1>
      <br></br>

      <div className='ps-row'>
        <div className='ps-left'>
          <p>
            Puppy Sitters are volunteers who are willing to assist Puppy Raisers in training and caring for their 
            puppies when they need it. We expect our sitters to have the same understanding and skills as our raisers
            when it comes to socializing pups, teaching obedience and house manners.
          </p>
          <p>
            Once a Puppy Sitter completes the application process, they are added to a group chat in which our raisers 
            ask for someone to watch their puppy. Sitters take these opportunities based off of their own schedule.
          </p>
          <p> Puppy Sitters are not responsible for any costs associated with the puppies they watch.</p>
          <p>
            Puppy Sitters are required to go to multiple classes a month in order to stay current on training methods. 
            For more information on what is required of a puppy sitter check out our{' '}
            <Link to="/puppy-raisers">
              Puppy Raiser page
            </Link>. 
          </p>
          <p>Our Puppy Sitters are overseen by our Group Leaders.</p>
          <p>
            If you are a freshmen, live in a dorm or can not currently raise a puppy for another reason we highly 
            encourage you to join our club as a puppy sitter and gain experience until you are able to raise a puppy.
          </p>
        </div>

        <div className='ps-right'>
          <img src='/dogs/dot_testudo.png' alt='puppy' className='ps-right'></img>
        </div>
      </div>
      <div className='ps-bottom'>
        <h2 className='ps-h2'>Prospective Puppy Sitter CheckList</h2>
        <i>
          If you're interested in becoming a puppy sitter, please use the list as a reference for where you are in the 
          process and what your next steps are. This list is a guideline. An Area Coordinator, Group Leader, or Puppy 
          Program Rep may ask you to complete more classes or another home visit, if they feel it is needed. 
        </i>

        <ul>
          <li>Submit Online Application at puppy.guidedog.org</li>
          <ul>
            <li>There is no separate sitter application. Please submit the puppy raiser application.</li>
            <li>Will receive an email with a video to watch a 2 quizzes to complete</li>
          </ul>
          <li>Atttend an 
          {' '}
              <a href="https://teamup.com/ksn6yr1w9barye3uta" target="_blank" rel="noopener noreferrer">
              Info Session
              </a>
            {''}
          </li>
          <ul>
            <li>Online info sessions are available</li>
            <li>
              There are no info sessions during winter or summer break. If you are beginning the process during this 
              time, you are excused from the info session
            </li>
          </ul>
          <li>Attend 3 PR/Sitter classes before other classes (Class schedule will be sent after the info session)</li>
          <ul><li>1 may be online; 2 in-person (all 3 may be in person)</li></ul>
          <li>Home visit</li>
          <li>Roommate agreement</li>
          <li>Short term foster agreement</li>
          <li>Attend <u>AT LEAST</u> 3 Regular on campus classes</li>
          <ul>
            <li>1 <u>may</u> be online; 2 in-person (all 3 may be in person)</li>
            <li>Sitters are welcome to attend off campus classes but this is not a requirement (it is encouraged)</li>
          </ul>
          <li>Ready to puppy sit!</li>
        </ul>

        <p>
          Check in with the UMD Group Leaders frequently throughout the process. This list is a guide for you to 
          follow. You may be asked to do more classes or puppy sitting to ensure you are successful.
        </p>
        <p>*UMD ACs/GLs & Melissa Harrington/Christine Wood reserve the right to ask you to attend additional classes prior to being added as a sitter*</p>
      </div>
    </main>
  )

}

export default PuppySitting