async function submit() {
  console.log('hi');
  const backendResponse = await fetch(
    'https://api.myac.re/v1/acre/local-sourcing/bestbuys',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      body: 'purpose=move&propertyValue=250000&mortgageAmount=249900&termMonths=300&type=residential',
    }
  );

  console.log(await backendResponse.json());
}
