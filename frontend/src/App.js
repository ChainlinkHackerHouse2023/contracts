import React, { useState } from "react";
import Modal from "react-modal";
import CustomField from "./components/CustomField"; // Import the combined component

Modal.setAppElement("#root"); // for accessibility

const App = () => {
  const [isOpen] = useState(true);

  const handleTransaction = () => {
    console.log("Transaction started");
  };

  const connectWallet = () => {
    console.log("Connecting to wallet");
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        contentLabel="Crypto and Chain Modal"
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#131313",
            borderRadius: "10px",
            height: "450px",
          },
        }}
      >
        {/* Chain Switch From */}
        <CustomField
          type="dropdown"
          label="From"
          options={[
            { label: "Ethereum Mainnet", value: "Ethereum Mainnet" },
            { label: "Polygon", value: "Polygon" },
            // ... more options
          ]}
          onChange={(e) => console.log("Switch From:", e.target.value)}
        />

        {/* Chain Switch To */}
        <CustomField
          type="dropdown"
          label="To"
          options={[
            { label: "Ethereum Mainnet", value: "Ethereum Mainnet" },
            { label: "Polygon", value: "Polygon" },
            // ... more options
          ]}
          onChange={(e) => console.log("Switch To:", e.target.value)}
        />

        {/* Token */}
        <CustomField
          type="dropdown"
          label="Token"
          options={[
            { label: "MNT", value: "MNT" },
            { label: "ETH", value: "ETH" },
          ]}
          onChange={(e) => console.log("Token:", e.target.value)}
        />

        {/* Amount */}
        <CustomField
          type="text"
          label="Amount"
          placeholder="0"
          onChange={(e) => console.log("Amount:", e.target.value)}
        />

        <div className="flex justify-between mt-4">
          {/* Connect Wallet Button */}
          <button
            className="w-[calc(50%-0.5rem)] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[10px]"
            onClick={connectWallet}
          >
            Connect to Wallet
          </button>

          {/* Transaction Button */}
          <button
            onClick={handleTransaction}
            className="w-[calc(50%-0.5rem)] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-[10px]"
          >
            Start Transaction
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
