const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/github', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      params: {
        sort: 'stars',
        per_page: 10
      }
    });

    const repos = response.data.map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url
    }));

    res.json(repos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching repositories from GitHub');
  }
});

module.exports = router;
