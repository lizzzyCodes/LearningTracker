import { RotatingLines } from "react-loader-spinner";
// takes in users input
function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner">
        <RotatingLines
          // color="grey"
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          visible={true}
          //  height="96"
          width="96"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
}

export default LoadingSpinner;
