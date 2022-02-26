import cors from "cors"
import express from "express";
import axios from "axios";
import path from "path"

const app = express();

app.use(cors())

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')))


app.get("/users/:username", async (request, response) => {
  const username = request.params
  
  try {
    const { data } = await axios(`https://api.github.com/users/${username.username}`)

    const userName = data.name;
    const avatar = data.avatar_url;

    return response.status(201).json({userName, avatar})

  } catch (error) {
    return response.status(400).json({erro: "User not found."})
  }

 })
app.listen(3333, () => console.log("Server is running: http://localhost:3333/"));
