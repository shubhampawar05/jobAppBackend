const jobModel = require("./../Model/model");

const jobListing = async (req, res) => {
    try {
        const newData = req.body;
  const savedData = new jobModel(newData);
  const savedDataInDb = await savedData.save();
  res.json({
    statue: true,
    message: " data saved successfully  form form job LIsting api ",
    id: savedDataInDb._id,
  });
  console.log("added into db");
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error retrieving data from job listing API",
            error: error.message,
          });  
    }
  
};

const josshowing = async (req, res) => {
  console.log(req.query);
  const min = req.query.min;
  const max = req.query.max;
  let userQuery = {};

  if (min || max) {
    userQuery.salary = {};
    if (min) userQuery.salary.$gte = min;
    if (max) userQuery.salary.$lte = max;
  }
  try {
    const result = await jobModel.find(userQuery);
    res.json({
      status: true,
      message: "Data retrieved successfully from job listing API",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Error retrieving data from job listing API",
      error: err.message,
    });
  }
};

const jobEdit = async (req , res)=>{
    try {
        const {id} = req.params;
        console.log(id);
        console.log(req.body);
        await jobModel.findByIdAndUpdate(id, req.body);
        res.json({
            status: true,
            message: "Data eidt successfully from job listing API",
          });
          console.log('data updated');
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error retrieving data from job listing API",
            error: err.message,
          }); 
    }
  

}
const jobDelete = async (req , res)=>{
    const {id} = req.params;
    console.log(id);
    // const findObj = {
    //     age: 0,
    //   };
    //   //   await JobModel.findOneAndDelete(findObj);
    //   await JobModel.deleteMany(findObj); // Dangerous method (Avoid using it)
    // await jobModel.findByIdAndDelete(id);
    res.json({
        status: true,
        message: "Data deleted successfully from job  API",
      });
      console.log('data deleted');

}

const jobControlers = {
  jobListing,
  josshowing,
  jobEdit,
  jobDelete
  
};
module.exports = jobControlers;
