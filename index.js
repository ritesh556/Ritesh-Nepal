
const editableText= document.getElementById('editable-text');

if(localStorage.getItem('savedText')){
  editableText.textContent=localStorage.getItem('savedText');
}


editableText.addEventListener('input', function(){

  localStorage.setItem('savedText',this.textContent);
})

function handleKeyPress(event) {
  if (event.keyCode === 13) { // Check if Enter key is pressed
    event.preventDefault(); // Prevent the default form submission
    
    // Call your search function here
    performSearch();
  }
}

function performSearch() {
  // Get the search query from the input field
  var searchQuery = document.getElementById('search').value;
  
  // Do something with the search query (e.g., send it to a server, display search results)
  console.log('Search query:', searchQuery);
}

