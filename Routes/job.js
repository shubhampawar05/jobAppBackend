const express = require("express");
const jobControlers = require('./../Controlers/job')

const routes = express.Router();

routes.post("/job/v1/listing",jobControlers.jobListing);
routes.get("/job/v1/posting",jobControlers.josshowing);
routes.put("/job/v1/:id",jobControlers.jobEdit);
routes.delete("/job/v1/:id",jobControlers.jobDelete);


module.exports = routes