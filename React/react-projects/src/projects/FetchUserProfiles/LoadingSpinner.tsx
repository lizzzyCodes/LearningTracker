import { RotatingLines } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          visible={true}
          width="96"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </div>
  );
}

export default LoadingSpinner;
