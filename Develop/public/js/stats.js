fetch("/library/stats",{
  method: "GET",
})
.then(response => {
return response.json()
})
.then(data => {
  // manipulate dom
  // no handlebars
  // grab id and then update
})
