
const partyInfo = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
  const partyData = await response.json();
  console.log(partyData);

  const partyLI = document.createElement(`li`);

  partyLI.innerHTML = `
   <h3>${partyData.name}</h3>
  `
  console.log(partyLI);
}
partyInfo();



