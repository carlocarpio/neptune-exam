import { useState, useEffect } from "react"
import * as CurrencyFormat from 'react-currency-format'

type CurrencyType = {
  formattedValue: string
  value: string
  floatValue: string
}

function Converter(): JSX.Element {
  const [nep, setNEP] = useState("")
  const [busd, setBUSD] = useState("")

  useEffect(() => {
    setBUSD(String(Number(nep) * 3))
  }, [nep])

   useEffect(() => {
    setNEP(String(Number(busd) / 3))
  }, [busd])

  return (

    <div>
      <h2 className={"converter-title"}>{`Crypto Converter`}</h2>
      <div className={"converter-input-box"}>
        <div className={"converter-input-title"}>{`NEP`}</div>
        <CurrencyFormat
          decimalScale={2}
          allowNegative={false}
          thousandSeparator={true}
          value={nep}
          onValueChange={(event: CurrencyType) => setNEP(event?.value)}
          aria-label="NEP"
        />
      </div>
      <div className={"converter-input-box"}>
        <div className={"converter-input-title"}>{`BUSD`}</div>
        <CurrencyFormat
          decimalScale={2}
          allowNegative={false}
          thousandSeparator={true}
          value={busd}
          onValueChange={(event: CurrencyType) => setBUSD(event?.value)}
          aria-label="BUSD"
        />
      </div>

      <style jsx>{`
        .converter-title {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
          padding: 0 0 40px 0;
          color: #336699;
        }

        .converter-input-title {
          padding-bottom: 5px;
          color: rgba(0, 0, 0, 0.4);
        }

        .converter-input-box {
          padding-bottom: 40px;
        }

        div :global(input) {
          padding : 15px 20px;
          width: 100%;
          font-size: 18px;
          border: 1px solid rgba(0, 0, 0, 0.4);
          border-radius: 8px;
          color: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}

export default Converter