// Part 1: Function to fetch location and country based on coordinates
const whereAmI = async (lat, lng) => {
    try {
      // Step 1: Fetch location data from the geocoding API
      const geoRes = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
      
      // Step 2: Check if the request was successful
      if (!geoRes.ok) {
        throw new Error('Failed to fetch geocoding data');
      }
      
      // Step 3: Parse the JSON data
      const geoData = await geoRes.json();
      
      // Step 4: Log the location information
      const city = geoData.city;
      const country = geoData.country;
      console.log(`You are in ${city}, ${country}`);
      
      // Part 2: Use the received data to render the country
      // Fetch country data from the countries API
      const countryRes = await fetch(`https://restcountries.com/v3.1/name/${country}`);
      
      // Check if the request was successful
      if (!countryRes.ok) {
        throw new Error('Failed to fetch country data');
      }
      
      // Parse and display country data
      const countryData = await countryRes.json();
      console.log(`Country Data: ${JSON.stringify(countryData)}`);
      
    } catch (error) {
      // Step 5: Log errors to the console
      console.error('Error:', error.message);
    }
  };
  
  // Test data
  whereAmI(52.508, 13.381); // Coordinates 1
  whereAmI(19.037, 72.873); // Coordinates 2
  whereAmI(-33.933, 18.474); // Coordinates 3
  