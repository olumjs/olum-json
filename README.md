# olum-json

A vanilla library for displaying and modifying json, made for olum devtool project

<p align="center">
 <a href="https://www.npmjs.com/package/olum-json" target="_blank"><img src="https://img.shields.io/npm/v/olum-json" alt="npm"></a>
 <img src="https://img.shields.io/npm/dm/olum-json" alt="npm">
 <img src="https://img.shields.io/npm/l/olum-json" alt="npm">
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
    <link rel="stylesheet" href="https://unpkg.com/olum-json@latest/dist/styles/index.css" />
    <link rel="stylesheet" href="https://unpkg.com/olum-json@latest/dist/styles/themes/materialPalenight.css" />
    <title>Olum Json</title>
  </head>

  <body>
    <main class="olumJson"></main>

    <script src="https://unpkg.com/olum-json@latest/dist/olum-json.min.js"></script>
    <script>
      const json = new OlumJson();
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
      json.render(document.querySelector(".olumJson"), data);
    </script>
  </body>
</html>
```

### ES6 Module

```javascript
import OlumJson from "olum-json";

const json = new OlumJson();
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
json.render(document.querySelector(".olumJson"), data);

```
