import ntcjs from "ntcjs";
import { Component } from "react";

export default class ShowColorVariant extends Component {
    constructor(props) {
      super(props);
      this.state = {
        choosedVariant: this.props.variant.tags[0].text,
      };
      this.onColorClick = this.onColorClick.bind(this);
    }
    onColorClick(e) {
      this.setState(
        {
          choosedVariant: e.target.value,
        },
        () => {
          const select = {};
          select.selectedOption = this.props.variant.selectedOption;
          select.selectedVariant = this.state.choosedVariant;
          const index=this.props.variant.tags.findIndex(tag=>tag.text===this.state.choosedVariant)
          console.log(e.target.value,this.props.variant);
          select.tag=this.props.variant.tags[index];
          // select.id=this.props.variant.tags[index]._id;
          this.props.setSelectedOption(select);
        }
      );
    }
    render() {
      return (
        <>
          <div className=" align-items-center mb-4 pt-3">
            <div className="d-flex">
              <h6 className="color_size_h6">
                {this.props.variant.selectedOption}
              </h6>
              <h6 className="color_Demo_h6 px-2">{this.state.choosedVariant}</h6>
            </div>
            <ul className="list-inline mb-0" id="colorVariants">
              {this.props.variant.tags.map((tag,index) => {
                return (
                  <li key={index} className="list-inline-item ">
                    <input
                      className="btn-check "
                      id={tag.id + tag.text}
                      type="radio"
                      value={tag.text}
                      name={this.props.variant.selectedOption}
                      onClick={(e) => this.onColorClick(e)}
                    />
                    <label className="btn p-0 m-0" for={tag.id + tag.text}>
                      <i
                        className="fas fa-circle round_btn_look"
                        style={{ color: tag.text }}
                      ></i>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      );
    }
  }