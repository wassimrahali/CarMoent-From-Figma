export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "65acfa2261mshff5303f99d794a9p1e2d30jsn06448992ac37",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
