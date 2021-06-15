import React, { useState, useContext } from 'react'
import { DataProvider, VariantsDataContext } from './VariantsDataContext';
import Tags from './TagComponent';
export default function Variants() {
    const [hasVariant, sethasVariant] = useState(false);
    const handleChange = (e) => {
        sethasVariant(document.getElementById('hasvariant').checked);
    }
    return (
        <div>
            <div className="h3">Variants</div>
            <form>
                <label className="title pb-2"  htmlFor="hasVariant">Does this product have variant</label>
                <input className="form-check-input mb-1" id='hasvariant' name='hasvariant' type='checkbox' onChange={(e) => handleChange(e)}
                />
                {hasVariant ?
                    (<DataProvider>{<VariantsDataComponent />}</DataProvider>) : null
                }
            
            </form>
        </div>
    )
};


function VariantsDataComponent() {
    const variantsData = useContext(VariantsDataContext);
    const data = [
        {
            'selectedOption': variantsData.selectedOption,
            'tag': variantsData.tag
        }
    ]
    return (
        <div>
            <h2>Options</h2>
            {
                data.selectedOption.map(
                    (element) => { OptionComponent() }
                )
            }
            <button>Add another option</button>
        </div >
    )

}

function OptionComponent() {
    const variantsData = useContext(VariantsDataContext);

    return (
        <div>
            <label htmlFor="option1">Option 1</label>
            <select name='options' id='option' onChange={(e) => { variantsData.setSelectedOption(e.target.value) }}>
                <option value='Title'>Title</option>
                <option value='Color'>Color</option>
                <option value='Style'>Style</option>
                <option value='Material'>Material</option>
                <option value='Size'>Size</option>
            </select>
            <Tags setTag={(tags) => { variantsData.setTag(tags) }} />
           
        </div>
    )

}
