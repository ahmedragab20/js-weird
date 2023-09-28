import express from "express";
const app = express();

const products = [
  {
    id: "galaxy-s23-ultra-SAMSUNG",
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore, veniam quaerat delectus itaque amet assumenda magni, aliquid vero odit ipsam magnam, nemo placeat maxime. Fugiat voluptatum aliquam atque unde?",
    price: 546,
    currency: "USD Dollars",
    currencySymbol: "$",
    brand: "Galaxy",
    model: "S23 Ultra",
    company: "Samsung",
    category: "Smartphone",
    subcategory: "Android",
    images: [
      {
        color: "dark-green",
        url: "/products/green-galaxy-s23-ultra.webp",
        alt: "Dark Green Samsung Galaxy S23 Ultra",
        title: "Samsung Galaxy S23 Ultra",
      },
      {
        color: "gold",
        url: "/products/golden-galaxy-s23-ultra.webp",
        alt: "Golden Samsung Galaxy S23 Ultra",
        title: "Samsung Galaxy S23 Ultra",
      },
    ],
    colors: [
      {
        name: "dark-green",
        hex: "#535A50",
        bg_tailwind: "bg-[#535A50]",
        color_tailwind: "text-[#535A50]",
        lighter_hex: "#8B8F8A",
        darker_hex: "#40463E",
      },
      {
        name: "gold",
        hex: "#F2EAE3",
        bg_tailwind: "bg-[#F2EAE3]",
        color_tailwind: "text-[#F2EAE3]",
        lighter_hex: "#EADCCF",
        darker_hex: "#CDA46B",
      },
    ],
  },
  {
    id: "iPad-pro-APPLE",
    name: "iPad Pro",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore, veniam quaerat delectus itaque amet assumenda magni, aliquid vero odit ipsam magnam, nemo placeat maxime. Fugiat voluptatum aliquam atque unde?",
    price: 999,
    currency: "USD Dollars",
    currencySymbol: "$",
    brand: "iPad",
    model: "Pro",
    company: "Apple",
    category: "Tablet",
    subcategory: "iOS",
    images: [
      {
        color: "silver",
        url: "/products/silver-ipad-pro.webp",
        alt: "Silver iPad Pro",
        title: "iPad Pro",
      },
      {
        color: "space-gray",
        url: "/products/spacegray-ipad-pro.webp",
        alt: "Space Gray iPad Pro",
        title: "iPad Pro",
      },
    ],
    colors: [
      {
        name: "silver",
        hex: "#C0C0C0",
        bg_tailwind: "bg-[#C0C0C0]",
        color_tailwind: "text-[#C0C0C0]",
        lighter_hex: "#C2E1FE",
        darker_hex: "#105FDC",
      },
      {
        name: "space-gray",
        hex: "#6A6A6C",
        bg_tailwind: "bg-[#6A6A6C]",
        color_tailwind: "text-[#6A6A6C]",
        lighter_hex: "#FBA2FA",
        darker_hex: "#682A81",
      },
    ],
  },
  {
    id: "oppo-find-n2-flip-OPPO",
    name: "Oppo Find N2 Flip",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore, veniam quaerat delectus itaque amet assumenda magni, aliquid vero odit ipsam magnam, nemo placeat maxime. Fugiat voluptatum aliquam atque unde?",
    price: 899,
    currency: "USD Dollars",
    currencySymbol: "$",
    brand: "Find",
    model: "N2 Flip",
    company: "Oppo",
    category: "Smartphone",
    subcategory: "Android",
    images: [
      {
        color: "rose",
        url: "/products/rose-oppo-find-n2-flip.webp",
        alt: "Rose Oppo Find N2 Flip",
        title: "Oppo Find N2 Flip",
      },
      {
        color: "black",
        url: "/products/black-oppo-find-n2-flip.webp",
        alt: "Black Oppo Find N2 Flip",
        title: "Oppo Find N2 Flip",
      },
    ],
    colors: [
      {
        name: "rose",
        hex: "#B4B0D6",
        bg_tailwind: "bg-[#B4B0D6]",
        color_tailwind: "text-[#B4B0D6]",
        lighter_hex: "#E4D9F1",
        darker_hex: "#9285AE",
      },
      {
        name: "black",
        hex: "#292B2F",
        bg_tailwind: "bg-[#292B2F]",
        color_tailwind: "text-[#292B2F]",
        lighter_hex: "#545657",
        darker_hex: "#0C5070",
      },
    ],
  },
  {
    id: "laptop-macbook-pro-APPLE",
    name: "MacBook Pro",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum dolore, veniam quaerat delectus itaque amet assumenda magni, aliquid vero odit ipsam magnam, nemo placeat maxime. Fugiat voluptatum aliquam atque unde?",
    price: 1999,
    currency: "USD Dollars",
    currencySymbol: "$",
    brand: "MacBook",
    model: "Pro",
    company: "Apple",
    category: "Laptop",
    subcategory: "macOS",
    images: [
      {
        color: "silver",
        url: "/products/silver-macbook-pro.webp",
        alt: "Silver MacBook Pro",
        title: "MacBook Pro",
      },
      {
        color: "space-gray",
        url: "/products/spacegray-macbook-pro.webp",
        alt: "Space Gray MacBook Pro",
        title: "MacBook Pro",
      },
    ],
    colors: [
      {
        name: "silver",
        hex: "#F1F1F1",
        bg_tailwind: "bg-[#F1F1F1]",
        color_tailwind: "text-[#F1F1F1]",
        lighter_hex: "#021A2C",
        darker_hex: "#1D804C",
      },
      {
        name: "space-gray",
        hex: "#C0C0C0",
        bg_tailwind: "bg-[#C0C0C0]",
        color_tailwind: "text-[#C0C0C0]",
        lighter_hex: "#FBCFF9",
        darker_hex: "#331B9B",
      },
    ],
  },
];

app.use(
  express.json({
    limit: "5kb",
    verify: (req, res, buf) => {
      console.log("What is the buffer?");
    },
  })
);

app.post("/new-product", (req, res) => {
  const { body } = req;
  console.log(body);

  if (!body || (typeof body === "object" && !Object.keys(body).length)) {
    res.status(400);
    return res.json({ error: "No body provided" });
  } else if (!body.name) {
    return res.json({ error: "No name provided" });
  } else if (!body.price) {
    return res.json({ error: "No price provided" });
  }

  const id = Math.random().toString(36).substring(7);
  products.push({
    id,
    ...body,
  });
  res.json({ id });
});

app.get("/", (req, res) => {
  res.send(
    // dawn middleware
    `
      <h1>API</h1>
      <p>Endpoints:</p>
      <ul>
        <li>/products</li>
        <li>/products/:id</li>
      </ul>
    `
  );
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    res.status(404);
    return res.json({ error: "Product not found" });
  }

  res.json(product);
});

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
