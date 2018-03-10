Tone.context.latencyHint = 'fastest';

const reverb = new Tone.Freeverb({
    roomSize: 0.9,
    dampening: 3000
}).connect(Tone.Master);

const synth = new Tone.FMSynth({
    harmonicity: 13,
    modulationIndex: 10,
    detune: 0,
    oscillator: {
        type: 'sine'
    },
    envelope: {
        attack: 0.01,
        decay: 2,
        sustain: 0,
        release: 1
    },
    modulation: {
        type: 'square'
    },
    modulationEnvelope: {
        attack: 0.5,
        decay: 2,
        sustain: 0,
        release: 1
    }
}).connect(reverb);

const game = document.getElementById('game');
const piano = document.getElementById('piano');
const start = document.getElementById('start');
const yes = document.getElementById('yes');

let count = 0;
let answer;
let question;
let answerId = document.getElementById('answer');

const noteArray = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6"];

const randomNote = (x) => {
    return noteArray[Math.floor(Math.random() * (35 - 0 + 1)) + 0];
};

piano.addEventListener('mousedown', (e) => e.target.style.backgroundColor = 'red');

piano.addEventListener('click', (e) => {
    synth.triggerAttack(e.target.id, '4n');
    answerId.textContent = `Your choose is ${e.target.id}`;
    e.target.style.backgroundColor = '';
    answer = e.target.id;

});

game.addEventListener('click', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'start':
            question = randomNote();
            synth.triggerAttack(question, '4n');
            start.style.display = 'none';
            yes.style.display = 'inline-block';
            answerId.style.display = 'inline-block';
            target.style.backgroundColor = '';
            break;
        case 'yes':
            if (answer === question) {
                count += 1;
                alert(`Right! Your score is ${count}`);
                question = randomNote();
                synth.triggerAttack(question, '4n');
                target.style.backgroundColor = '';
            } else {
                alert('Game Over! Your score is ' + count);
                count = 0;
                start.style.display = 'inline-block';
                yes.style.display = 'none';
                answerId.style.display = 'none';
                target.style.backgroundColor = '';
            };
    };
});

game.addEventListener('mousedown', (e) => {
    let target = e.target;
    if (target.id === 'start' || target.id === 'yes') {
        target.style.backgroundColor = 'red';
    };
});