import React, { useState } from 'react'
import { useFormik } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Variants from './Variant';
import * as Yup from 'yup';
import { variantsData } from './Variant';
import Media from './MediaComponent';
import { productData } from '../data'
//import "./utils/style/addProductComponent.css";

const AddProduct = () => {
    const [description, setDescription] = useState('');
    const [imgList, setImgList] = useState([]);
    const [images, setImages] = useState();
    const formik = useFormik({
        initialValues: {
            title: '',
            price: 0,
            compareAtPrice: 0.00,
            costPerItem: 0.00,
            chargeTax: false,
            stockKeepingUnit: '',
            barcode: '',
            trackQuantity: false,
            sellOutofStock: false,
            availableQuantity: 0,
            physicalProduct: false,
            weight: 0,
            country: '',
            variants: {},
        },
        validationSchema: Yup.object({
            // title: Yup.string()
            //     .max(15, "Must be less than 15 characters")
            //     .min(3, "Title should be more than 3 characters")
            //     .required('REQUIRED'),
            // description: Yup.string()
            //     .max(1500, "Description should not be more than 1500 characters")
            //     .min(50, 'Description should be of minimum 100 words')
            //     .required("Required")
        })
        ,
        onSubmit: values => {
            values.description = description;
            values.variants = variantsData;
            values.imgNames = imgList;
            values.images = images
            productData.push(values)
        }
    })

    return (
        <div className="container">
            <div className="h2">Add Product</div>
            <form onSubmit={formik.handleSubmit}>
                <label className="title pb-2" htmlFor="title">Title</label>
                <input className="form-control mb-1 w-50"
                    id='title'
                    name='title'
                    type='text'
                    {...formik.getFieldProps('title')}
                />
                {
                    formik.touched.title && formik.errors.title ?
                        (<div>{formik.errors.title}</div>) : null
                }

                {/* .............................................. */}
                <label className="title pb-2" htmlFor="title">Discription</label>
                <CKEditor editor={ClassicEditor}
                    data={description}

                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setDescription(data);
                    }} />
                <Media setImagesList={(imgList) => setImgList(imgList)} setImages={(images) => setImages(images)} />
                {/* .............................................. */}
                <div className="h4">Pricing</div>
                <label className="title pb-2" htmlFor="price">Price</label>
                <input className="form-control mb-1 w-50"
                    id='price'
                    name='price'
                    type='number'
                    {...formik.getFieldProps('price')}
                />
                {
                    formik.touched.price && formik.errors.price ?
                        (<div>{formik.errors.price}</div>) : null
                }
                {/* .............................................. */}

                <label className="title pb-2" htmlFor="compareAtPrice">Compare at price</label>
                <input className="form-control mb-1 w-50"
                    id='compareAtPrice'
                    name='compareAtPrice'
                    type='number'
                    {...formik.getFieldProps('compareAtPrice')}
                />
                {
                    formik.touched.compareAtPrice && formik.errors.compareAtPrice ?
                        (<div>{formik.errors.compareAtPrice}</div>) : null
                }

                {/* .............................................. */}
                <label className="title pb-2" htmlFor="costPerItem">Cost per item</label>
                <input className="form-control mb-1 w-50"
                    id='costPerItem'
                    name='costPerItem'
                    type='number'
                    {...formik.getFieldProps('costPerItem')}
                />
                {
                    formik.touched.costPerItem && formik.errors.costPerItem ?
                        (<div>{formik.errors.costPerItem}</div>) : null
                }

                <label className="title pb-2 px-2" htmlFor="chargeTax">Charge Tax</label>
                <input className="form-check-input mb-1"
                    id='chargeTax'
                    name='chargeTax'
                    type='checkbox'
                    {...formik.getFieldProps('chargeTax')}
                />
                {
                    formik.touched.chargeTax && formik.errors.chargeTax ?
                        (<div>{formik.errors.chargeTax}</div>) : null
                }


                {/* .............................................. */}
                <div className="h4">Inventory</div>
                <label className="title pb-2" htmlFor="stockKeepingUnit">Stock Keeping Unit(SKU)</label>
                <input className="form-control mb-1 w-50"
                    id='stockKeepingUnit'
                    name='stockKeepingUnit'
                    type='text'
                    {...formik.getFieldProps('stockKeepingUnit')}
                />
                {
                    formik.touched.stockKeepingUnit && formik.errors.stockKeepingUnit ?
                        (<div>{formik.errors.stockKeepingUnit}</div>) : null
                }


                <label className="title pb-2" htmlFor="barcode">Barcode</label>
                <input className="form-control mb-1 w-50"
                    id='barcode'
                    name='barcode'
                    type='text'
                    {...formik.getFieldProps('barcode')}
                />
                {
                    formik.touched.barcode && formik.errors.barcode ?
                        (<div>{formik.errors.barcode}</div>) : null
                }

                <br />
                {/* .............................................. */}
                <label className="title pb-2 px-2" htmlFor="trackQuantity">Track Quantity</label>
                <input className="form-check-input mb-1"
                    id='trackQuantity'
                    name='trackQuantity'
                    type='checkbox'
                    {...formik.getFieldProps('trackQuantity')}
                />
                {
                    formik.touched.trackQuantity && formik.errors.trackQuantity ?
                        (<div>{formik.errors.trackQuantity}</div>) : null
                }
                <br />
                {/* .............................................. */}

                <label className="title p-2" htmlFor="sellOutofStock">Sell Out of Stock</label>
                <input className="form-check-input mb-1"
                    id='sellOutofStock'
                    name='sellOutofStock'
                    type='checkbox'
                    {...formik.getFieldProps('sellOutofStock')}
                />
                {
                    formik.touched.sellOutofStock && formik.errors.sellOutofStock ?
                        (<div>{formik.errors.sellOutofStock}</div>) : null
                }
                <br />
                {/* .............................................. */}
                <label className="title pb-2" htmlFor="availableQuantity">Available Quantity</label>
                <input className="form-control mb-1 w-50"
                    id='availableQuantity'
                    name='availableQuantity'
                    type='number'
                    {...formik.getFieldProps('availableQuantity')}
                />
                {
                    formik.touched.availableQuantity && formik.errors.availableQuantity ?
                        (<div>{formik.errors.availableQuantity}</div>) : null
                }

                <div className="h4">Shipping</div>

                <label className="title p-2" htmlFor="physicalProduct">Physical Product</label>
                <input className="form-check-input mb-1"
                    id='physicalProduct'
                    name='physicalProduct'
                    type='checkbox'
                    {...formik.getFieldProps('physicalProduct')}
                />
                {
                    formik.touched.physicalProduct && formik.errors.physicalProduct ?
                        (<div>{formik.errors.physicalProduct}</div>) : null
                }

                <br />
                {/* .............................................. */}
                <label className="title pb-2" htmlFor="weight">Weight</label>
                <input className="form-control w-50"
                    id='weight'
                    name='weight'
                    type='numbwe'
                    {...formik.getFieldProps('weight')}
                />
                {
                    formik.touched.weight && formik.errors.weight ?
                        (<div>{formik.errors.weight}</div>) : null
                }


                <label className="title pb-2" htmlFor="country">Country</label>
                <input className="form-control mb-4 w-50"
                    id='country'
                    name='country'
                    type='textarea'
                    {...formik.getFieldProps('country')}
                />
                {
                    formik.touched.country && formik.errors.country ?
                        (<div>{formik.errors.country}</div>) : null
                }
                {/* .............................................. */}
                <Variants />
                <button className="btn btn-primary mb-3" type='submit'>Submit</button>

            </form>



        </div>
    )
};


export default AddProduct;
