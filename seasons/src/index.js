import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props){
        super(props);
        // THIS IS THE ONLY TIME WE DIRECT ASSIGNMENT
        this.state = { lat: null }; // state object

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
            // we called setState()
                this.setState({ lat: position.coords.latitude });
            }, // positive callback!
            (error) => console.log(error)
        );

    }

    // React says we have to define render!!!!
    render(){
        return <div> Latitude: {this.state.lat} </div>;
    }
}



ReactDOM.render(<App/>, document.querySelector("#root"));