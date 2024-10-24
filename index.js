
const partyInfo = async () => {
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
  const partyData = await response.json();
  console.log(`PARTY DATA: `, partyData);

  const partyID = partyData.data.map((party) => {
    return party.id;
  })
  console.log(partyID);

  const partyName = partyData.data.map((party) => {
    return party.name;
  })
  console.log(partyName);

  const partyDes = partyData.data.map((party) => {
    return party.description;
  })
  console.log(partyDes);

  const partyLI = document.createElement(`li`);

  partyLI.innerHTML =
    //`<h3>${partyID.join(' & ')} and ${partyName}</h3> `
    `<h3>${partyID.join(' - ')} </h3>
    <h3>${partyName.join(` - `)} </h3>
    <h3>${partyDes.join(` - `)}</h3>`

  console.log(partyLI);

  const ol = document.querySelector(`ol`);
  ol.append(partyLI);
}
partyInfo();



