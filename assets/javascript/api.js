fetch("https://candaan-api.vercel.app/api/text/random")
  .then((response) => response.json())
  .then((result) => {
    document.getElementById('quotes').innerHTML = result.data
  })