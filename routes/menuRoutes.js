const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menuItems"); // Mongoose model

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);

    const response = await newMenu.save();
    console.log("Menu Saved SuccessFully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error in Savin Menu Data", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("SuccessFully Fetched MEnus Data");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error in Fetching Menu Data", error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;

    if (taste == "sour" || taste == "spicy" || taste == "sweet") {
      const response = await MenuItem.find({ taste: taste });
      console.log("Fetched Data on Basis of Taste");
      res.status(200).json(response);
    } else {
      console.log("Wrong Inputed Value");
      res.status(404).json({ error: "Invalid Taste Paramater" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const menuId = req.params.id;

    const menuData = req.body;
    const response = await MenuItem.findByIdAndUpdate(menuId, menuData,{
        new:true,
        runValidators:true,
    });

    if(!response){
       return res.status(404).json({error:"Menu Not Find"})
    }
    console.log(response);
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({error:"Internal Server Error"})
  }
});

module.exports = router;
