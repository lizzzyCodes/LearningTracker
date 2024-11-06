import { RotatingLines } from "react-loader-spinner";
// takes in users input
function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    </div>
  );
}

export default LoadingSpinner;
