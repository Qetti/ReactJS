import React, { Component } from "react";
import withContext from "../../withContext";
import { Redirect } from "react-router-dom";
import Fade from "react-reveal/Fade";


const initState = {
  name: "",
  price: "",
  stock: "",
  shortDesc: "",
  description: ""
};

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = e => {
    e.preventDefault();
    const { name, price, stock, img, shortDesc, description } = this.state;
    if (name && price) {
      this.props.context.addProduct(
        {
          name,
          price,
          img,
          shortDesc,
          description,
          stock: stock || 0
        },
        () => this.setState(initState)
      );
    } else {
      this.setState({ error: "ფლზ შეიყვანე სახელი და ღირებულება" });
    }
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, price, stock, img, shortDesc, description } = this.state;
    const { user } = this.props.context;
    return (
      <Fade bottom cascade>
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">პროდუქტის სახელი: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">ღირებულება: </label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={price}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">ხელმისაწვდომი რაოდენობა: </label>
                <input
                  className="input"
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">ფოტოს მისამართი: </label>
                <input
                  className="input"
                  type="text"
                  name="img"
                  value={img}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">მოკლე აღწერა: </label>
                <input
                  className="input"
                  type="text"
                  name="shortDesc"
                  value={shortDesc}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">აღწერა: </label>
                <textarea
                  className="textarea"
                  type="text"
                  rows="2"
                  style={{ resize: "none" }}
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="error" style={{color: 'red'}}>{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button is-primary is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  დამატება
                </button>
              </div>
            </div>
          </div>
        </form>
      </Fade>
    );
  }
}

export default withContext(AddProduct);
