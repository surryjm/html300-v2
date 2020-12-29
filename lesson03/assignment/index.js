$(function() {
  
  // JSON from data.json file
  const employeesJSON = '[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","Node","Express"]},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl":"barbara.linkedinprofile.com","codeLanguages":["HTML","JavaScript","C","Go"]},{"name":"Javier Hernandez","jobTitle":"User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com","codeLanguages":["HTML","CSS"]},{"name":"Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","React","Vue","Redux"]}]';
  
  // Parse the JSON and put into "employees" variable
  const employees = JSON.parse(employeesJSON);
  
  // Find the "template-hook" class in index.html to insert the data/html
  const container = document.querySelector('.template-hook');

  // Use forEach method to apply the function per element
  employees.forEach(function(el) {
    
    // Create the "div container" to contain each object in the JSON
    const divContainer = document.createElement('div');
    
    // Add the "container" class to each "div container"
    divContainer.classList.add('container');
    
    // Use "innerHTML" to set the html content for each "div container"
    divContainer.innerHTML = `
    <div class="left-column">
      <img class="left-column_headshot" alt="Headshot" src="img/headshot.jpg" width="224" height="221">
        <div class="left-column_name-title">
          <h1 class="left-column_name">${el.name}</h1>
          <p class="left-column_title">${el.jobTitle}</p>
        </div>
    </div>
    <div class="right-column">
      <div class="right-column_fields">
          <p class="right-column_field-title">Company:</p>
          <p class="right-column_field-value">${el.company}</p>
        </div>
        <div class="right-column_fields">
          <p class="right-column_field-title">Experience:</p>
          <p class="right-column_field-value">${el.experience}</p>
        </div>
        <div class="right-column_fields"> 
          <p class="right-column_field-title">School:</p>
          <p class="right-column_field-value">${el.experience}</p>
        </div>
        <div class="right-column_fields">
          <p class="right-column_field-title">Major:</p>
          <p class="right-column_field-value">${el.major}</p>
        </div>
        <div class="right-column_fields">
          <p class="right-column_field-title">Email:</p>
          <p class="right-column_field-value">${el.email}</p>
        </div>
        <div class="right-column_fields">
          <p class="right-column_field-title">Skills:</p>
          <p class="right-column_field-value">${el.codeLanguages.join(', ')}</p>
        </div>
        <div class="right-column_linkedin-img-link">
          <img alt="LinkedIn-icon" src="img/linkedin.svg" width="32" height="32">
          <p>${el.linkedInUrl}</p>
        </div>
    `;
    // Append the "div container" to the container for the "template hook"
    container.append(divContainer);
  });
});
  


