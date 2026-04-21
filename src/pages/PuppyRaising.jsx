import './RaisingSitting.css'

function PuppyRaising() {
  return (
    <main className="raising">
      <h1 className='pr-header'>What Is A Puppy Raiser?</h1>
      <br></br>
      <div className='pr-row'>
        <div className='pr-left'>
          <p>
            Puppy Raisers are volunteers who are willing to devote approximately a year and a half to training a guide 
            dog. Puppies arrive at about 12 weeks and return to the Guide Dog Foundation between 14-18 months of age. 
            During this period, raisers have 
            {' '}
              <a href="https://puppyraising.guidedog.org/PuppyRaising/PuppyRaiserManual/StartHere/Puppy_Raising_Main_Objectives.aspx" target="_blank" rel="noopener noreferrer">
                4 main objectives
              </a>{''}
            : socialization, good house manners, relieving routine and
            ensuring success.
          </p>
          <p>
            At UMD, puppy raisers are students who live in apartments, suites or houses and are sophomores or above. 
            We do not let freshmen or students who live in dorms raise puppies, but we’d love to have you as puppy 
            sitters and you can begin raising as a sophomore! We also do not allow students who will be studying abroad 
            while their puppy is in training raise, however, you can puppy sit and raise when you get back! 
          </p>
          <p>
            The Guide Dog Foundation supplies puppy raisers with most of the equipment needed. This includes: 
          </p>
          <ul>
            <li>A crate</li>
            <li>Leashes</li>
            <li>Collar</li>
            <li>Heartworm Prevention</li>
            <li>Flea & Tick Prevention</li>
            <li>A Tie-Down</li>
            <li>Puppy Vest</li>
            <li>A Bowl</li>
            <li>Ear Cleaner</li>
            <li>A nylabone</li>
            <li>A small bag of food</li>
          </ul>
          <p>
            Vet bills are covered by the foundation. Food and any other equipment must be purchased by the raiser. 
          </p>
        </div>
        <div className='pr-right'>
          <img src="/dogs/joey2.jpg" alt="puppies" className="pr-right" />
        </div>
      </div>
      <div className='pr-bottom'>
        <h4>All puppy raisers must be co-raisers. This means you and your co-raiser share equal responsibility in 
          raising your puppy. If you do not have a co-raiser in mind, we can match you with one once you complete 
          the majority of your application process. 
        </h4>
        <p>
          Once they finish the application process, Puppy Raisers are assigned to an Area Coordinator. To learn more about puppy raising, 
          check out the {''}
            <a href="https://puppyraising.guidedog.org/PuppyRaising/PuppyRaiserManual/PuppyRaiserManual.aspx" target="_blank" rel="noopener noreferrer">
              Puppy Raiser Manual
            </a>
          {''}
        </p>
        <h2 className='pr-h2'>Prospective Puppy Raiser CheckList</h2>
        <i>
          If you're interested in becoming a puppy raiser, please use the list as a reference for where you are in the 
          process and what your next steps are. This list is a guideline. An Area Coordinator or Puppy Program Rep may 
          ask you to complete more classes, additional puppy sitting, or another home visit, if they feel it is needed. 
        </i>
        <ul>
          <li>Submit Online Application at 
            {' '}
              <a href="https://www.guidedog.org/puppy" target="_blank" rel="noopener noreferrer">
              puppy.guidedog.org
              </a>
            {''}
          </li>
          <ul>
            <li>Will receive an email with a video to watch and 2 quizzes to complete</li>
          </ul>
          <li>Attend an 
          {' '}
              <a href="https://teamup.com/ksn6yr1w9barye3uta" target="_blank" rel="noopener noreferrer">
              Info Session
              </a>
            {''}
          </li>
          <ul>
            <li>Online info sessions are available</li>
            <li>There are no info sessions during winter or summer break. If you are beginning the process during this 
              time, you are excused from the info session</li>
          </ul>
          <li>Attend <u>AT LEAST</u> 3 PR/sitter classes (Class schedule will be sent following info session) </li>
          <ul><li>Work on finding a co-raiser at these classes</li></ul>
          <li>Submit Long Application (Will receive in an email once you finish 3 PR/sitter classes)</li>
          <li>Home Visit</li>
          <li>Roommate Agreement</li>
          <li>Puppy Schedule Agreement with your Co-Raiser</li>
          <li>Puppy sit (3 days 2 nights)</li>
          <li>Attend AT LEAST 3 Regular classes</li>
          <ul>
            <li>1 <u>may</u> be online (group classes NOT PROS PR/Sitter); 2 in-person (all 3 may be in person)</li>
            <li><u>AT LEAST</u> 1 Taught by Melissa Harrington, Christine Wood or Christine Gardner</li>
            <li><u>AT LEAST</u> 1 Taught by a UMD AC</li>
          </ul>
          <li>Ready for puppy match!</li>
        </ul>
        <p>*UMD Leadership & Melissa Harrington/Christine Wood reserve the right to ask you to attend additional classes prior to being put on a transport*</p>
      </div>
    </main>
  )

}

export default PuppyRaising