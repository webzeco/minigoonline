import React, { Component } from 'react'
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux'
import { loadBugs } from '../../store/bugs';
import { loadProducts } from '../../storemini/reducers/products';
 class ClassBugs extends Component {
     componentDidMount(){
         this.props.loadProducts();
     };
    render() {
        return (
            <div>
                <Loader visible={ this.props.loading} type="Circles" color="#e61523" height={80} width={80} />
                <ul>
                {this.props.products.map(product => <div className='d-flex mx-3' key={product.id}>
                    <li className='list-item  '>{product.title}</li>
                    {/* <button onClick={() => dispatch(resolveBug(bug.id))} className='btn-primary'> Resolve</button> */}
                </div>
                )}
            </ul>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    products:state.entities.products.list,
    loading:state.entities.products.loading
});
const mapDispatchToProps=(dispatch)=>({
    loadProducts:()=>dispatch(loadProducts())
});
export default connect(mapStateToProps,mapDispatchToProps)(ClassBugs);
