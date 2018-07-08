---
layout: single
title: Modern Portfolio Theory (MPT)
date: 2018-07-07 16:28 -0700
categories: finance
mathjax: true
---

Risk in MPT
- Diversification lowers risk.
- Getting a lower risk with the same expected return or getting a higher return with the same risk through diversification is the only free lunch in finances.
- In MPT, risk is measrued by the variance of the price. The dependence between two assets are measured through covariance.
- Means, variances, covariances in a portfolio characterizes the return and risk of the portfolio.

The Efficient Frontier
- The efficient frontier is the set of optimal portfolios that offers the highest expected return for a defined level of risk or the lowest risk for a given level of expected return.
- The point in the efficient frontier with the minimum risk is called the "Global Minumum Variance Portfolio." The variance of this portfolio is lower or equal to the variance of any individual assets in the portfolio.
- When we include a risk-free asset in the portfolio, the efficient frontier becomes a straight line. Any point on the frontier will be a combination of the risk-free asset and the [tangency portfolio](https://en.wikipedia.org/wiki/Modern_portfolio_theory), either short or long. The only portfolio that does not include any risk-free asset is the tangency portfolio itself.
- More interestingly, if all investors in the market allocate their portfolio using the mean-variance optimization, **the tangency portfolio becomes the market portfolio**! The efficient frontier is also called the Capital Market Line: $$E[R] = R_F + \sigma\frac{E[R_M]-R_F}{\sigma_M}$$, where $$R_F$$ is the return rate of the risk-free asset, $$R_M$$ is the market portfolio return, $$\sigma_M$$ is the risk of the market portfolio, and $$R$$ and $$\sigma$$ are the return and risk on the efficient frontier, respectively.


The Capital Asset Pricing Model (CAPM)
- The CAPM helps us understand the price for assets not on the efficient frontier.
- The CAPM is defined as $$E[R_i] = R_F + \beta_i(E[R_M]-R_F)$$, where $$\beta_i=\frac{Cov(R_i,R_M)}{Var(R_M)}$$ measures the amount of risk of asset $$i$$ that we cannot diversify away. This means that a non-diversifiable risk should be rewared by increase in return. 
- Assets may have different variances but the same beta. The $$\beta$$'s are the same on each horizontal line in the mean-variance chart.

MPT in practice
- The MPT can be used in diversifying across international markets. In particular, emerging markets show lower correlations than developed markets.
- When facing the question of diversifying across sectors or countries, we should ask the question of what explains the variances of returns. If large part of the variances can be explained by the factor X, we should then diversify across X.

Assumptions of MPT
- MPT requires that the investor's utility functions are quadratic *OR* that the joint distribution of asset returns is normal. Both are not true in general. The first assumption suggests that investors invest less in risky assets as their wealth increases. The second assumption is not true because real-world returns are negatively skewed (long left tails).
- MPT is a single period model which is only valid when investors are myopic *OR* if asset returns are independent across periods.
- MPT also assumes symmetric utility functions (gaining $10 and losing $10 has the same impact on the magnitude of the utility function.)
- In general, investors under-diversity, likele due to overconfidence and financial illiteracy.

Summarized from [Meeting Investors' Goals](https://www.coursera.org/learn/portfolio-risk-management).