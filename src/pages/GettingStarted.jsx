import { useNavigate } from 'react-router-dom'
import './GettingStarted.css'

function GettingStarted() {
  const navigate = useNavigate()

  return (
    <main className="started">
      <img src="/dogs/joey_hope.png" alt="group" className="dot-img" />

      <div className="overlay-panel">
        <div className="volunteer-box">
          <h1>VOLUNTEER</h1>

          <div className="volunteer-info">
            <p>
              All prospective raisers and sitters must apply at{' '}
              <a href="https://puppy.guidedog.org" target="_blank" rel="noopener noreferrer">
                puppy.guidedog.org
              </a>{' '}
              before they can attend any classes. When filling out the application please
              select co-raiser no matter what role you are interested in. There is no
              separate sitter application. You can note that you are interested in being a
              sitter in the comments.
            </p>

            <p>
              Once you submit the application, you will receive an email inviting you to
              attend an information session. We offer multiple info sessions a month.
            </p>

            <p>
              It may take a few days for us to get your application. Please be patient and
              if you do not get a response after a week send us an email at{' '}
              <a href="mailto:gdfumd@gmail.com">gdfumd@gmail.com</a>.
            </p>

            <p className="volunteer-note">
              We&apos;re looking for students who are committed to raising or watching future
              guide dogs and changing someone&apos;s life!
            </p>

            <h3>I WANNA BE A...</h3>

            <div className="button-row">
              <button
                className="role-btn"
                onClick={() => navigate('/puppy-raising')}
              >
                SITTER
              </button>

              <button
                className="role-btn"
                onClick={() => navigate('/puppy-sitting')}
              >
                CO-RAISER
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GettingStarted