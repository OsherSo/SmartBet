class Calculator {
    constructor() {

    }
    homeWin(arr) {
        const result = arr.filter(a => (a.homeGoals > a.awayGoals))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    draw(arr) {
        const result = arr.filter(a => (a.homeGoals === a.awayGoals))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    awayWin(arr) {
        return 100 - this.homeWin(arr) - this.draw(arr)
    }
    homeOrDraw(arr) {
        return this.homeWin(arr) + this.draw(arr)
    }
    homeOrAway(arr) {
        return this.homeWin(arr) + this.awayWin(arr)
    }
    drawOrAway(arr) {
        return this.draw(arr) + this.awayWin(arr)
    }
    under05Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 0.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    under15Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 1.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    under25Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 2.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    under35Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 3.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    under45Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 4.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    under55Goals(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals < 5.5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    bothTeamToScore(arr) {
        const result = arr.filter(a => (a.homeGoals > 0 && a.awayGoals > 0))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact0(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 0))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact1(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 1))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact2(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 2))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact3(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 3))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact4(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 4))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact5(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 5))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact6(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 6))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact7(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 7))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
    exact8(arr) {
        const result = arr.filter(a => (a.homeGoals + a.awayGoals === 8))
        let sum = 0
        for (let i of result) {
            sum += i.chance
        }
        return sum
    }
}