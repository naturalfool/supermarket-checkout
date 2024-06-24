import { useState, React } from "react";
import { Link } from "react-router-dom";
import CustomPriceInputForm from "./CustomPriceInputForm";

const Home = ({ setCustomPricingRules }) => {
  const [customRules, setCustomRules] = useState({
    A: { unitPrice: 50, specialPrice: { quantity: 3, price: 130 } },
    B: { unitPrice: 30, specialPrice: { quantity: 2, price: 45 } },
    C: { unitPrice: 20 },
    D: { unitPrice: 15 },
  });

  return (
    <div className="homepage-display">
      <CustomPriceInputForm
        customRules={customRules}
        setCustomPricingRules={setCustomPricingRules}
        setCustomRules={setCustomRules}
      />
      <h2>Before you are two paths. Which will you choose?</h2>
      <div className="button-container">
        <Link to="/table-version">
          <button className="homepage-buttons">Table Version</button>
        </Link>
        <Link to="/input-version">
          <button className="homepage-buttons">Text Input Version</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
