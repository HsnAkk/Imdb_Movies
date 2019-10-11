import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            
            this.props.movieList.map((movieItem) => (
                <tr key={movieItem[0]}>
                    <td>{movieItem[0]}</td>
                    <td>{movieItem[1]}</td>
                    <td>{movieItem[2]}</td>
                    <td>{movieItem[3]}</td>
                    <td>{movieItem[4]}</td>
                </tr>
            ))
        )
    }
}

export default Movie;