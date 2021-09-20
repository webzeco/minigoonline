import { Component } from "react";
import ShowColorVariant from "../ShowColorVariant";
import ShowNonColorVariant from "../ShowNonColorVariant";

export default  class Variants extends Component {
    constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(select) {
      const newSelected = this.props.selectedVariants;
      let indexT = 0;
      newSelected.map((variant, index) => {
        if (variant.variantType === select.selectedOption) {
          indexT = index;
        }
      });
      newSelected[indexT].selectedVariant = select.selectedVariant;
      newSelected[indexT].image = select.image;
      // console.log({select});
      this.props.setSelected(newSelected,select.image);
    }
    render() {
      return (
        <>
          {this.props.variants.map((variant) => {
            if (variant.selectedOption == "Color") {
              return (
                <ShowColorVariant
                  setSelectedOption={(select) => this.handleSelect(select)}
                  variant={variant}
                />
              );
            } else {
              return (
                <ShowNonColorVariant
                  setSelectedOption={(select) => this.handleSelect(select)}
                  variant={variant}
                />
              );
            }
          })}
        </>
      );
    }
  }