// ==========================================
// RWJ WASTEWise
// Main Game JavaScript
// ==========================================

// Main game container
const game = document.getElementById("game");

// ==========================================
// START SCREEN
// ==========================================

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
    showPreSurvey();
});


// ==========================================
// PRE-SURVEY
// ==========================================

function showPreSurvey() {

    game.innerHTML = `
        <div class="screen survey-screen">

            <div class="survey-card">

                <h1>Before We Begin</h1>

                <p class="survey-intro">
                    Before starting the WasteWise training game,
                    please rate your confidence in sorting hospital waste.
                </p>

                <h2>How confident are you in correctly sorting hospital waste?</h2>

                <div class="confidence-options">

                    <button class="confidence-button" data-value="1">
                        1<br>
                        <span>Not Confident</span>
                    </button>

                    <button class="confidence-button" data-value="2">
                        2<br>
                        <span>Slightly Confident</span>
                    </button>

                    <button class="confidence-button" data-value="3">
                        3<br>
                        <span>Somewhat Confident</span>
                    </button>

                    <button class="confidence-button" data-value="4">
                        4<br>
                        <span>Confident</span>
                    </button>

                    <button class="confidence-button" data-value="5">
                        5<br>
                        <span>Very Confident</span>
                    </button>

                </div>

                <button id="continue-survey" disabled>
                    CONTINUE
                </button>

            </div>

        </div>
    `;

    let selectedConfidence = null;

    const confidenceButtons =
        document.querySelectorAll(".confidence-button");

    const continueButton =
        document.getElementById("continue-survey");


    // Select confidence level
    confidenceButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            // Remove previous selection
            confidenceButtons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            // Select this button
            button.classList.add("selected");

            selectedConfidence = button.dataset.value;

            // Enable continue button
            continueButton.disabled = false;
        });

    });


    // Continue to character selection
    continueButton.addEventListener("click", function() {

        console.log("Pre-survey confidence:",
                    selectedConfidence);

        showCharacterSelection();

    });

}


// ==========================================
// CHARACTER SELECTION
// ==========================================

function showCharacterSelection() {

    game.innerHTML = `

        <div class="screen character-screen">

            <div class="character-card">

                <h1>Choose Your Character</h1>

                <p>
                    Select the character you would like to use
                    throughout your training.
                </p>

                <div class="characters">

                    <button class="character-option"
                            data-character="Nurse">
                        
                        <div class="character-placeholder">
                            👩‍⚕️
                        </div>

                        <h2>Nurse</h2>

                    </button>


                    <button class="character-option"
                            data-character="Doctor">

                        <div class="character-placeholder">
                            👨‍⚕️
                        </div>

                        <h2>Doctor</h2>

                    </button>


                    <button class="character-option"
                            data-character="Technician">

                        <div class="character-placeholder">
                            🧑‍🔬
                        </div>

                        <h2>Technician</h2>

                    </button>

                </div>

                <button id="character-continue" disabled>
                    CONTINUE
                </button>

            </div>

        </div>

    `;


    let selectedCharacter = null;

    const characterOptions =
        document.querySelectorAll(".character-option");

    const continueButton =
        document.getElementById("character-continue");


    characterOptions.forEach(function(option) {

        option.addEventListener("click", function() {

            characterOptions.forEach(function(item) {
                item.classList.remove("selected");
            });

            option.classList.add("selected");

            selectedCharacter =
                option.dataset.character;

            continueButton.disabled = false;

        });

    });


    continueButton.addEventListener("click", function() {

        console.log(
            "Selected character:",
            selectedCharacter
        );

        alert(
            "Character selected: " +
            selectedCharacter +
            "\n\nNext we will build the hospital map!"
        );

    });

}
