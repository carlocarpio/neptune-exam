import { Fragment } from "react"

import { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from "@web3-react/core"
import { injected } from "../../components/Wallet/Connectors"

function WalletDetails(): JSX.Element {

    const context = useWeb3React<Web3Provider>()
  const { account, activate, deactivate, active, chainId } = context

    async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className={"details-container"}>
      {!active ?
      <button
        className={"button-connect"}
        onClick={connect}
      >
        {`Connect to MetaMask`}
      </button> : null}

      <Fragment>
        {active ?
          <div className={"details-main"}>
            {/* {active ? <div></div>>Connected with <b>{account}</b> <b>{chainId}</b> </span> : <span>Not connected</span>} */}
            <div className={"details-item"}>
              <div className={"details-title"}>{`Account: `}</div>
              <div className={"details-value"}>{account || "N/A"}</div>
            </div>

          <div className={"details-item"}>
              <div className={"details-title"}>{`Chain ID: `}</div>
              <div className={"details-value"}>{chainId || "N/A"}</div>
            </div>
          </div>
          : null}
      </Fragment>

      {active ?
      <button
        className={"button-connect"}
        onClick={disconnect}
      >
        {`Disconnect`}
      </button> : null}

      <style jsx>{`
        .details-container {
          display: flex;
          flex-direction: column;
        }

        .details-main {
          padding-bottom: 40px;
        }

        .details-item {
          padding-bottom: 20px;
        }

        .details-title {
          color: #336699;
          font-size: 14px;
        }

        .details-value {
          color: #336699;
          font-size: 18px;
          font-weight: 700;
        }

        .button-connect {
          cursor: pointer;
          background-color: #336699;
          color: #FFFFFF;
          font-size: 16px;
          height: 45px;
          border: none;
          border-radius: 8px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}

export default WalletDetails