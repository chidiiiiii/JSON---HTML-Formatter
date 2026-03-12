console.log("Formatter is running");
function renderList(data) {
  const title = String(data.title);
  const items = data.items || [];

  const listItems = items.map(item => {
    const name = item.name;
    const qty = item.qty ?? "";
    return `<li>${name} (${qty})</li>`;
  }).join("");

  return `<h2>${title}</h2><ul>${listItems}</ul>`;
}

// Data for renderList
const data = {
  title: "Inventory",
  items: [
    { name: "Wrench", qty: 3 },
    { name: "Screwdriver", qty: 7 }
  ]
};

const out = renderList(data);

console.assert(
  out.startsWith("<h2>Inventory</h2><ul>"),
  "includes title + UL"
);

console.assert(
  (out.match(/<li>/g) || []).length === 2,
  "renders two <li> items"
);

console.assert(
  JSON.stringify(data) ===
  '{"title":"Inventory","items":[{"name":"Wrench","qty":3},{"name":"Screwdriver","qty":7}]}',
  "does not mutate input"
);

console.assert(
  renderList({ title: "Empty", items: [] }) === "<h2>Empty</h2><ul></ul>",
  "empty list renders an empty UL"
);


//render clothes
function renderClothes(data) {
  const title = String(data.title);
  const clothes = data.clothes || [];

  const list = clothes.map(item => {
    const name = item.name;
    const size = item.size ?? "";
    return `<li>${name} - Size ${size}</li>`;
  }).join("");

  return `<section><h3>${title}</h3><ol>${list}</ol></section>`;
}


// Data for renderClothes
const clothesData = {
  title: "Clothing Cart",
  clothes: [
    { name: "T-Shirt", size: "M" },
    { name: "Jeans", size: "32" }
  ]
};

const clothesOut = renderClothes(clothesData);

console.assert(
  clothesOut.includes("<h3>Clothing Cart</h3>"),
  "renders clothing title"
);

console.assert(
  (clothesOut.match(/<li>/g) || []).length === 2,
  "renders two clothing items"
);

console.assert(
  JSON.stringify(clothesData) ===
  '{"title":"Clothing Cart","clothes":[{"name":"T-Shirt","size":"M"},{"name":"Jeans","size":"32"}]}',
  "does not mutate clothes input"
);

console.assert(
  renderClothes({ title: "Empty Closet", clothes: [] }) ===
  "<section><h3>Empty Closet</h3><ol></ol></section>",
  "empty clothes list renders correctly"
);
