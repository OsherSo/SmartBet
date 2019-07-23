const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: String,
    place: String,
    goalsAgainst: Number,
    goalsFor: Number,
    rivalteams: [String],
    avgFor: Number,
    avgAgainst: Number
})

const relevantTeamsSchema = new Schema({
    name: String,
    relevantTeams: [String]
})

const RelevantTeams = mongoose.model('RelevantTeams', relevantTeamsSchema)

async function updateModels() {
    let temp = {"Relevant": RelevantTeams, updateModels}
    const teams = await RelevantTeams.find({})
    for(let team of teams){
        temp[team.name] = mongoose.model(team.name, dataSchema, team.name)
    }
    module.exports = temp    
}


module.exports = {updateModels, "Relevant": RelevantTeams}
