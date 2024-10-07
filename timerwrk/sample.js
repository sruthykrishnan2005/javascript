// let countdown;
//         const timerDisplay = document.getElementById('timer');

//         document.getElementById('startButton').addEventListener('click', () => {
//             const minutes = parseInt(document.getElementById('minutes').value) || 0;
//             const seconds = parseInt(document.getElementById('seconds').value) || 0;
//             let totalTime = minutes * 60 + seconds;

//             clearInterval(countdown);

//             countdown = setInterval(() => {
//                 const mins = Math.floor(totalTime / 60);
//                 const secs = totalTime % 60;

//                 timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

//                 if (totalTime <= 0) {
//                     clearInterval(countdown);
//                     alert("Time's up!");
//                 } else {
//                     totalTime--;
//                 }
//             }, 1000);
//         });