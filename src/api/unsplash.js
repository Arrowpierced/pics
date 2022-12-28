import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID lbf_0OGnpFAanm-_U_siNq5pE9pCgq6e4kqZ9cMxwo0",
      },
})

