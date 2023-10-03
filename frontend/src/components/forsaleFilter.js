import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';



class ForsaleFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.props.filterValuesSelected([event.target.name, event.target.value]);  
        // console.log([event.target.name, event.target.value])
    }


    render() {

        return <div >
                <Form className="FSFilter" onChange={this.handleChange}>
                    <div className="price-filter">
                        <Form.Group>
                            <Form.Label>Price Range</Form.Label>
                            <Form.Control type="number"  min="0" name="minPrice" placeholder="Minimum"></Form.Control>
                            <Form.Control type="number"  min="0" name="maxPrice" placeholder="Maximum"></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="volume-filter">
                        <Form.Group>
                            <Form.Label>Volume Range</Form.Label>
                            <Form.Control type="number" min="0" name="minVol" placeholder="Minimum"></Form.Control>
                            <Form.Control type="number" min="0" name="maxVol" placeholder="Maximum"></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="length-filter">
                        <Form.Group>
                            <Form.Label>Length Range</Form.Label>
                            <Form.Control type="number" min="0" name="minLen" placeholder="Minimum"></Form.Control>
                            <Form.Control type="number" min="0" name="maxLen" placeholder="Maximum"></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="sort-by-filter">
                        <Form.Select name="sort-by">
                            <option>Sort by</option>
                            <option value="plh">Price (Low to High)</option>
                            <option value="phl">Price (High to Low)</option>
                            <option value="vlh">Volume (Low to High)</option>
                            <option value="vhl">Volume (High to Low)</option>
                            <option value="llh">Length (Low to High)</option>
                            <option value="lhl">Length (High to Low)</option>

                        </Form.Select>
                    </div>
                    
                </Form>
        </div>
    }
}

export default ForsaleFilter;