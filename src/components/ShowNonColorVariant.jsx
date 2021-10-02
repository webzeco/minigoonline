import { Component } from "react";

export default class ShowNonColorVariant extends Component {
    constructor(props) {
      super(props);
      this.state = {
        choosedVariantType: this.props.variant?.tags[0]?.text,
      };
      this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(e) {
      this.setState(
        {
          choosedVariantType: e.target.value,
        },
        () => {
          const select = {};
          select.selectedOption = this.props.variant.selectedOption;
          select.selectedVariant = this.state.choosedVariantType;
          const index=this.props.variant.tags.findIndex(tag=>tag.text===e.target.value)
          console.log(e.target.value,this.props.variant.tags[index]);
          select.tag=this.props.variant.tags[index];
          // select.image=this.props.variant.tags[index]?.img;
          // select.id=this.props.variant.tags[index]?._id;
          // select.qty=this.props.variant.tags[index]?.qty;
          this.props.setSelectedOption(select);
        }
      );
    }
  
    render() {
      return (
        <div className="sizes pt-2">
          <div className="d-flex">
            <h6 className="color_size_h6">{this.props.variant.selectedOption}</h6>
            <h6 className="color_Demo_h6 px-2 ">
              {this.state.choosedVariantType}
            </h6>
            <a href="#" className=" mx-5">
              <p className="px-5 mx-5 size-guid_look ">Size Guid</p>
            </a>
          </div>
          {this.props.variant.tags.map((tag ,index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  className="btn-check"
                  name={this.props.variant.selectedOption}
                  value={tag.text}
                  id={tag.id + tag.text}
                  autocomplete="off"
                  onClick={(e) => this.onClickHandler(e)}
                />
                <label
                  className="btn btn-light  border text-center  p-2 px-3 mb-2 size-box_look "
                  for={tag.id + tag.text}
                >
                  {tag.text}
                </label>
              </div>
            );
          })}
        </div>
      );
    }
  }