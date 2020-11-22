import React from 'react';
import App from '../App';
import { Movies } from './movies';
import axios from 'axios';


export class Read extends React.Component {


    state = {
        movies: []


    };
    //Retrieves the movies api
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(

                (response) => {
                    this.setState({ movies: response.data})
                }
            )
            .catch(

                (error) => { console.log(error) }
            );
    }
    //Displays the movies on page
    render() {
        return (
            <div>
                <Movies movies={this.state.movies}></Movies>
            </div>

        );
    }
}