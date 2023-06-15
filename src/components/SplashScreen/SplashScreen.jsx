import React from "react";
import { ThreeDots } from "react-loader-spinner";

const SplashScreen = ({ text }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    opacity: "1",
  };

  const container = {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000",
    backgroundColor: "white",
    opacity: "0.9",
  };

  return (
    <div style={container} data-testid="loader">
      <div className="splashscreen" style={styles}>
        <h1>{text}</h1>
        <ThreeDots type="ThreeDots" color="#eb7968" height={80} width={80} />
      </div>
    </div>
  );
};

export default SplashScreen;
