// import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import '../App.css';



// class WantedFilter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event) {
//         this.props.filterValuesSelected([event.target.name, event.target.value]);  
//         // console.log([event.target.name, event.target.value])
//     }


//     render() {

//         return <div>
//                 <Form className="FSFilter" onChange={this.handleChange}>
//                     <div className="price-filter">
//                         <Form.Group>
//                             <Form.Label>Price</Form.Label>
//                             <Form.Control type="number"  min="0" name="price" placeholder="USD"></Form.Control>
//                         </Form.Group>
//                     </div>
//                     <div className="volume-filter">
//                         <Form.Group>
//                             <Form.Label>Volume</Form.Label>
//                             <Form.Control type="number" min="0" name="vol" placeholder="Liters"></Form.Control>
//                         </Form.Group>
//                     </div>
//                     <div className="length-filter">
//                         <Form.Group>
//                             <Form.Label>Length</Form.Label>
//                             <Form.Control type="number" min="0" name="len" placeholder="Inches"></Form.Control>
//                         </Form.Group>
//                     </div>
//                     {/* <div className="sort-by-filter">
//                         <Form.Select name="sort-by">
//                             <option>Sort by</option>
//                             <option value="plh">Price (Low to High)</option>
//                             <option value="phl">Price (High to Low)</option>
//                             <option value="vlh">Volume (Low to High)</option>
//                             <option value="vhl">Volume (High to Low)</option>
//                             <option value="llh">Length (Low to High)</option>
//                             <option value="lhl">Length (High to Low)</option>

//                         </Form.Select>
//                     </div> */}
                    
//                 </Form>
//         </div>
//     }
// }

// export default WantedFilter;