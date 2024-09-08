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
  
  // Async function to load images, wait, and hide them
  const loadNPause = async () => {
    try {
      // Load the first image
      let currentImage = await createImage('img/image1.jpg');
      
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
  
  // Start loading and pausing images
  loadNPause();

  
  // Async function to load all images from an array of image paths
const loadAll = async (imgArr) => {
    try {
      // Create an array of promises
      const imgs = imgArr.map(imgPath => createImage(imgPath));
      
      // Wait for all images to be loaded
      const loadedImgs = await Promise.all(imgs);
      
      // Log the loaded images to the console
      console.log(loadedImgs);
      
      // Add the 'parallel' class to all images
      loadedImgs.forEach(img => img.classList.add('parallel'));
  
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  
  // Test data for loading multiple images
  const imagePaths = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
  
  // Load all images
  loadAll(imagePaths);
  