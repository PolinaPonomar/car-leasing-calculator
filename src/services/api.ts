
export const API_URL = 'https://hookb.in/eK160jgYJ6UlaRPldJ1P';

export const api = {
  url: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};

type dataTypes = {
  carPrice: number
  initialFeeInPercents: number
  leasingTerm: number
  initialFee: number
  monthlyPayment: number
  sumOfLeaseAgreement: number
}; 

export async function fetchInfo(data: dataTypes) {
  const response = await fetch(api.url, {
    method: 'POST',
    headers: api.headers,
    body: JSON.stringify({
      car_coast: data.carPrice,
      initail_payment: data.initialFee,
      initail_payment_percent: data.initialFeeInPercents,
      lease_term: data.leasingTerm,
      total_sum: data.sumOfLeaseAgreement,
      monthly_payment_from: data.monthlyPayment,
    })
  });

  if (response.ok) return response.json();
  else throw new Error();
}

export default api;
