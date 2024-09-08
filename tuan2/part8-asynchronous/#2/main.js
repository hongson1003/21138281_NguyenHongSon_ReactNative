// Function to create an image element and return a promise
const createImage = (imgPath) => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = imgPath;
  
      img.onload = () => {
        // Append the image to the DOM element with class 'images'
        document.querySelector('.images').appendChild(img);
        // Resolve the promise with the image element
        resolve(img);
      };
  
      img.onerror = () => {
        // Reject the promise if there's an error loading the image
        reject(new Error('Image failed to load'));
      };
    });
  };
  
  // Function to pause execution for a given amount of time
  const wait = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  };
  
  // Global variable to keep track of the current image
  let currentImage;
  
  // Function to handle image loading, waiting, and hiding
  const handleImages = async () => {
    try {
      // Load the first image
      currentImage = await createImage('img/image1.jpg');
      
      // Wait for 2 seconds
      await wait(2);
      
      // Hide the first image
      currentImage.style.display = 'none';
  
      // Load the second image
      currentImage = await createImage('img/image2.jpg');
      
      // Wait for 2 seconds
      await wait(2);
      
      // Hide the second image
      currentImage.style.display = 'none';
  
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  
  // Start handling images
  handleImages();
  