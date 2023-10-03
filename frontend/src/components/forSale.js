import React from "react";
import MyNav from "./quiverNavBar";
import FSPreview from "./FSPreview";
import ForsaleFilter from './forsaleFilter.js'



class ForSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FSBoards: [], 
            filteredFSBoards: [],
            endpoint: "http://localhost:3004/FSBoards",

            // these are the filters
            minPrice: 0, 
            maxPrice: 9007199254740991, 
            minVol: 0,
            maxVol: 9007199254740991, 
            minLen: 0, 
            maxLen: 9007199254740991, 

            sort: 'Sort by' // default select
        };

        this.setState = this.setState.bind(this);
    }

    async componentDidMount() {
        try {
            // console.log("component did mount")
            const res = await fetch(this.state.endpoint)
            this.setState({FSBoards: await res.json()})
            this.setState({filteredFSBoards: this.state.FSBoards})
        }

        catch (e) {
            console.log('error fetching: ', e)
        }
        
    }

    onFilterValuesUpdated = async (filters) =>  {

        // a change in filter, NOT the sorting input
        if (filters[0] != 'sort-by') {
            // if we delete the filter value, reset it to original value instead of leaving as 'NaN'
            if (isNaN(parseInt(filters[1]))) {
                if (filters[0].substring(0,3) == 'min') {
                    await this.setState({
                        [filters[0]]: 0
                    })
                }
                else {
                    await this.setState({
                        [filters[0]]: 9007199254740991
                    })
                }
            }
    
            // otherwise set it to what was entered
            else {
                await this.setState({
                    [filters[0]]: parseInt(filters[1])
                })
            }
        }


        // we're changing the sort-by select input
        else {
            // update the state
            await this.setState({
                sort: filters[1]
            })

            if (this.state.sort == "Sort by") {
                // do nothing
            }

            else {

                // function compare(a, b) {
                //     if (a.price)
                // }
                const metric = this.state.sort[0];
                const dir = this.state.sort[1]
                if (metric == 'p') {
                    if (dir == 'l') {
                        this.state.FSBoards.sort( (a, b) =>
                            a.price - b.price
                        )
                    }
                    else {
                        this.state.FSBoards.sort( (a, b) =>
                            b.price - a.price
                        )
                    }

                }

                else if (metric == 'v') {
                    if (dir == 'l') {
                        this.state.FSBoards.sort( (a, b) =>
                            a.volume - b.volume
                        )
                    }
                    else {
                        this.state.FSBoards.sort( (a, b) =>
                            b.volume - a.volume
                        )
                    }
                }

                else if (metric == 'l') {
                    if (dir == 'l') {
                        this.state.FSBoards.sort( (a, b) =>
                            a.length - b.length
                        )
                    }
                    else {
                        this.state.FSBoards.sort( (a, b) =>
                            b.length - a.length
                        )
                    }
                }
            }
            
        }

        // check the sort-by
        // if (this.state.sort == 'Sort by') {}
        // else {
        //     const metric = this.state.sort
        // } 
        

        // now filter states are set, use them to filter the results
        this.setState({
            filteredFSBoards: this.state.FSBoards.filter((board) => {
                // console.log(board.price, this.state.minPrice, this.state.maxPrice )
                // console.log(board.volume, this.state.minVol, this.state.maxVol )
                // console.log(board.length, this.state.minLength, this.state.maxLength )

                return (board.price >= this.state.minPrice &&
                        board.price <= this.state.maxPrice &&
                        board.volume >= this.state.minVol &&
                        board.volume <= this.state.maxVol &&
                        board.length >= this.state.minLen &&
                        board.length <= this.state.maxLen);
            })

        })
    }

    
    render() {
        // console.log('rendered')
        return <div>

            <MyNav></MyNav>
            <ForsaleFilter filterValuesSelected={this.onFilterValuesUpdated}></ForsaleFilter>
            <ul>
                {this.state.filteredFSBoards.map(function(b){
                    return <li key={b.postID}>
                        <FSPreview  postID={b.postID}
                                    brand={b.brand} 
                                    model={b.model} 
                                    type={b.type} 
                                    length={b.length} 
                                    volume={b.volume}
                                    price={b.price}>
                        </FSPreview></li>
                })}
            </ul>
        </div>
    }
}

export default ForSale;