import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", (req, res) => {
    const date = new Date();
    var date1 = date.getDay();


    let type = "a weekday";
    let adv = "it's time to work hard";

    if(date1 === 0 || date1 === 6){
        type = "the weekend";
        adv = "it's time to have some fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });