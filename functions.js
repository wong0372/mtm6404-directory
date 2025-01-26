//1 list function
// use map to create html list of clients
const list = (clients) => {
  return clients
    .map(
      (client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${index}">
          ${client.name}
          <strong>$ ${client.balance}</strong>
        </li>
      `
    )
    .join("");
};

//2 order function
// create a copy of the original array using silce
// compare values of the specified property
// if a's property is less than b's property, a comes first
// if a's property is bigger than b's property, b comes first, otherwise they are equal
const order = (clients, prop) => {
  return clients.slice().sort((a, b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  });
};

//3 total function, sum up the total
// use reduce to go through all clients and add up their balances
const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

//4 info function
// use find to find one client with the given index
// compares each client's index with the given index and returns the first client which match the index
const info = (index) => {
  return clients.find((client) => client.index === index);
};

//5 search function
// use filter to create a new array of matching clients
// use toLowercase to convey the search to lowercase
const search = (query) => {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
};
