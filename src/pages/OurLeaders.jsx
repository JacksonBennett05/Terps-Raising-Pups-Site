import './OurLeaders.css'

function OurLeaders() {
  const program_reps = [
    {
      name: "Christine Gardner",
      image: "/leaders/christine.png"
    },
    {
      name: "Melissa Harrington",
      image: "/leaders/melissa.png"
    }, 
    {
      name: "Deana Stone",
      image: "/leaders/deana.png"
    }
  ];

  return (
    <main className="our-leaders">
      <h1>Our Leaders</h1>
      <p> 
        Faces you most commonly will see at classes. Our leaders are great resources for learning more about the 
        program and the application process.  
      </p>
      <br></br>
      <h3>Puppy Program Reps</h3>
      <p>
        Advisors are staff members who oversee puppies in their assigned area. Currently, our program staff are assigned
        puppies in their geographic proximity and boundaries. They are responsible for overseeing each puppy's training,
        health, and raising until the dog comes in for training at the appropriate time. All our advisors have excellent
        communication, training, and dog handling skills. They are kept up to date on new health and training news. 
        Your advisor is expected to guide you through puppy raising by answering your questions, offering support, 
        teaching obedience and socialization classes, and helping you and your puppy reach your full potential together.
      </p>

      <div className="program-rep-grid">
        {program_reps.map((rep) => (
          <div className="rep-card" key={rep.name}>
          <img src={rep.image} alt={rep.name} className="rep-image" />
          <div className="rep-info">
            <h3>{rep.name}</h3>
          </div>
        </div>
        ))}
      </div>

      <br></br>
      <h3>Area Coordinators @ UMD</h3>
      <p> 
        Area coordinators are selected individuals who have shown further interest in being involved with the Guide Dog
        Foundation. They hold themselves and others to a high standard of excellence, have shown their respect and 
        understanding for puppy raising and training guide dogs, have excellent communication skills, and are ambassadors
        of our mission. Area coordinators are assistants to advisors. They are volunteers who would like to dedicate 
        more time to our mission. ACs are often responsible for teaching classes, being a point of contact for our 
        raisers, and offering support to their assigned puppy raisers.
      </p>

      <br></br>
      <h3>Head Group Leaders</h3>
      <p>
        Group leaders are a vital part of our organization. Again, they are volunteers who want to offer more than just 
        puppy raising to the Foundation. They are learning to become area coordinators and offer support to puppy 
        raisers alongside area coordinators. Our Group Leaders are the main point of contact for our puppy sitters.
      </p>

    </main>
  )

}

export default OurLeaders