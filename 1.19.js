class Octopi extends React.Component{
    render(){
        return(
            <div>
                <p>Well, that's a bunch of octopi...</p>
                <div className=".flex-container">
                    <img src="https://images.unsplash.com/photo-1558729924-714b0a8e0574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
                    <img src="https://images.unsplash.com/photo-1547716752-9a0331effbef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2021&q=80" />
                    <img src="https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Octopi />,document.getElementById("root"));