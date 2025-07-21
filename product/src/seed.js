const mongoose = require("mongoose");
const { ProductModel } = require("./database/models");
const dotenv = require("dotenv");
const { DB_URL } = require("./config");

const data = [
  {
    name: "alphonso mango",
    desc: "great Quality of Mango",
    type: "fruits",
    banner: "http://codergogoi.com/youtube/images/alphonso.jpeg",
    unit: 1,
    price: 300,
    available: true,
    suplier: "Golden seed firming",
  },
  {
    name: "Apples",
    desc: "great Quality of Apple",
    type: "fruits",
    banner: "http://codergogoi.com/youtube/images/apples.jpeg",
    unit: 1,
    price: 140,
    available: true,
    suplier: "Golden seed firming",
  },
  {
    name: "Kesar Mango",
    desc: "great Quality of Mango",
    type: "fruits",
    banner: "http://codergogoi.com/youtube/images/kesar.jpeg",
    unit: 1,
    price: 170,
    available: true,
    suplier: "Golden seed firming",
  },

  {
    name: "Langra Mango",
    desc: "great Quality of Mango",
    type: "fruits",
    banner: "http://codergogoi.com/youtube/images/langra.jpeg",
    unit: 1,
    price: 280,
    available: true,
    suplier: "Golden seed firming",
  },
  {
    name: "Broccoli",
    desc: "great Quality of Fresh Vegetable",
    type: "vegetables",
    banner: "http://codergogoi.com/youtube/images/broccoli.jpeg",
    unit: 1,
    price: 280,
    available: true,
    suplier: "Golden seed firming",
  },
  {
    name: "Cauliflower",
    desc: "great Quality of Fresh Vegetable",
    type: "vegetables",
    banner: "http://codergogoi.com/youtube/images/cauliflower.jpeg",
    unit: 1,
    price: 280,
    available: true,
    suplier: "Golden seed firming",
  },
  {
    name: "Olive Oil",
    desc: "great Quality of Oil",
    type: "oils",
    banner: "http://codergogoi.com/youtube/images/oliveoil.jpg",
    unit: 1,
    price: 400,
    available: true,
    suplier: "Golden seed firming",
  },
];

const seed = async () => {
  try {
    console.log("Seed Starting");
    console.log(DB_URL);
    mongoose
      .connect(
        "mongodb+srv://fiverr89067:cA3Dci0yuokHYkPE@cluster0.nqwsgyx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(async () => {
        // data.map(async (item) => {
        const newProduct = new ProductModel({
          name: data[0].name,
          desc: data[0].desc,
          type: data[0].type,
          unit: data[0].unit,
          price: data[0].price,
          available: data[0].available,
          suplier: data[0].suplier,
          banner: data[0].banner,
        });
        await newProduct.save();
        // });
        // await Promise.all(createProducts);
        console.log("Seed Ended");
      });
  } catch (error) {
    console.log(error);
  }
};

seed();
