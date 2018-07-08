---
layout: single
title: Risk Management
date: 2018-07-07 12:26 -0700
categories: finance
mathjax: true
---
Derivative instruments
- Is a contract which specifies conditions under which a transaction will take place in the future.
- Value depends on the price of the underlying asset.
- Traded over organized exchanges, which provides better liquidity, or OTC (over the counter).
- Contracts traded OTC are tailor-made (mainly by banks and insurance companies) and subject to counterparty risk.
- Notion value is the number of units in each derivative times the spot price of the underlying asset.

Forwards
- A commitment to buy or sell the underlying asset at the maturity date, at the forward price agreed when the contract was initiated.
- Long forward position
  - Agrees to buy in the future at the forward price.
  - potential profit is unlimited, and potential loss is limited.
- Short forward position
  - Agrees to sell in the future at the forward price.
  - Potential profit is limited, and potential loss is unlimited.


Options
- European options: Gives the owner the right to buy (call) or sell (put) a certain quantity of the underlying asset at a pre-determined price (strike price) at the maturity date.
- American options: the owner can exercise the right at any time up to and including the maturity date.
- European and American is just a name. You can trade both in both Europe and US.
- In order to obtain the right to buy or sell, the buyer of the option pays a premium to the seller.
- The size of an option contract defines the quantity of the underlying asset that the buyer of the option contract can buy (or sell).
- Options provides the right to be flexible. The owner does not have to exercise the contract. However, the issuer has to deliver a specific quantity of the asset for calls and pay the strike price to buy the stocks for puts, if the owner decides to exercise the option.
- For stock price $$S$$ and strike price $$K$$, options can be traded in-the-money ($$S>K$$), at-the-money ($$S=K$$), and out-of-the-money ($$S<K$$). 
- Payoff structure is non-linear. Let P be the premium of the contract.

| Type | Loss | Gain | 
| --- | --- | --- |
| Long Calls | Maxium $$P$$ | $$(S-K) - P$$ when in-the-money |
| Short Calls | $$(S-K) - P$$ when in the money | Maxium $$P$$ |
| Long Puts | Maxium $$P$$ | $$(K-S) - P$$ when out-of-the-money |
| Short Puts | $$(K-S) - P$$ when out-of-the-money | Maxium $$P$$ |

Options and forwards can be used to manage financial risk and replace standard asset classes in portfolio allocation. Their price can also be used to extract information about the future price or volatility of the underlying asset.

Volatility as risk measurement
- Main assumption: upside and downside is symmetric
- The payoff structure of option is however not symmetric. Using volatility may be dangerous.
- For assymetric up and downsides, we need to look at max loss.

Liquidity risk
- An asset is liquid if we can sell the asset quickly without changing the price.
- We should demand compensation for taking illiquidity risk.

Currency risk
- Denote $$P_t^{FC}$$ as the value of the portfolio of foreign assets, measured in foreign currency at time $$t$$, $$S_t$$ as the spot exchange rate for a unit of foreign currency at time $$t$$, and $$P_t^{$}$$ is the dollar value of the portfolio in foreign assets at time $$t$$. Note $$P_t^$ = P_t^{FC}S_t$$.
- Also denote rate of return of the portfolio in foreign currency is then $$r^{FC} = \frac{P_t^{FC} - P_0^{FC}}{P_0^{FC}}$$, the rate of return in dollars is $$r^$ = \frac{P_t^$-P_0^$}{P_0^$}$$, and the precentage change in exchange rate $$s=\frac{S_t-S_0}{S_0}$$.
- We have $$r^$ = \frac{P_t^{FC}S_t-P_0^{FC}S_0}{P_0^{FC}S_0}$$, which can be written as $$r^$=r^{FC}+s+(r^{FC}s)$$. The currency contribution is then $$r^$-r^{FC}=s+(r^{FC}s)$$.
- The variance of foreign investment in domestic currency is $$\sigma_$^2 = \sigma_{FC}^2+\sigma_s^2+2\rho\sigma_{FC}\sigma_s$$, where $$\sigma_{FC}^2$$ is the variance of the foreign investment in foreign currency, $$\sigma_s^2$$ is the variance of the change in exchange rate, and $$\rho$$ is the correlation between $$r^{rc}$$ and $$s$$.
- Contribution of currency risk is then $$\sigma_$-\sigma_{FC}$$.
- Currency risk plays a larger role for foreign bonds than in foreign equity markets.
- Currency contribution

Value-at-Risk (VaR)
- VaR is the loss level such that there is a $$\alpha%$$ of probability to observer a larger loss. Formally $$P[r_t+VaR(a_1,a_2,\ldots,a_n) < 0] = 1-\alpha$$, where $$r_t = \sum_{i=1}^n a_iy_{i,t}$$, and $$a_i$$'s and $$y_{i,t}$$'s' are the weights of the asset in the portfolio and their returns at time $$t$$, respectively.

Expected shortfall (ES)
- Gives the average loss, knowing the loss is above the VaR.
- Expected shortfall is a subadditive risk measure, which means $$ES(a_1+a_2, \alpha) \leq ES(a_1, \alpha) + ES(a_2, \alpha)$$. Therefore, it incorporates the benefit of diversification, since VaR is not necessarily subadditive. 
- Moreover, VaR says nothing about the size of the extreme losses.
- Formally, $$ES(a_1,\ldots,a_n) = E[-r_t|-r_t<VaR(a_1,\ldots,a_n,\alpha)]$$.

Two methods to compute VaR and ES in practice
- Variance-Covariance approach: assumes symmetry and Gaussian of returns.
- Historical approach: for non-symmetric returns. Computes the 99th percentile of the distribution of historical returns.

Risk management applied to portfolio allocation
- VaR constraints poses as linear constraints in mean-variance optimization portfolio allocation.

Hedging risks
- If we sell when we believe the market will go down, there will be transaction cost and we will miss the gain if we were wrong.
- We can buy a put to add a payoff when the market falls. By doing so, we will have lower bound for the maximum possible loss; however, the expected return will be lower.
- We can sell a forward for foreign currency to hedge portfolio in foreign currencies.

Summarized from [Portfolio Risk Management](https://www.coursera.org/learn/portfolio-risk-management).