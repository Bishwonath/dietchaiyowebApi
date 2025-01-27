const User = require("../model/User");

const findAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
};

const save = async (req, res) => {
  try {
    const {fullname,userName, email, password,phoneNo} = req.body;
    const user = new User(
      {
        fullName,
        userName,
        email,
        password,
        phoneNo,
        
      }
    ); // Create a new Post object
    await user.save();// Ensure the save is awaited
    
    // const transporter =  nodemailer.createTransport({
    //   host:"smtp.gmail.com",
    //   port:587,
    //   Secure:false,
    //   protocol:"smtp",
    //   auth:{
    //     user:"suvamaryal3@gmail.com",
    //     pass:"1234"
    //   }

    // })

    // const info = await transporter.sendMail({
    //   from:"sachecka1176@gmail.com",
    //   // to:customer.email,
    //   to:"vikitex007@gmail.com",
    //   subject:"Customer Registration",
    //   html :`
    //   <h1>Your Registration has been completed</h1>
    //   <p>Thank you for registering with us</p>
    //   <p>Your user id is ${customer.id}</p>
    //   `
    // })
    res.status(201).json({customer,info});
  } catch (e) {
    console.error("Error while saving the post:", e); // Log the error
    res.status(500).json({ message: "Failed to save post", error: e });
  }
};


const findById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error finding user", error: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error updating user", error: error.message });
  }
};

module.exports = {
  findAll,
  save,
  findById,
  deleteById,
  update,
};
