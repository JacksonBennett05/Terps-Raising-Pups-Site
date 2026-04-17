import './OurPups.css'

function OurPups() {
  const dogs = [
    {
     name: "Joey",
     image: "/dogs/joey.png",
     description: "Joey is a 10 months old  yellow lab and currently training to be a Guide Dog.",
  
    }, 
    {
      name: "Hope",
      image: "/dogs/hope.png",
      description: "Hope just turned 1 year old and is also training to be a Guide Dog.",
    },
    {
      name: "Tricky",
      image: "/dogs/tricky.png",
      description: "Tricky is a 10 month old Lab/Retriver mix training to be a Guide Dog.",
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