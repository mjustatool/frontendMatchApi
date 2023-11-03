import { gql } from '@apollo/client';
import IEtudiant from 'types/IEtudiant';



export async function getEtudiants(): Promise<IEtudiant[]> {
  const GET_STUDENT = gql`query {
    etudiantList {
      nom
      prenom
      fillier
      groupe
      tele
      mail
    }
  }`;
  /*const response = await axios.post("http://localhost:8080/graphiql", {
    method: 'POST',
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      query: `query {
          etudiantList {
            nom
            prenom
            fillier
            groupe
            tele
            mail
          }
        }`
    })
  });*/

  /*try {
    const response = await axios.post('http://localhost:8080/graphiql', {
      query: GET_STUDENT.loc.source.body, // Extract the query from the gql object
    });

    return response.data.data.etudiantList; // Assuming your data is in the data field
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }*/
  const response = fetch("http://localhost:8080/graphiql", {
    method: 'POST',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: `query {
          etudiantList {
            nom
            prenom
            fillier
            groupe
            tele
            mail
          }
        }`
    })
  }).then(res => res.json())
    .then(data => console.log(data))
  return response;
} 