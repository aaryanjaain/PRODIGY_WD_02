let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener('click', function () {
    timer = true
    stopWatch()
})
stopBtn.addEventListener('click', function () {
    timer = false
})
resetBtn.addEventListener('click', function () {
    timer = false
    hour = 0
    minute = 0
    second = 0
    count = 0
    document.getElementById('hr').innerHTML = '00'
    document.getElementById('min').innerHTML = '00'
    document.getElementById('sec').innerHTML = '00'
    document.getElementById('count').innerHTML = '00'

})

function stopWatch() {
    if (timer) {
        count++
        if (count == 100) {
            second++
            count = 0;
        }
        if (second == 60) {
            minute++
            second = 0
        }
        if (minute == 60) {
            hour++
            second = 0
            minute = 0
        }
        let hrString = hour
        let minstring = minute
        let secstring = second
        let countstring = count
        if (hour < 10) {
            hrString = "0" + hrString
        }
        if (minute < 10) {
            minstring = "0" + minstring
        }
        if (second < 10) {
            secstring = "0" + secstring
        }
        if (count < 10) {
            countstring = "0" + countstring
        }
        document.getElementById('hr').innerHTML = hrString
        document.getElementById("min").innerHTML = minstring
        document.getElementById('sec').innerHTML = secstring
        document.getElementById('count').innerHTML = countstring
        setTimeout(stopWatch, 1)
    }

}