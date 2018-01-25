import React from "react";
import PropTypes from "prop-types";

export default class ContactCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    const contact = {
      name: this.state.name,
      phone: this.state.phone
    };

    console.log(contact);

    this.props.onCreate(contact);

    this.setState({
      name: "",
      phone: ""
    });

    this.nameInput.focus();
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>Create Contact</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            ref={ref => {
              this.nameInput = ref;
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleClick}>Create</button>
        </p>
      </div>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: () => {
    console.log("oCreate not defined");
  }
};
