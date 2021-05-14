fetch("/library/stats",{
  method: "GET",
})
.then(response => {
return response.json()
})
.then(data => {
  console.log(data)
  let progressStats = `${data.userSpecificGames[0].count}`;
  $('#in-progress-stats').text(progressStats);

  let completedStats = `${data.userSpecificGames[1].count}`;
  $('#completed-stats').text(completedStats);

  let notStartedStats = `${data.userSpecificGames[2].count}`;
  $('#not-started-stats').text(notStartedStats)
})
