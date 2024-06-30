document.addEventListener('DOMContentLoaded', function() {
    const preferenceForm = document.getElementById('preferenceForm');
    const recommendationsSection = document.getElementById('recommendations');
    const destinationList = document.getElementById('destinationList');
  
    preferenceForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get user preferences
      const budget = parseFloat(document.getElementById('budget').value);
      const duration = document.getElementById('duration').value;
      const interests = document.getElementById('interests').value.trim().toLowerCase().split(',');
  
      // Simulated recommendation data (replace with actual recommendation logic)
      const recommendations = generateRecommendations(budget, duration, interests);
  
      // Display recommendations
      displayRecommendations(recommendations);
    });
  
    function generateRecommendations(budget, duration, interests) {
      // Simulated data for recommendations (replace with real data or API call)
      const destinations = [
        { name: 'Paris', country: 'France', budget: 1500, duration: 'medium', interests: ['culture', 'history', 'cuisine'], image: 'paris.jpg', description: 'Experience the romantic charm of Paris with its iconic landmarks like the Eiffel Tower and Louvre Museum.' },
        { name: 'Tokyo', country: 'Japan', budget: 2000, duration: 'long', interests: ['culture', 'technology', 'cuisine'], image: 'tokyo.jpg', description: 'Explore the bustling metropolis of Tokyo, known for its futuristic technology and vibrant street life.' },
        { name: 'Bali', country: 'Indonesia', budget: 1000, duration: 'short', interests: ['beach', 'nature', 'relaxation'], image: 'bali.jpg', description: 'Relax on the beautiful beaches of Bali and immerse yourself in its rich cultural heritage.' },
        { name: 'New York City', country: 'USA', budget: 1800, duration: 'medium', interests: ['city life', 'culture', 'shopping'], image: 'nyc.jpg', description: 'Discover the excitement of New York City with its iconic skyscrapers, Broadway shows, and diverse neighborhoods.' },
        { name: 'Cape Town', country: 'South Africa', budget: 2500, duration: 'long', interests: ['nature', 'wildlife', 'adventure'], image: 'cape-town.jpg', description: 'Embark on an adventure in Cape Town, where you can explore stunning natural landscapes and encounter diverse wildlife.' }
      ];
  
      // Filter destinations based on user preferences
      const filteredDestinations = destinations.filter(destination => {
        return (
          (budget >= destination.budget) &&
          (duration === 'short' && destination.duration === 'short' ||
           duration === 'medium' && (destination.duration === 'medium' || destination.duration === 'long') ||
           duration === 'long' && destination.duration === 'long') &&
          interests.some(interest => destination.interests.includes(interest.trim()))
        );
      });
  
      return filteredDestinations;
    }
  
    function displayRecommendations(recommendations) {
      // Clear previous recommendations
      destinationList.innerHTML = '';
  
      // Display each recommendation
      recommendations.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.classList.add('destination-card');
        destinationCard.innerHTML = `
          <h3>${destination.name}, ${destination.country}</h3>
          <img src="${destination.image}" alt="${destination.name}">
          <p>${destination.description}</p>
          <p><strong>Budget:</strong> $${destination.budget}</p>
          <p><strong>Duration:</strong> ${destination.duration}</p>
          <p><strong>Interests:</strong> ${destination.interests.join(', ')}</p>
        `;
        destinationList.appendChild(destinationCard);
      });
  
      // Show recommendations section
      recommendationsSection.style.display = 'block';
    }
  });
  