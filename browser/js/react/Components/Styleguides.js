import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Row, Col, Image } from "react-bootstrap";
import AddStyleguide from "./AddStyleguide";

/* -----------------    COMPONENT     ------------------ */

class Styleguide extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      addStyleguide: false, 
      selectedStyleguide: null
    };
    this.onAddStyleGuideClick = this.onAddStyleGuideClick.bind(this);
  }

  onAddStyleGuideClick(event) {
    this.setState({
      addStyleGuide: true
    });
  }

  selectStyleguide(event){
    let value = event.target.value;
    this.setState({
      selectedStyleguide: value.id
    })
  }

  render() {
    let styleguides = this.props.styleguides || [];

    return (
      <div>
        <h4>Styleguides</h4>
        <Row>
          {styleguides &&
            styleguides.map((col, i) => {
              return (
                <Col md={2} key={i}>
                  <div
                    className="hvr-overline-reveal hvr-glow"
                    style={{
                      border: "1px solid black",
                      marginTop: "50px"
                    }}
                  onClick = {this.selectStyleguide}
                  >
                    <Image
                      src="http://via.placeholder.com/200x200"
                      responsive
                      rounded
                      style={{ marginTop: "10px" }}
                    />

                    <p>{col.name}</p>
                  </div>
                </Col>
              );
            })}
          <Col md={2}>
            <div
              className="hvr-overline-reveal hvr-glow"
              style={{
                border: "1px solid black",
                marginTop: "50px",
                height: "162px"
              }}
              onClick={this.onAddStyleGuideClick}
            >
              <p>New Styleguide</p>
            </div>
          </Col>
        </Row>
        {this.state.addStyleGuide && <AddStyleguide />}
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapStateToProps = ({ styleguides }) => ({ styleguides });

// // equivalent to:
// const mapState = (state) => {
//   return {
//     currentUser: state.styleguides
//   };
// };

export default connect(mapStateToProps)(Styleguide);

// {
//   styleguides && styleguides.map(styleguide => {
//     return(<div key = {styleguide.id}>
//       <h4>{styleguide.name}</h4>
//       <ul>
//       <li>backdrop color is: {styleguide.backdrop}</li>
//       <li>captions style is: {styleguide.captions}</li>
//       <li style = {{'marginBottom':'30px'}}>titles style is: {styleguide.titles}</li>
//       </ul>
//     </div>
//   );
//     })
// }

// function partition(input, spacing) {
//   var output = [];

//   for (var i = 0; i < input.length; i += spacing) {
//     output[output.length] = input.slice(i, i + spacing);
//   }

//   return output;
// }
