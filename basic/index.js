require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "login": "santr4",
  "id": 92260952,
  "node_id": "U_kgDOBX_KWA",
  "avatar_url": "https://avatars.githubusercontent.com/u/92260952?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/santr4",
  "html_url": "https://github.com/santr4",
  "followers_url": "https://api.github.com/users/santr4/followers",
  "following_url": "https://api.github.com/users/santr4/following{/other_user}",
  "gists_url": "https://api.github.com/users/santr4/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/santr4/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/santr4/subscriptions",
  "organizations_url": "https://api.github.com/users/santr4/orgs",
  "repos_url": "https://api.github.com/users/santr4/repos",
  "events_url": "https://api.github.com/users/santr4/events{/privacy}",
  "received_events_url": "https://api.github.com/users/santr4/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Aaranyak Santra",
  "company": null,
  "blog": "",
  "location": "Bhilai , Chhattisgarh, India",
  "email": null,
  "hireable": null,
  "bio": "Intern @ GE Aerospace | CS @ AVV, Amritapuri",
  "twitter_username": "SantraAaranyak",
  "public_repos": 18,
  "public_gists": 0,
  "followers": 76,
  "following": 95,
  "created_at": "2021-10-10T14:09:19Z",
  "updated_at": "2025-07-01T14:26:04Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hello aaranyak')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})