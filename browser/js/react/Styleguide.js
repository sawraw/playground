import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AddStyleguide from './Components/AddStyleguide';


/* -----------------    COMPONENT     ------------------ */

class Styleguide extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    let styleguides = this.props.styleguides || [];
    let name;
    styleguides.length ? name = styleguides[0].name : name = "no styleguides";
    return (
      <div>
        <AddStyleguide />
        <h1 style = {{'marginBottom':'50px'}}>Styleguides</h1>
        {
          styleguides && styleguides.map(styleguide => { 
            return(<div key = {styleguide.id}> 
              <h4>{styleguide.name}</h4>
              <ul>
              <li>backdrop color is: {styleguide.backdrop}</li>
              <li>captions style is: {styleguide.captions}</li>
              <li style = {{'marginBottom':'30px'}}>titles style is: {styleguide.titles}</li>
              </ul>
            </div> 
          );
            })
        }


      </div>
    );
  }

}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({styleguides}) => ({styleguides});

// // equivalent to:
// const mapState = (state) => {
//   return {
//     currentUser: state.styleguides
//   };
// };

export default connect(mapStateToProps)(Styleguide);

