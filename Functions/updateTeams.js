const dataModels = require('../Mongoose/dataSchema')

async function updateTeamsInLeague(league, teamsArr) {
        await dataModels.Relevant.findOneAndRemove({name: league})
        const rel = new dataModels.Relevant({name: league, relevantTeams: teamsArr})
        rel.save()
}

module.exports = updateTeamsInLeague