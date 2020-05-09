function Kitten() {
    return (
      <div>
        <img src="https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="kitten" />
        <p>That's a cute kitten!</p>
      </div>
    )
  }
  
  // Write your code here. Don't modify the rest!
  ReactDOM.render(<Kitten />,document.getElementById("root"));