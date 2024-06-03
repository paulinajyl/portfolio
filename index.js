function toggleMenu(){
    const menu=document.querySelector(".sandwichbar");
    const icon=document.querySelector(".sandwich-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// for scroll
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
  }
  
  // Create a variable to select all elements with the id 'revealable'
  let revealableContainers = document.querySelectorAll('.revealable');
  
  // Create a function called 'reveal'
  const reveal = () => {
    // Loop through each revealableContainer
    for (let i = 0; i < revealableContainers.length; i++) {
      // Save the height of the window
      let windowHeight = window.innerHeight;
  
      // Find the top of the revealable container
      let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
  
      // Check if the topOfRevealableContainer should be loaded in
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        // Add the active class to the revealableContainer's classlist
        revealableContainers[i].classList.add('active');
      } else {
        // Remove the active class from the revealableContainer's classlist
        revealableContainers[i].classList.remove('active');
      }
    }
  }
  
  // Add 'reveal' as an event listener to the window on 'scroll'
  window.addEventListener('scroll', reveal);