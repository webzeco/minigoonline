import parse from "html-react-parser";
export default function Overview (props){
    const text = parse(props.product.description);
    return (
      <>
        <div className="ho pt-4 mb-3 w-100"></div>
  
        <span className="fw-bold ov_look">OVERVIEW </span>
        {/* {text?.map((part) => {
          if (text.indexOf(part) > text.length / 3) {
            return part;
          }
        })} */}
        <p className="about">{}</p>
        <a
          className="re_look fw-bold mb-4"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          READ MORE
        </a>
        <div className="collapse" id="collapseExample">
          <div className="about pb-3">
            {/* {text.map((part) => {
              if (text.indexOf(part) <= text.length / 3) {
                return part;
              }
            })} */}
            {text}
          </div>
        </div>
      </>
    );
  };