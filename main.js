//SPOTLIGHT CARD WHEN HOVERING CORRESPONDING LIST TEXT IN SUMMARY CARD


function handleListHover() {
// Get the container with the list items
const listContainer = document.querySelector('.summary');

// Get all list items inside the list container
const listItems = listContainer.querySelectorAll('.summary li');

// Get all sibling containers
// const containers = document.querySelectorAll('.child-container[data-container]');

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
}



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


//CHANGE CONTENT OF SUMMARY CONTAINER

  // Get all the child containers and the summary container
  const containers = document.querySelectorAll('.child-container');
  const targetContainer = document.getElementById('summary-points');
  

  // Store original content of the summary container
  const originalContent = targetContainer.innerHTML;

  // New content for each container {container id: content[style=class'spotlight-list']}
    const contentText = {
      html5content: 
      `
    <ul class="spotlight-list"> 
        <li>Latest version of HTML (Hypertext Markup Language).</li>
        <li>Defines the structure and content of web pages.</li>
        <li>Supports multimedia elements (audio, video) without the need for external plugins.</li>
        <li>Introduces semantic elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;header&gt;</code> for better SEO and accessibility.</li>
        <li>Improved form controls (date pickers, sliders, etc.) and offline storage with local storage and session storage.</li>
    </ul>

      `,
      css3content: `
    
    <ul class="spotlight-list">
        <li>The latest version of Cascading Style Sheets for designing and laying out web pages.</li>
        <li>Adds new features such as animations, transitions, and transforms for interactive design.</li>
        <li>Supports media queries for responsive design, making websites adaptable to different screen sizes and devices.</li>
        <li>New modules such as Flexbox and Grid for creating complex layouts with ease.</li>
        <li>Enhanced selectors and properties for better control over styling.</li>
    </ul>
      `,
      javascriptcontent: `
        
    <ul class="spotlight-list">
        <li>A high-level, dynamic programming language used to make web pages interactive.</li>
        <li>Allows for real-time updates, form validation, animations, and event handling.</li>
        <li>Works on both client-side and server-side with environments like Node.js.</li>
        <li>Supports APIs for interacting with web elements, making asynchronous calls, and handling JSON data.</li>
        <li>Frequently used alongside libraries (e.g., jQuery) and frameworks (e.g., React, Angular, Vue) for more efficient development.</li>
    </ul>
      `,
      gitpodcontent: `
      
      
      <ul class="spotlight-list">
          <li>Cloud-based IDE that runs in a web browser.</li>
          <li>Automatically creates and configures development environments for different projects.</li>
          <li>Supports real-time collaboration, allowing multiple developers to work on the same project simultaneously.</li>
          <li>Integrates with popular version control systems like GitHub, GitLab, and Bitbucket.</li>
          <li>Provides features like pre-built environments, code suggestions, and integrated debugging tools.</li>
      </ul>
      `
      ,
      gitcontent: `  
      
     
      <ul class="spotlight-list">
          <li>Distributed version control system that allows for branching, merging, and tracking changes.</li>
          <li>Supports offline work by keeping a full copy of the repository on each developer's local machine.</li>
          <li>Provides tools for conflict resolution, history tracking, and code comparison.</li>
          <li>Popular commands include <code>git init</code>, <code>git commit</code>, <code>git branch</code>, and <code>git merge</code>.</li>
          <li>Widely used in open source and commercial projects for its flexibility and robustness.</li>
      </ul>
      `
      ,
      githubcontent: `  
      
      
      <ul class="spotlight-list">
          <li>Cloud-based platform that hosts Git repositories and provides collaboration tools.</li>
          <li>Offers features such as pull requests, code reviews, and issue tracking.</li>
          <li>Supports continuous integration and deployment through GitHub Actions.</li>
          <li>Enables collaboration through forks, branches, and collaborative discussions.</li>
          <li>Provides insights into project activity, including commit history, contributions, and repository statistics.</li>
      </ul>
      `
  };

 // Variable to store the last clicked container ID and the last clicked container element
 let lastClickedContainerId = null;
 let lastClickedContainerElement = null;

 // Add a click event listener to each card container (.child-container)
 containers.forEach(container => {
     container.addEventListener('click', function() {
         // Get the ID of the clicked container (e.g., 'html5content', 'css3content', etc.)
         const containerId = container.id;

         // Condition to check if the same container is clicked again, revert to original state
         if (lastClickedContainerId === containerId) {
             // Revert to the original content in the summary container
             targetContainer.innerHTML = originalContent;
             targetContainer.classList.remove('changed-content');

             // Remove the '.spotlight' style from the clicked container
             container.classList.remove('spotlight');

             // Reset the tracking variables
             lastClickedContainerId = null;
             lastClickedContainerElement = null;

             handleListHover();

         } else {
             // Change content of the summary container
             const newContent = contentText[containerId];
             targetContainer.innerHTML = newContent;
             targetContainer.classList.add('changed-content');

             // Remove the spotlight style from the previous clicked container
             if (lastClickedContainerElement) {
                 lastClickedContainerElement.classList.remove('spotlight');
             }

             // Apply the spotlight style to the clicked child container
             container.classList.add('spotlight');

             // Store the clicked container ID and element
             lastClickedContainerId = containerId;
             lastClickedContainerElement = container;
         }
     });
 });

 handleListHover();

