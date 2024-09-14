//SPOTLIGHT CARD WHEN HOVERING CORRESPONDING LIST TEXT IN SUMMARY CARD

// Get the container with the list items
const listContainer = document.querySelector('.summary');

// Get all list items inside the list container
const listItems = listContainer.querySelectorAll('.summary li');

// Get all sibling containers
const containers = document.querySelectorAll('.child-container[data-container]');

// Add mouseover and mouseout events to each list item
listItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Get the target container based on the data attribute
    const targetContainerId = item.getAttribute('data-target');
    const targetContainer = document.querySelector(`.child-container[data-container="${targetContainerId}"]`);
    
    // Get the 'spotlight' class rule in style.css for target container
    if (targetContainer) {
      targetContainer.classList.add('spotlight');
    }
  });

  item.addEventListener('mouseout', () => {
    // Get the target container based on the 'target' attribute
    const targetContainerId = item.getAttribute('data-target');
    const targetContainer = document.querySelector(`.child-container[data-container="${targetContainerId}"]`);
    
    // Remove the spotlight class from the target container
    if (targetContainer) {
      targetContainer.classList.remove('spotlight');
    }
  });
});



// CHANGE OPACITY OF ALL SIBLING CONTAINERS THAT ARE NOT IN FOCUS

// Get all sibling containers with the class "child-containers"
const siblings = document.querySelectorAll('.child-container');

// Loop through each sibling container
siblings.forEach(sibling => {
  // Add a mouseover event to detect when a container is hovered
  sibling.addEventListener('mouseover', () => {
    let prevSibling = sibling.previousElementSibling;
    let nextSibling = sibling.nextElementSibling;

    // Traverse through all previous siblings and change their opacity to 60%
    while (prevSibling) {
      // Skip the summary container with the class "summary"
      if (!prevSibling.classList.contains('summary')) { 
        prevSibling.style.opacity = '0.6';
      }
      prevSibling = prevSibling.previousElementSibling;
    }

    // Traverse through all following siblings and change their opacity to 60%
    while (nextSibling) {
      // Skip the summary container with the class "summary"
      if (!nextSibling.classList.contains('summary')) {
        nextSibling.style.opacity = '0.6';
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });

  // Add a mouseout event to revert the opacity when hover ends
  sibling.addEventListener('mouseout', () => {
    let prevSibling = sibling.previousElementSibling;
    let nextSibling = sibling.nextElementSibling;

    // Traverse through previous siblings and restore their opacity
    while (prevSibling) {
      if (!prevSibling.classList.contains('summary')) {
        prevSibling.style.opacity = '1'; // Reset opacity to 100%
      }
      prevSibling = prevSibling.previousElementSibling;
    }

    // Traverse through next siblings and restore their opacity
    while (nextSibling) {
      if (!nextSibling.classList.contains('summary')) {
        nextSibling.style.opacity = '1'; // Reset opacity to 100%
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});


