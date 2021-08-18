import Task from "../models/Task";

export const getTasks= async (req, res) => {
    const products = await Task.find();
    return res.json(products);
  };

  export const createTask = async (req, res) => {
    const { name, description,priority,done } = req.body;
    try {
      const newProduct = new Task({
        name,
        description,
        priority,
        done,
        user:req.userId
      }); 
  
      const productSaved = await newProduct.save();
  
      res.status(201).json(productSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

  export const updateDoneTask = async (req, res) => {
    const updatedProduct = await Task.findByIdAndUpdate(
      req.params.productId,
      {done:true},
      {
        new: true,
      }
    );
    res.status(204).json(updatedProduct);
  };

  export const deleteTaskById = async (req, res) => {
    const { productId } = req.params;
  
    await Task.findByIdAndDelete(productId);
  
    // code 200 is ok too
    res.status(204).json();
  };