import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // for accessibility

const App = () => {
  const [isOpen] = useState(true);

  const handleTransaction = () => {
    console.log("Transaction started");
  };

  const connectWallet = () => {
    // Logic to connect to the wallet
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
          },
        }}
      >
        {/* Chain Switch From */}
        <div>
          <label>Switch From Chain:</label>
          <select>
            <option value="Ethereum">Ethereum</option>
            <option value="BSC">Binance Smart Chain</option>
            // ... more options
          </select>
        </div>

        {/* Chain Switch To */}
        <div>
          <label>Switch To Chain:</label>
          <select>
            <option value="Ethereum">Ethereum</option>
            <option value="BSC">Binance Smart Chain</option>
            // ... more options
          </select>
        </div>

        {/* Token */}
        <div>
          <label>Token:</label>
          <select>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            // ... more options
          </select>
        </div>

        {/* Amount */}
        <div>
          <label>Amount:</label>
          <input type="number" placeholder="Amount" />
        </div>

        {/* Connect Wallet Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={connectWallet}
        >
          Connect to Wallet
        </button>

        {/* Transaction Button */}
        <button onClick={handleTransaction}>Start Transaction</button>
      </Modal>
    </div>
  );
};

export default App;
