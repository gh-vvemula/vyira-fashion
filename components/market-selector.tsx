"use client";

import { useEffect, useState } from "react";

import { shippingMarkets } from "@/data/site";

const DEFAULT_MARKET = shippingMarkets[0];
const STORAGE_KEY = "vyira-market";

export function MarketSelector() {
  const [selectedCode, setSelectedCode] = useState<string>(DEFAULT_MARKET.code);

  useEffect(() => {
    const savedCode = window.localStorage.getItem(STORAGE_KEY);
    if (savedCode && shippingMarkets.some((market) => market.code === savedCode)) {
      setSelectedCode(savedCode);
    }
  }, []);

  const selectedMarket =
    shippingMarkets.find((market) => market.code === selectedCode) ?? DEFAULT_MARKET;

  function handleChange(code: string) {
    setSelectedCode(code);
    window.localStorage.setItem(STORAGE_KEY, code);
  }

  return (
    <details className="market-selector">
      <summary className="market-selector__summary" aria-label="Choose shipping country">
        <span className="market-selector__current">
          <span aria-hidden="true">{selectedMarket.flag}</span>
          <span>{selectedMarket.country}</span>
        </span>
        <span className="market-selector__language">{selectedMarket.language}</span>
      </summary>

      <div className="market-selector__menu">
        <p className="market-selector__heading">Worldwide shipping to selected markets</p>
        <p className="market-selector__copy">
          English storefront for a focused set of shipping-ready countries.
        </p>
        <div className="market-selector__list" role="list">
          {shippingMarkets.map((market) => {
            const isActive = market.code === selectedMarket.code;

            return (
              <button
                key={market.code}
                type="button"
                className={`market-selector__option${isActive ? " is-active" : ""}`}
                onClick={() => handleChange(market.code)}
              >
                <span className="market-selector__option-main">
                  <span aria-hidden="true">{market.flag}</span>
                  <span>{market.country}</span>
                </span>
                <span className="market-selector__option-meta">
                  {market.language} · {market.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </details>
  );
}
