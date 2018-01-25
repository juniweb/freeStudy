import React from "react";
import PropTypes from "prop-types";

export default class ContactDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false,
      name: "",
      phone: ""
    };

    this.handleToogle = this.handleToogle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleToogle() {
    if (!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone
      });
    } else {
      this.handleEdit();
    }

    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit() {
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleKeyPress(e) {
    if (e.charCode === 13) {
      this.handleToogle();
    }
  }

  render() {
    const details = (
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );

    const edit = (
      <div>
        <h1>Create Contact</h1>
        <p>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="phone"
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </p>
      </div>
    );

    const view = this.state.isEdit ? edit : details;
    const blank = <div>Not Selected</div>;

    return (
      <div>
        <h2>Details</h2>
        {this.props.isSelected ? view : blank}
        <p>
          <button onClick={this.handleToogle}>
            {this.state.isEdit ? "OK" : "Edit"}
          </button>
          <button onClick={this.props.onRemove}>Remove</button>
        </p>
      </div>
    );
  }
}

ContactDetail.defaultProps = {
  contact: {
    name: "",
    phone: ""
  },
  onEdit: () => {
    console.error("onEdit not defined");
  },
  onRemove: () => {
    console.error("onRemove not defined");
  },
  onKeyPress: () => {
    console.error("onKeyPress not defined");
  }
};

ContactDetail.propTypes = {
  contact: PropTypes.object,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
  onKeyPress: PropTypes.func
};
