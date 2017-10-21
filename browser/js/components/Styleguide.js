import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


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
      <h2>{name}</h2>
        {
          styleguides && styleguides.map(styleguide => { 
            return(<h1>
            {styleguide.name}
            </h1> );
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

