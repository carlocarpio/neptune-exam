import { useState } from "react"
import Converter from "../components/Converter"
import Details from "../components/Wallet/Details"

export default function Home() {

  const [isConverterActive, setConverterActive] = useState(true)

  return (
    <div>
      <div className={"converter-container"}>
        <div className={"converter-content"}>
          {isConverterActive
            ? <Converter />
            : <Details /> }

            <div className={"wallet-toggle-container"}>
              <button
                className="wallet-toggle"
                onClick={() => setConverterActive(!isConverterActive)}
              >{isConverterActive ? `Check Wallet Details` : `Crypto Converter`}</button>
            </div>
        </div>
      </div>

      <style jsx>{`
        .converter-container {
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }

        .converter-content {
          border: 1px solid #CCCCCC;
          border-radius: 8px;
          padding: 20px 40px;
          min-width: 400px;
        }

        .wallet-toggle-container {
          display: flex;
          justify-content: flex-end;
        }

        .wallet-toggle {
          background: transparent;
          border: none;
          cursor: pointer;
          color: #336699;
        }
      `}</style>
    </div>
  )
}