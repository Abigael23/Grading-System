let input = document.getElementById("grade")
let show = document.getElementById("show")
function activate() {
    if ((input.value) <= 39) {
        alert("Failed")
        show.innerHTML = "You have failed!"
    } else if ((input.value) <= 49) {
        alert("Passed")
        show.innerHTML = "You have passed!"
    } else if ((input.value) >= 50 && (input.value) <= 59) {
        alert("Good")
        show.innerHTML = "You made it"
    } else if ((input.value) >= 60 && (input.value) <= 69) {
        alert("Very Good")
        show.innerHTML = "You are very good"
    } else if ((input.value) >= 70 && (input.value) <= 100) {
        alert("Distinction")
        show.innerHTML = "You performed excellently well"
    }
}