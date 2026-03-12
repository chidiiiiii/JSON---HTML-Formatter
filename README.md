# JSON---HTML-Formatter

## Data Model

### renderList(data)

The `renderList` function takes an object with a title and a list of items.

Example:

```
{
  title: "Inventory",
  items: [
    { name: "Wrench", qty: 3 },
    { name: "Screwdriver", qty: 7 }
  ]
}
```

Expected output:

```
<h2>Inventory</h2><ul><li>Wrench (3)</li><li>Screwdriver (7)</li></ul>
```

Data structure:

* `title`: string
* `items`: array of objects

  * `name`: string
  * `qty`: number

### renderClothes(data)

The `renderClothes` function converts clothing data into an HTML section with an ordered list.

Example input:

```
{
  title: "Clothing Cart",
  clothes: [
    { name: "T-Shirt", size: "M" },
    { name: "Jeans", size: "32" }
  ]
}
```

Expected output:

```
<section><h3>Clothing Cart</h3><ol><li>T-Shirt - Size M</li><li>Jeans - Size 32</li></ol></section>
```

Data structure:

* `title`: string
* `clothes`: array of objects

  * `name`: string
  * `size`: string

## Assertion Ideas

Several `console.assert()` statements are used to verify that the functions behave correctly.

**Structure Test**
Checks that the returned HTML contains the correct title and list structure.

**Item Count Test**
Counts the number of `<li>` elements to confirm that the correct number of items were rendered.

**Non-Mutation Test**
Uses `JSON.stringify()` to confirm that the original input object was not modified by the function.

**Edge Case Test**
Verifies that an empty array still produces valid HTML, such as an empty `<ul></ul>` or `<ol></ol>` list.

## LLM Prompt
Prompt I used:

Draft `renderList(data)` that returns an HTML string. Do not mutate input. Add three console.assert lines. Explain how each assert proves correctness.

Excerpt from generated suggestion:

```
const items = data.items || [];
```

My adjustment:
I kept the defensive default (`|| []`) so the function would still work if the `items` property is missing or undefined.

