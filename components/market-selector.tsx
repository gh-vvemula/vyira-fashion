"use client";

import { useEffect, useRef, useState } from "react";

import { shippingMarkets } from "@/data/site";

const DEFAULT_MARKET = shippingMarkets[0];
const STORAGE_KEY = "vyira-market";

export function MarketSelector() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const [selectedCode, setSelectedCode] = useState<string>(DEFAULT_MARKET.code);
  const [pendingCode, setPendingCode] = useState<string | null>(null);

  useEffect(() => {
    const savedCode = window.localStorage.getItem(STORAGE_KEY);
    if (savedCode && shippingMarkets.some((market) => market.code === savedCode)) {
      setSelectedCode(savedCode);
    }
  }, []);

  const selectedMarket =
    shippingMarkets.find((market) => market.code === selectedCode) ?? DEFAULT_MARKET;

  function handleChange(code: string) {
    setPendingCode(code);

    window.setTimeout(() => {
      setSelectedCode(code);
      setPendingCode(null);
      window.localStorage.setItem(STORAGE_KEY, code);
      if (detailsRef.current) {
        detailsRef.current.open = false;
      }
    }, 450);
  }

  return (
    <details className="market-selector" ref={detailsRef}>
      <summary className="market-selector__summary" aria-label="Choose shipping country">
        <span className="market-selector__label">Ship to</span>
        <span className="market-selector__current">
          <span aria-hidden="true">{selectedMarket.flag}</span>
          <span>{selectedMarket.code}</span>
        </span>
      </summary>

      <div className="market-selector__menu">
        <p className="market-selector__heading">Choose your shipping country</p>
        <p className="market-selector__copy">
          English storefront for a few shipping-ready markets.
        </p>
        <div className="market-selector__list" role="list">
          {shippingMarkets.map((market) => {
            const isActive = market.code === selectedMarket.code;
            const isPending = market.code === pendingCode;

            return (
              <button
                key={market.code}
                type="button"
                className={`market-selector__option${isActive ? " is-active" : ""}`}
                onClick={() => handleChange(market.code)}
                disabled={pendingCode !== null}
              >
                <span className="market-selector__option-main">
                  <span aria-hidden="true">{market.flag}</span>
                  <span>{market.country}</span>
                </span>
                <span className="market-selector__option-meta">
                  {isPending ? "Switching..." : `${market.language} · ${market.note}`}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <span className="market-selector__language-inline">English EN</span>
    </details>
  );
}
