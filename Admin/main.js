const leagues = [
    {
        name: "Premier-Leauge",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/E0.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/E0.csv"
        },
        relevantTeams: `["Man City", "Liverpool", "Chelsea", "Tottenham", "Arsenal", "Man United", "Wolves", "Everton", "Leicester", "West Ham", "Watford", "Crystal Palace", "Newcastle", "Bournemouth", "Burnley", "Southampton", "Brighton"]`
    },
    {
        name: "Seria-A",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/I1.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/I1.csv"
        },
        relevantTeams: `["Juventus", "Napoli", "Spal", "Atalanta", "Inter", "Milan", "Roma", "Torino", "Lazio", "Sampdoria", "Bologna", "Sassuolo", "Udinese", "Parma", "Cagliari", "Fiorentina", "Genoa"]`
    },
    {
        name: "La-Liga",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/SP1.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/SP1.csv"
        },
        relevantTeams: `["Barcelona", "Ath Madrid", "Real Madrid", "Valencia", "Getafe", "Sevilla", "Espanol", "Ath Bilbao", "Sociedad", "Betis", "Alaves", "Eibar", "Leganes", "Villarreal", "Levante", "Valladolid", "Celta"]`
    },
    {
        name: "Bundesliga",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/D1.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/D1.csv"
        },
        relevantTeams: `["Bayern Munich", "Dortmund", "RB Leipzig", "Leverkusen", "M'gladbach", "Wolfsburg", "Ein Frankfurt", "Werder Bremen", "Hoffenheim", "Fortuna Dusseldorf", "Hertha", "Mainz", "Freiburg", "Schalke 04", "Augsburg"]`
    },
    {
        name: "Eredivise",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/N1.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/N1.csv"
        },
        relevantTeams: '["Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar", "Vitesse", "Utrecht", "Heracles", "Groningen", "Den Haag", "Willem II", "Heerenveen", "VVV Venlo", "Zwolle", "FC Emmen", "For Sittard"]'
    },
    {
        name: "Ligue-1",
        url: {
            old: "https://www.football-data.co.uk/mmz4281/1819/F1.csv",
            new: "https://www.football-data.co.uk/mmz4281/1920/F1.csv"
        },
        relevantTeams: `["Paris SG", "Lille", "Lyon", "St Etienne", "Marseille", "Montpellier", "Nice", "Reims", "Nimes", "Rennes", "Strasbourg", "Nantes", "Angers", "Bordeaux", "Amiens", "Toulouse", "Monaco", "Dijon"]`
    }
]

$('#updateLeague').on('click', function () {
    const key = $('#key').val()
    for (let i of leagues) {
        $.get(`/admin/up/${key}/${i.name}`).then(function (response) {
            console.log(response)
        }).catch(function () { })
    }
})

$('#updateTeams').on('click', function () {
    const key = $('#key').val()
    for (let i of leagues) {
        $.post(`/admin/upTeams/${key}`, { league: i.name, teamsArr: i.relevantTeams }).then(function (response) {
            console.log(response)
        }).catch(function () { })
    }
})

$('#download').on('click', async function () {
    const key = $('#key').val()
    for (let i of leagues) {
        await $.post(`/admin/down/${key}`, { url: i.url.old, fileName: i.name + "19" }).then(function (response) {
            console.log(response)
        }).catch(function () { })
        // await $.post(`/admin/down/${key}`, { url: i.url.new, fileName: i.name + "20" }).then(function (response) {
        //     console.log(response)
        // }).catch(function () { })
    }
})
$('#delete_button').on('click', function () {
    const key = $('#key').val()
    for (let i of leagues) {
        $.get(`/admin/del/${key}/${i.name}`).then(function (response) {
            console.log(response)
        }).catch(function () { })
    }
})