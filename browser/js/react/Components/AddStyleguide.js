import React from 'react';
import { connect } from 'react-redux';
import { addStyleguide } from '../../redux/styleguides';

/* -----------------    COMPONENT     ------------------ */

class AddStyleguide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'e.g., social media',
      backdrop: 'e.g., black',
      captions: 'e.g., modern',
      titles: 'e.g., Zappos custom'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
  });
}

  handleSubmit(event) {
    event.preventDefault();    
    let newStyleguide = {name:this.state.name, backdrop:this.state.backdrop, captions:this.state.captions, titles:this.state.titles};
    this.props.addStyleguide(newStyleguide);    
  }


  render() {
    return (
      <div>
        <h2>Add Styleguide</h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <textarea name = "name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          backdrop:
          <textarea name = "backdrop" value={this.state.backdrop} onChange={this.handleChange} />
        </label>    
        <label>
          captions:
          <textarea name = "captions" value={this.state.captions} onChange={this.handleChange} />
        </label>    
        <label>
          titles:
          <textarea name = "titles" value={this.state.titles} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create Styleguide" />
      </form>
      </div>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatch = (dispatch) => {
  return {
    addStyleguide: function (styleguide) {
      dispatch(addStyleguide(styleguide));
    }
  };
};

export default connect(null, mapDispatch)(AddStyleguide);
