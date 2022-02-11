import React from "react";

class Kanye extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            items: [],
            DataLoaded: false
        };
    }

    componentDidMount(){
        fetch(
            "https://api.kanye.rest/"
        )
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataLoaded: true
            })
        })
    }

    render(){
        const {items} = this.state

        return(
            <div className = "Kanye">
                <h1>Kanye Quote of the Day: </h1>
                <h3>{items.quote}</h3>
            </div>
        )
    }
}

export default Kanye;