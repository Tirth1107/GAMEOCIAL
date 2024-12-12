// Correct password (hardcoded for this example)
        const correctPassword = "11072008"; // Change this to whatever password you want

        // Function to check the entered password
        function checkPassword() {
            const enteredPassword = document.getElementById("password").value;
            if (enteredPassword === correctPassword) {
                // Hide password modal and show the content
                document.getElementById("password-modal").style.display = "none";
                document.getElementById("content").style.display = "block";
            } else {
                alert("Incorrect password. Please try again.");
            }
        }