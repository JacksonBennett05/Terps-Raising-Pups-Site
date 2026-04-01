import './OurPups.css'





function OurPups() {
  const dogs = [
    {
     name: "Joey",
     image: "/joey.png",
     description: "Joey is currently in training and learning the foundations for future service work.",
  
    }, 
    {
      name: "Hope",
      image: "/hope.png",
      description: "Hope is working on obedience, socialization, and confidence in public settings.",
    },
    {
      name: "Tricky",
      image: "/tricky.png",
      description: "Tricky is developing the skills needed to move forward in her service dog journey.",
    },
  ]; 

  return (
    <main className="started">
      <h1>Our Pups</h1>
      <p>Our dogs you see on campus every day who are currently in training</p>

      <div className="dogs-grid">
        {dogs.map((dog) => (
          <div className="dog-card" key={dog.name}>
            <img src={dog.image} alt={dog.name} className="dog-image" />
            <div className="dog-info">
              <h3>{dog.name}</h3>
              <p>{dog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default OurPups;