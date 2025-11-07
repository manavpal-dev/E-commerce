import axios from "axios"

export const getProducts = async (req,res) =>{

    try {
        const response =  await axios.get("https://fakestoreapi.com/products");
      
        //Extract the data array
        const products = response.data;
      
        // Simplify data
        const formatedProducts = products.map((item)=>({
          id:item.id,
          name:item.title,
          price:item.price,
          image:item.image,
        }));
      
        // send formatted list to frontend
       res.json(formatedProducts);
        
    } catch (error) {
        console.error("Error fetching products: ",error.message);
        res.status(500).json({message:"Failed to fetch products"});
    }
}