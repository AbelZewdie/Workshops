// ORDINARY ANNUITY CALCULATOR

/*A calculator that determines
the present value of an ordinary annuity. (Note: hard)

A. It would accept the monthly payout,
expected interest rate, and years to pay out from the user.

B. It would display the present value of that annuity.

Example: To fund an annuity that pays $3,000 monthly for 20 years
and earns an expected 2.5% interest,
you would need to invest $566,141.46 today.

NOTE: If your results on any of these calculators are off by a few pennies (not dollars!), don't worry.
The difference is likely attributable to rounding and we aren't that concerned about it in this academy.*/


function getPayment(monthlyPayout, expectedInterestRate, numberOfYears){
/* presentValue = P×(1−(1+r)-n) / r. */



daily = monthlyPayout / 30;
p = daily * 365; 
n = numberOfYears;
r = expectedInterestRate / 100;

//Solution for the Amount.
// presentValue = p * r/(1-(1+r)**(-t))
presentValue = p * ((1-(1+r)**-n)/r)
return presentValue;
}

result = getPayment(3000, 2.5, 20)
console.log(result)
