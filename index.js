const express = require('express');
const app = express();
const port = 3000;

const tahmid = {
  login: 'tahmidjihan',
  id: 70837369,
  node_id: 'MDQ6VXNlcjcwODM3MzY5',
  avatar_url: 'https://avatars.githubusercontent.com/u/70837369?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/tahmidjihan',
  html_url: 'https://github.com/tahmidjihan',
  followers_url: 'https://api.github.com/users/tahmidjihan/followers',
  following_url:
    'https://api.github.com/users/tahmidjihan/following{/other_user}',
  gists_url: 'https://api.github.com/users/tahmidjihan/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/tahmidjihan/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/tahmidjihan/subscriptions',
  organizations_url: 'https://api.github.com/users/tahmidjihan/orgs',
  repos_url: 'https://api.github.com/users/tahmidjihan/repos',
  events_url: 'https://api.github.com/users/tahmidjihan/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/tahmidjihan/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'Tahmid Jihan',
  company: null,
  blog: 'https://tahmidjihan.github.io',
  location: 'Chittagong',
  email: null,
  hireable: null,
  bio: 'Full-Stack Dev in progress | HTML, CSS, JS enthusiast | Passionate about tech & continuous learning',
  twitter_username: 'tahmid_jihan',
  public_repos: 21,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: '2020-09-06T08:01:56Z',
  updated_at: '2024-10-25T11:50:34Z',
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter');
});

app.get('/about', (req, res) => {
  res.send('<h1 style="color:blue">About</h1>');
});
app.get('/tahmid', (req, res) => {
  res.json(tahmid);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
