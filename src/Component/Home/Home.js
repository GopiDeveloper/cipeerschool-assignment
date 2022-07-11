import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';
import './Home.css';
const resUrl = "https://cipheer.herokuapp.com/items"

class Home  extends Component {
    constructor(props) {
        super(props);
        this.state={
            location:''
        };
    }

    render() {
        return(
            <>
                <div className="container">
                    <div className="jumbotron">
                       <QuickDisplay quickData={this.state.location}/>
                    </div>
                </div>
            </>
        )
    }


    componentDidMount(){
        fetch(resUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Home;