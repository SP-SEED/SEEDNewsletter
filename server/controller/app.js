const express = require("express");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const { JWT } = require("google-auth-library");
const cors = require("cors");
// import { GoogleSpreadsheet } from "google-spreadsheet";
// import { JWT } from "google-auth-library";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// const mainRoutes = require("./routes / mainRoutes");
// app.use("/api", mainRoutes);
app.get("/", async (req, res) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const excelSheet = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEETS_ID || "",
      serviceAccountAuth
    );
    await excelSheet.loadInfo();

    //QOTM
    let QOTM = excelSheet.sheetsByTitle["Quote of the month"];
    let QOTMRows = await QOTM.getRows();
    let QOTM_arr = [];

    for (let row of QOTMRows) {
      QOTM_arr.push({
        Date: row.get("Month/Year"),
        Quote: row.get("Quote"),
        Person: row.get("Person"),
        Position: row.get("Position"),
      });
    }
    //console.log(QOTM_arr);

    //Upcoming Events
    // let Up_Ev = excelSheet.sheetsByTitle["Upcoming Events"];
    // let Up_EvRows = await Up_Ev.getRows();
    // let Up_Evarr = [];

    // for (let row of Up_EvRows) {
    //   Up_Evarr.push({
    //     Date: row.get("Header"),
    //     Quote: row.get("Content"),
    //     Person: row.get("Date"),
    //     Position: row.get("Time"),
    //   });
    // }

    //  //What's up Right Now
    //  let WURN = excelSheet.sheetsByTitle["What's up right now"];
    //  let WURNRows = await WURN.getRows();
    //  let WURNarr = [];
 
    //  for (let row of WURNRows) {
    //    WURNarr.push({
    //      Date: row.get("Image"),
    //      Quote: row.get("Header"),
    //      Person: row.get("Content"),
    //      Position: row.get("Read Now link"),
    //    });
    //  }

     
    //  //Recommended Reads
    //  let Reads = excelSheet.sheetsByTitle["Recommended Reads"];
    //  let ReadsRows = await Reads.getRows();
    //  let Readsarr = [];
 
    //  for (let row of ReadsRows) {
    //    Readsarr.push({
    //      Date: row.get("Image"),
    //      Quote: row.get("Header"),
    //      Person: row.get("Content"),
    //      Position: row.get("Read Now link"),
    //    });
    //  }

    //  //Shoutouts
    //  let Shoutout = excelSheet.sheetsByTitle["Shoutouts"];
    //  let ShoutoutRows = await Shoutout.getRows();
    //  let Shoutoutarr = [];
 
    //  for (let row of ShoutoutRows) {
    //    Shoutoutarr.push({
    //      Date: row.get("Image"),
    //      Quote: row.get("Header"),
    //      Person: row.get("Content"),
    //      Position: row.get("Link"),
    //    });
    //  }



    // console.log(serviceAccountAuth, process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
    // return res.status(200).json([{ QOTM: QOTM_arr },
    //                              {Up_Ev:Up_Evarr},
    //                              {WURN:WURNarr},
    //                              {Reads:Readsarr},
    //                              {Shoutout:Shoutoutarr}]);
        return res.status(200).json({ QOTM: QOTM_arr });


  } catch (error) {
    if (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
});

// app.post("/", (req, res) => {

// })
// app.use("/", express.static("public"));

module.exports = app;
