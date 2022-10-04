
export const API_URL = 'https://eoj3r7f3r4ef6v4.m.pipedream.net';

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
      carPrice: data.carPrice,
      initialFeeInPercents: data.initialFeeInPercents,
      leasingTerm: data.leasingTerm,
      initialFee: data.initialFee,
      monthlyPayment: data.monthlyPayment,
      sumOfLeaseAgreement: data.sumOfLeaseAgreement,
    })
  });

  if (response.ok) return response.json();
  else throw new Error();
}

export default api;
