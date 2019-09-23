import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../redux/actionCreators';

class FormFilter extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <div className="row">
          {
            products.map(product => (
              <div key={product.id} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.data,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(ActionCreators.getProductsRequest()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
