import React, { Component } from 'react';
import { CardGroup, Table } from 'react-bootstrap';
import Category from './Category';
import Movie from './Movie';

import history from '../images/history.jpg';
import sport from '../images/sport.jpeg';
import music from '../images/music.jpg';
import mystery from '../images/mystery.jpg';
import crime from '../images/crime.jpg';


class AllCategories extends Component {
    constructor (props) {
        super(props);
        this.state = {
            display : false,
            movies : [],
            movieCategories : {
                History: [[1, "Schindler's List", 8.9, 1993, "awesome movie, advice to all"], 
                          [2, "Harakiri", 8.7, 1962, "awesome movie, advice to all"], 
                          [3, "Ayla: The Daughter of War", 8.6, 2017, "awesome movie, advice to all"], 
                          [4, "Braveheart", 8.3, 1995, "awesome movie, advice to all" ], 
                          [5, "Amadeus", 8.3, 1984, "awesome movie, advice to all"]],
                
                Sport: [[1, "Dangal", 8.4, 2016, "awesome movie, advice to all"], 
                        [2, "The Flying Sikh", 8.2, 2013, "awesome movie, advice to all"], 
                        [3, "Paan Singh Tomar", 8.2, 2012, "awesome movie, advice to all"], 
                        [4, "Warrior", 8.2, 2011, "awesome movie, advice to all"], 
                        [5, "Chak de! India", 8.2, 2007, "awesome movie, advice to all"]],

                Music: [[1, "Whiplash", 8.5, 2014, "awesome movie, advice to all"], 
                        [2, "The Pianist", 8.5, 2002, "awesome movie, advice to all"], 
                        [3, "Coco", 8.4, 2017, "awesome movie, advice to all"], 
                        [4, "Amadeus", 8.3, 1984, "awesome movie, advice to all"], 
                        [5, "Green Book", 8.2, 2018,"awesome movie, advice to all"]],

                Mystery: [[1, "Spirited Away", 8.6, 2001, "awesome movie, advice to all"], 
                          [2, "The Green Mile", 8.6, 1999, "awesome movie, advice to all"], 
                          [3, "Se7en", 8.6, 1995, "awesome movie, advice to all"], 
                          [4, "The Prestige", 8.5, 2006, "awesome movie, advice to all"], 
                          [5, "The Usual Suspects", 8.5, 1995, "awesome movie, advice to all"]],

                Crime: [[1, "The Godfather", 9.2, 1972, "awesome movie, advice to all"], 
                        [2, "Joker", 9.0, 2019, "awesome movie, advice to all"], 
                        [3, "The Dark Knight", 9.0, 2008, "awesome movie, advice to all"], 
                        [4, "The Godfather - Part II", 9.0, 1974, "awesome movie, advice to all"], 
                        [5, "Pulp Fiction", 8.9, 1994, "awesome movie, advice to all"]]
            }

        }
    }

    getCategory = (category) => {
        this.setState ({
            display : !this.state.display
        });
        var key;
        for (key in this.state.movieCategories) {
            if (key === category) {
                this.setState({
                    movies : this.state.movieCategories[key]
                })
            }
        }
    }

    render () {
        let classToggle;
        this.state.display ? classToggle="my-3 text-center" : classToggle="d-none" 

        return (
            <div>
                <CardGroup className="mb-5">
                    <Category
                        image= {history}
                        category= 'History' 
                        description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        getCategory= {this.getCategory} 
                    />
                    <Category
                        image= {sport}
                        category= 'Sport' 
                        description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        getCategory= {this.getCategory} 
                    />
                    <Category
                        image= {music}
                        category= 'Music' 
                        description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        getCategory= {this.getCategory} 
                    />
                    <Category
                        image= {mystery}
                        category= 'Mystery' 
                        description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        getCategory= {this.getCategory} 
                    />
                    <Category
                        image= {crime}
                        category= 'Crime' 
                        description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        getCategory= {this.getCategory} 
                    />
                </CardGroup>

                <Table className={classToggle} striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Movie Name</th>
                            <th>IMDB Rating</th>
                            <th>Year</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <Movie movieList= {this.state.movies}
                        />
                    </tbody>
                </Table>
            </div>
        );
    }
}
  


export default AllCategories;
