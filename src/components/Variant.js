import React, { useState, Component } from 'react'
//import { DataProvider, VariantsDataContext } from './VariantsDataContext';
import Tags from './TagComponent';
export default function Variants() {
    const [hasVariant, sethasVariant] = useState(false);
    const handleChange = (e) => {
        sethasVariant(document.getElementById('hasvariant').checked);
    }
    return (
        <div>
            <div className="h4">Variants</div>
            <form>
                <label className="title pb-2 px-1" htmlFor="hasVariant">Does this product have variant</label>
                <input className="form-check-input mb-1" id='hasvariant' name='hasvariant' type='checkbox' onChange={(e) => handleChange(e)}
                />
                {hasVariant ?
                    (<VariantsDataComponent />) : null
                }

            </form>
        </div>
    )
};

const generateID = () => {
    return (variantsData.length + 1);
}

export const variantsData = [
    {
        id: 1,
        selectedOption: 'Title',
        tags: []
    }
]

class VariantsDataComponent extends Component {
    constructor(props) {
        super(props)
        this.addOption = this.addOption.bind(this)
    }

    addOption = (e) => {
        const dataItem = {
            id: generateID(),
            selectedOption: 'Title',
            tags: []
        }
        variantsData.push(dataItem);
        this.forceUpdate();
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Options</h2>
                {variantsData.map(
                    (item) => {
                        return <OptionComponent id={item.id} selectedOption={item.selectedOption} tags={item.tags} />
                    }
                )}
                <button onClick={(e) => this.addOption(e)}>Add another Option</button>
            </div >
        )
    }
}

class OptionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: [],
        }
    }
    saveData = (tags) => {
        this.setState({ tags: tags },
            () => {
                const data = {};
                data.id = this.props.id;
                data.selectedOption = document.getElementById('option' + this.props.id) !== null ? document.getElementById('option' + this.props.id).value : null;
                data.tags = this.state.tags;
                let indexitem;
                let fazool = variantsData.map(
                    (item, index) => {
                        if (item.id === this.props.id) {
                            indexitem = index
                        }
                        return 0
                    }
                );
                variantsData[indexitem] = data;
                console.log(JSON.stringify(variantsData));
                fazool = {};
            }

        )
    }

    render() {
        return (
            <div>
                <label htmlFor={`option` + this.props.id}>Option {this.props.id}</label>
                <select name='options' id={'option' + this.props.id} >
                    <option value='Title'>Title</option>
                    <option value='Color'>Color</option>
                    <option value='Style'>Style</option>
                    <option value='Material'>Material</option>
                    <option value='Size'>Size</option>
                </select>
                <Tags sendTags={(tags) => this.saveData(tags)} />
            </div>
        )
    }


}
