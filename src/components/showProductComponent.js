import React, { Component } from 'react'
import { productData } from './data.js'
import parse from 'html-react-parser'
export default class ShowProduct extends Component {
    render() {
        return (
            <div>
                <h2>Show Product</h2>
                {
                    productData.map(
                        (product) => {
                            return (
                                <div>
                                    <h2>Product Title: {product.title}</h2>
                                    <h2>Product description:</h2>
                                    {parse(product.description)}
                                    <h3>Product price: {product.price}</h3>
                                    <h3>Quantity Available: {product.availableQuantity}</h3>
                                    <h3>Product Weight: {product.weight}</h3>
                                    <h3>Variants of product</h3>
                                    {
                                        product.variants.map(
                                            (option) => {
                                                return (
                                                    <div>
                                                        <h2>Type: {option.selectedOption}</h2>
                                                        {
                                                            option.tags.map(
                                                                (tag) => {
                                                                    return <button>{tag.text}</button>
                                                                }
                                                            )
                                                        }
                                                    </div>
                                                )
                                            }
                                        )
                                    }

                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }
}
