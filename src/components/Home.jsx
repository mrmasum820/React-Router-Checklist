import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Homepage</h2>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </div>
  );
};

export default Home;
