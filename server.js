const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

const products = [
  {
    id: 1,
    name: "Điện thoại iPhone 14 Pro Max",
    image: "https://picsum.photos/seed/iphone14/200/300",
    price: 29990000,
    sold: 1500,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Laptop Dell XPS 13",
    image: "https://picsum.photos/seed/dellxps13/200/300",
    price: 24990000,
    sold: 820,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth Sony WH-1000XM5",
    image: "https://picsum.photos/seed/sonyheadphone/200/300",
    price: 6990000,
    sold: 540,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Máy ảnh Canon EOS R5",
    image: "https://picsum.photos/seed/canoneosr5/200/300",
    price: 87990000,
    sold: 120,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Bàn phím cơ Keychron K2",
    image: "https://picsum.photos/seed/keychronk2/200/300",
    price: 1999000,
    sold: 2400,
    rating: 4.5,
  },
  {
    id: 6,
    name: "Giày thể thao Nike Air Max",
    image: "https://picsum.photos/seed/nikeairmax/200/300",
    price: 2990000,
    sold: 3000,
    rating: 4.8,
  },
  {
    id: 7,
    name: "Đồng hồ thông minh Apple Watch Series 8",
    image: "https://picsum.photos/seed/applewatch8/200/300",
    price: 9990000,
    sold: 1050,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Máy lọc không khí Xiaomi Mi Air Purifier 3H",
    image: "https://picsum.photos/seed/xiaomipurifier/200/300",
    price: 2990000,
    sold: 1800,
    rating: 4.7,
  },
  {
    id: 9,
    name: "Tivi Samsung 4K 55 inch",
    image: "https://picsum.photos/seed/samsungtv4k/200/300",
    price: 15990000,
    sold: 650,
    rating: 4.6,
  },
  {
    id: 10,
    name: "Loa JBL Charge 5",
    image: "https://picsum.photos/seed/jblcharge5/200/300",
    price: 3490000,
    sold: 1250,
    rating: 4.8,
  },
];

const corsOptions = {
  origin: "http://localhost:3000/",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
