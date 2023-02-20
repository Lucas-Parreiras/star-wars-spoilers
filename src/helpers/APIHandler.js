const fetchAPI = async () => {
  const url = 'https://swapi.dev/api/planets';
  try {
    const response = await fetch(url);
    const data = await response.json();
    const planetsData = data.results;
    const planetsDataWithOutResidents = planetsData.map((item) => {
      delete item.residents
      return item;
    });
    return planetsDataWithOutResidents;
  } catch (error) {
    console.log(error);
  }
};

export default fetchAPI;