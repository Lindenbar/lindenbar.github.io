let username = 'Lindenbar'

GitHubActivity.feed({
    username: username,
    selector: "#git-activity",
    limit: 25
});

GitHubCalendar("#git-calendar", username, { responsive: true });