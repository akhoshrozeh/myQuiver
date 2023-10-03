// import React from "react";
// import MyNav from "./quiverNavBar";
// import FSPreview from "./FSPreview";
// import WantedFilter from './wantedFilter';
// import WantedPreview from "./wantedPreview";


// class Wanted extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             WantedBoards: [], 
//             filteredWantedBoards: [],
//             priceFiltered: [],
//             volumeFiltered: [],
//             lengthFiltered: [],

//             // ** This should route to the database of wanted boards
//             endpoint: "http://localhost:3005/WantedBoards",

//             // these are the filters
//             price: NaN,
//             volume: NaN, 
//             length: NaN,

            
//         };
//         this.onFilterValuesUpdated = this.onFilterValuesUpdated.bind(this)
//     }

//     async componentDidMount() {
//         try {
//             // console.log("component did mount")
//             const res = await fetch(this.state.endpoint)
//             this.setState({WantedBoards: await res.json()})
//             this.setState({filteredWantedBoards: this.state.WantedBoards})
//             this.setState({priceFiltered: this.state.WantedBoards})
//             this.setState({volumeFiltered: this.state.WantedBoards})
//             this.setState({lengthFiltered: this.state.WantedBoards})
//         }

//         catch (e) {
//             console.log('error fetching: ', e)
//         }
        
//     }

//     onFilterValuesUpdated = async (filters) => {
//         // console.log(filters);

//         // update the state
//         if (filters[0] == 'vol') {
//             await this.setState({volume: filters[1]})

//             if (this.state.volume != null && !isNaN(parseInt(this.state.volume))) {
//                 await this.setState({
//                     volumeFiltered: this.state.WantedBoards.filter((board) => {
//                         return board.minVolume <= this.state.volume && this.state.volume <= board.maxVolume
//                     })
//                 })
//             }
//             else {
//                 await this.setState({volumeFiltered: this.state.WantedBoards})
//             }
//         }

//         else if (filters[0] == 'len') {
//             await this.setState({length: filters[1]})

//             if (this.state.length != null && !isNaN(parseInt(this.state.length))) {
//                 await this.setState({
//                     lengthFiltered: this.state.WantedBoards.filter((board) => {
//                         return  board.minLength <= this.state.length && this.state.length <= board.maxLength
//                     })
//                 })
//             }
//             else {
//                 await this.setState({lengthFiltered: this.state.WantedBoards})
//             }
            
//         }
        
//         else if (filters[0] == 'price') {
//             await this.setState({price: filters[1]})

//             if (this.state.price != null && !isNaN(parseInt(this.state.price))) {
//                 await this.setState({
//                     priceFiltered: this.state.WantedBoards.filter((board) => {
//                         return board.minPrice <= this.state.price && this.state.price <= board.maxPrice
//                     })
//                 })

//                 // console.log(this.state.price, this.state.priceFiltered);
//             }
//             else {
//                 await this.setState({priceFiltered: this.state.WantedBoards})
//             }

//         }

//         // get intersection of all 3 filter arrays

//         // console.log(this.state.price, this.state.length, this.state.volume);
//         // console.log(this.state.priceFiltered.length, this.state.lengthFiltered.length, this.state.volumeFiltered.length);

//         const i1 = this.state.priceFiltered.filter(obj => this.state.volumeFiltered.find(o => o.postID === obj.postID));
//         const i2 = i1.filter(obj => this.state.lengthFiltered.find(o => o.postID === obj.postID));

//         await this.setState({
//             filteredWantedBoards: i2
//         })
//     }



    
   
//     render() {
//         return (

//         <div>
//             <MyNav></MyNav>
//             <span className="wanted-instructions">
//                 Enter the specs of a board you have and want to sell. 
//             </span>

//             <WantedFilter filterValuesSelected={this.onFilterValuesUpdated}></WantedFilter>
//             <ul>
//                 {this.state.filteredWantedBoards.map(function(b){
//                     return <li key={b.postID}>
//                         <WantedPreview  postID={b.postID}
//                                     brand={b.brand} 
//                                     model={b.model} 
//                                     type={b.type} 
//                                     minLength={b.minLength} 
//                                     maxLength={b.maxLength} 
//                                     minVolume={b.minVolume}
//                                     maxVolume={b.maxVolume}
//                                     minPrice={b.minPrice}
//                                     maxPrice={b.maxPrice}>
//                         </WantedPreview></li>
//                 })}
//             </ul>

//         </div>
//         )
//     }
// }

// export default Wanted;