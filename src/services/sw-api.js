const baseUrl = "https://swapi.dev/api/"

export function getStarShipList() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}

export function getDetails(shipUrl) {
  return fetch(`${shipUrl}`)
  .then(res => res.json())
}