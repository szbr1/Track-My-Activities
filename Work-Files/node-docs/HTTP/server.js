const Butter =   require("./Butter");


const server = new Butter()

server.route('get','/butter',async(req,res)=>{
  try {
    
 
  await res.sendFile("./storage/image.png", "image/png")
} catch (error) {
   res.status(400) 
}

})


server.listen(4000,()=>{
  console.log("server is running on http://localhost:4000")
})