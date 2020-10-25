import React from 'react';
import App from '../App';
import { MovieItem } from './movieItem';


export class Movies extends React.Component {

    render() {
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}