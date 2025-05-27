const express = require("express");
const router = express.Router();

const Person = require("../models/person"); // Mongoose model

// POST route to add a new person
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);
    console.log(newPerson); // Fixed typo: console.log not console.lo

    const response = await newPerson.save();
    console.log("Data saved successfully");

    res.status(200).json(response);
  } catch (error) {
    console.error("Error saving data:", error); // Shows full error object
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

// Get route to add a get person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();

    console.log("Data Fetched successfully");

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error); // Shows full error object
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // extract the work type from the URL parameter

    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("Worked Type Person Fetched Successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work Type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
}
});

router.put("/:id", async (req, res) => {
    try {
    const personId = req.params.id; //extract the person id from the parameter URL

    const updatedPersonData = req.body; // Updated data from the Client

    const response = await Person.findByIdAndUpdate(
        personId,
        updatedPersonData,
        {
        new: true, //return the updated Document
        runValidators: true, //Run Mongoose Validation
      }
    );
    if (!response) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("Successfully Updated Perosn ");
    res.status(200).json(response);

  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async(req,res)=>{
    try {
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            res.status(404).json({error:"Person Not Found"})
        }
        console.log("Person Deleted");
        res.status(200).json({message:'Person Deleted SuccessFully'})
    } catch (error) {
        
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;
