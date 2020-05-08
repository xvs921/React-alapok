const puppyPicture = {
    src: 'https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3107&q=80',
    author: 'https://unsplash.com/@bk010397',
  }
  
  const puppies = ( 
    // Write your code inside the div tag. Don't modify stuff outside of it.
    <div>
      <h1 className="heading">Some adorable puppies</h1>
      <img src={puppyPicture.src} alt="labradoodles" />
      <p><a href={puppyPicture.author}>Source</a></p>
    </div>
  )
  
  ReactDOM.render(puppies, document.getElementById('root'));