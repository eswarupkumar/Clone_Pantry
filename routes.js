var express = require("express");
const table = require("./models/table");
const router = express.Router();

//Creating a new table
router.post("/table/create/:tableName", async (req, res) => {
  const { tableName } = req.params;
  await table
    .create({
      name: tableName,
      box: {},
    })
    .then((data) => {
      res
        .status(200)
        .json({ Message: `New table create successfully with id ${data._id}` });
    })
    .catch((err) => {
      res.status(400).json("Unable to create the table. Please try again !");
    });
});

//Get details of the table.
router.get("/table/getTable/:tableId", async (req, res) => {
  const { tableId } = req.params;
  await table
    .findById(tableId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json("Unable to find any table with the given id!");
    });
});

//Creating a box inside the table
router.post("/table/:tableId/box/:boxName", async (req, res) => {
  const { tableId, boxName } = req.params;
  const pushBox = { name: boxName };
  if (Object.keys(req.query).length !== 0) {
    for (var i = 0; i < Object.keys(req.query).length; i++) {
      let key = Object.keys(req.query)[i];
      let value = req.query[key];
      pushBox[key] = value;
    }
  }
  await table
    .findByIdAndUpdate(tableId, { $push: { box: pushBox } })
    .then((data) => {
      res.status(200).json(`Your table was updated with box: ${boxName}`);
    })
    .catch((err) => {
      res.status(400).json("Unable to create box!");
    });
});

//Get detials of the box
router.get("/table/:tableId/box/:boxName", async (req, res) => {
  const { tableId, boxName } = req.params;
  await table
    .findById(tableId)
    .then((data) => {
      const boxes = data["box"];
      const obj = boxes.filter((o) => o.name === boxName);
      res.status(200).json(obj);
    })
    .catch((err) => {
      res.status(400).json("Unable to create box!");
    });
});

//Delete a box from the table
router.delete("/table/:tableId/box/:boxName", async (req, res) => {
  const { tableId, boxName } = req.params;
  await table
    .findByIdAndUpdate(tableId, { $pull: { box: { name: boxName } } })
    .then((data) => {
      res.status(200).json(`Box deleted successfully !`);
    })
    .catch((err) => {
      res.status(400).json("Unable to delete box!");
    });
});

// Update the content of the box
router.put("/table/:tableId/box/:boxName", async (req, res) => {
  const { tableId, boxName } = req.params;
  const key = Object.keys(req.query)[0];
  const value = req.query[key];
  await table
    .findById(tableId)
    .then((data) => {
      const boxes = data["box"];
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].name == boxName) {
          boxes[i][key] = value;
        }
      }
      table
        .findByIdAndUpdate(tableId, { box: boxes })
        .then((data) => {
          res.status(200).json("Updated");
        })
        .catch((err) => {
          res.status(400).json("Failed to update");
        });
    })
    .catch((err) => {
      res.status(400).json("Unable to find box!");
    });
});

module.exports = router;
