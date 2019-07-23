const calculator = new Calculator()

const render = function (arr) {
    $('.data2').empty()
    $('.data2').append(`
    <div class="render">
        <div class="card">
            <div class="label">Fulltime Result</div>
            <div class="information">
                <div>1 - ${(calculator.homeWin(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>X - ${(calculator.draw(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>2 - ${(calculator.awayWin(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
            </div>
        </div>


        <div class="card">
            <div class="label">Double Chance</div>
            <div class="information">
                <div>1X - ${(calculator.homeOrDraw(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>12 - ${(calculator.homeOrAway(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>X2 - ${(calculator.drawOrAway(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
            </div>
        </div>

        <div class="card">
            <div class="label">Under Goals</div>
            <div class="information">
                <div>Under 0.5 - ${(calculator.under05Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 1.5 - ${(calculator.under15Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 2.5 - ${(calculator.under25Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 3.5 - ${(calculator.under35Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 4.5 - ${(calculator.under45Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Under 5.5 - ${(calculator.under55Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
            </div>
        </div>

        <div class="card">
            <div class="label">Over Goals</div>
            <div class="information">
                <div>Over 0.5 - ${(100 - calculator.under05Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Over 1.5 - ${(100 - calculator.under15Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Over 2.5 - ${(100 - calculator.under25Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Over 3.5 - ${(100 - calculator.under35Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Over 4.5 - ${(100 - calculator.under45Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>Over 5.5 - ${(100 - calculator.under55Goals(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
            </div>
        </div>

        <div class="card">
            <div class="label">Exact Goals</div>
            <div class="information">
                <div>0 - ${(calculator.exact0(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>1 - ${(calculator.exact1(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>2 - ${(calculator.exact2(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>3 - ${(calculator.exact3(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>4 - ${(calculator.exact4(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>5 - ${(calculator.exact5(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>6 - ${(calculator.exact6(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>7 - ${(calculator.exact7(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Ratio" type="number"> <span class="result"></span> </div>
                <div>8 - ${(calculator.exact8(arr)).toFixed(2) + "%"} <input class="odds" placeholder="Osher Satum" type="number"> <span class="result"></span> </div>
            </div>
        </div>
        <div class="card">
            <a class="myButton calcOdds">My Chance</a>
            <a class="myButton deleteButton"><i class="fas fa-trash"></i></a>
        </div>
    </div>
    `)
}
