const Butter = require("../Butter");

const server = new Butter();

const posts = [
  {
    id: 1,
    title: "This is a post title",
    body: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    userId: 1,
  },
  {
    id: 2,
    title: "This is a post title",
    body: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    userId: 2,
  },
  {
    id: 3,
    title: "This is a post title",
    body: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    userId: 3,
  },
];
const user = [
  { id: 1, author: "Jam Brief", pass: "1234" },
  { id: 2, author: "Jam Karlo", pass: "1234" },
  { id: 3, author: "Jam Juice", pass: "1234" },
];
const session = [];

server.route("get", "/", async (req, res) => {
  await res.sendFile("./public/index.html", "text/html");
});

server.route("get", "/styles.css", async (req, res) => {
  await res.sendFile("./public/styles.css", "text/css");
});

server.route("get", "/scripts.js", async (req, res) => {
  await res.sendFile("./public/scripts.js", "text/javascript");
});

server.route("get", "/api/posts", (req, res) => {
  const post = posts.map((post) => {
    const users = user.find((user) => user.id === post.userId);
    post.author = users.author || "Unknown"; // optional chaining to prevent error
    return post;
  });

  res.json(post); // ✅ sending response
});

//login page
server.route("get", "/login", async (req, res) => {
  await res.sendFile("./public/index.html", "text/html");
});

server.route("get", "/profile", async (req, res) => {
  await res.sendFile("./public/index.html", "text/html");
});

server.route("post", "/api/login", (req, res) => {
  let body;
  req.on("data", (data) => {
    body += data.toString("utf-8");
  });

  req.on("end", () => {
    body = JSON.parse(body.substring(9));


    const username = body.username;
    const password = body.password;

    const foundUser = user.find(
      (u) => u.author === username && u.pass === password
    );

    if (foundUser) {
      const token = Math.floor(Math.random() * 100000).toString();
      session.push({ token: token, id: foundUser.id });
      res.setHeader("Set-Cookie", `token=${token};path=/`);
      return res.status(200).json({ message: "welcome" });
    } else {
      return res.status(401).json({ message: "invalid credentials" });
    }
  });
});

server.route("get", "/api/user",(req,res)=>{
   
 const cokie =  req.headers.cookie || ""

const token = cokie.split(";").find(ss=> ss.trim().startsWith("token="))?.split("=")[1]

const sessionCookie =  session.find(ss=>ss.token === token)
if(sessionCookie){
  res.status(200).json({messages: "successfully connnected"})
}else{
  res.status(401).json({message: "invalid credentials"})
}

})


server.listen(7000, () => {
  console.log("server is running on http://localhost:7000");
});
