# olum-jsonEditor

A vanilla code for displaying and modifying json

<p align="center">
 <a href="https://www.npmjs.com/package/olum-jsonEditor" target="_blank"><img src="https://img.shields.io/npm/v/olum-jsonEditor" alt="npm"></a>
 <img src="https://img.shields.io/npm/dm/olum-jsonEditor" alt="npm">
 <img src="https://img.shields.io/npm/l/olum-jsonEditor" alt="npm">
</p>

# Documentation

### CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://unpkg.com/olum-jsonEditor@latest/dist/styles/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/olum-jsonEditor@latest/dist/styles/themes/materialPalenight.css" />
    <title>Olum jsonEditor</title>
  </head>

  <body>
    <main class="olumJsonEditor"></main>

    <script src="https://unpkg.com/olum-jsonEditor@latest/dist/olum-jsonEditor.min.js"></script>
    <script>
      const jsonEditor = new OlumJsonEditor();
      const data = {
        id: 9,
        title: "Infinix INBOOK",
        description: "Infinix Inbook X1 Ci3 10th 8GB...",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
        images: [
          "https://dummyjson.com/image/i/products/9/1.jpg",
          "https://dummyjson.com/image/i/products/9/2.png",
          "https://dummyjson.com/image/i/products/9/3.png",
          "https://dummyjson.com/image/i/products/9/4.jpg",
          "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
        ],
      };
      jsonEditor.render(document.querySelector(".olumJsonEditor"), data);
    </script>
  </body>
</html>
```

### ES6 Module

```javascript
import OlumJsonEditor from "olum-jsonEditor";

const jsonEditor = new OlumJsonEditor();
const data = {
  id: 9,
  title: "Infinix INBOOK",
  description: "Infinix Inbook X1 Ci3 10th 8GB...",
  price: 1099,
  discountPercentage: 11.83,
  rating: 4.54,
  stock: 96,
  brand: "Infinix",
  category: "laptops",
  thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
  images: [
    "https://dummyjson.com/image/i/products/9/1.jpg",
    "https://dummyjson.com/image/i/products/9/2.png",
    "https://dummyjson.com/image/i/products/9/3.png",
    "https://dummyjson.com/image/i/products/9/4.jpg",
    "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
  ],
};
jsonEditor.render(document.querySelector(".olumJsonEditor"), data);

```
