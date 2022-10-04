const interestRate = 0.035;

export function calculateColorTrackOfRangeInput (num: number, min: number, max: number): string {
  if (num < min) {
    return '0% 100%'
  } else if (num > max) {
    return '100% 100%'
  }
  return `${(num - min) * 100 / (max - min)}` + '% 100%'
}

export function calculateInitialFee (carPrice: number, percents: number) : number {
  return Math.ceil(percents/100 * carPrice)  // округляю до целого в большую сторону, чтобы люди не вносили копейки
}

export function calculateSumOfLeaseAgreement (initialFee: number, leasingTerm: number, monthlyPayment: number ) : number {
  return Math.ceil(initialFee + leasingTerm*monthlyPayment) // округляю до целого в большую сторону
}

export function calculateMonthlyPayment (carPrice: number, initialFee: number, leasingTerm: number) : number {
  return Math.ceil((carPrice - initialFee) * ((interestRate * Math.pow((1 + interestRate),  leasingTerm)) / (Math.pow((1 + interestRate), leasingTerm) - 1)));  // округляю до целого в большую сторону, чтобы люди не вносили копейки
}

export function makeNumberWithSpaces(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function makeNumberfromString(num: string) {
  return Number(num.split(' ').join(''));
}
