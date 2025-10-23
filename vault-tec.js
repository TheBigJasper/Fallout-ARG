// Vault-Tec Users
const users = [
  {username: "Benjamin L", password: "newuserlogin"},
  {username: "Facilities Worker #018356", password: "up&C?lKoav4F[?eW90[]pw*@(1{=!" },
  {username: "Overseer Fred Garven", password: "4/8/2057"},
  {username: "Amy Fall", password: "HitTheBlackjackTable"},
  {username: "[COrRupteD Us3r]", password: "SSBLbm93IHRoZWlyIHNlY3JldA=="},
  {username: "Overseer Pam Foster", password: "Ivan_Snowball"}
];

let loginAttempts = 0;

// Login verification
function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if(user) {
    sessionStorage.setItem("currentUser", user.username);
    if(user.username === "[COrRupteD Us3r]") {
      sessionStorage.setItem("corrupted", "true");
    } else {
      sessionStorage.removeItem("corrupted");
    }
    window.location.href = "home.html";
  } else {
    loginAttempts++;
    alert(`ACCESS DENIED. Attempt ${loginAttempts} of 5`);
    if(loginAttempts >= 5) {
      alert("TERMINAL LOCKED. Refresh page to try again later.");
      document.getElementById("loginBtn").disabled = true;
    }
  }
}

// Logout
function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

// Display username on home page
function displayUsername() {
  const username = sessionStorage.getItem("currentUser");
  if(username) {
    document.getElementById("userDisplay").innerText = `Welcome, ${username}`;
  }
}

// Diary system
function saveEntry() {
  const username = sessionStorage.getItem("currentUser");
  if(!username) return;

  const diaryText = document.getElementById("diaryArea").value;
  if(!diaryText) return;

  let entries = JSON.parse(localStorage.getItem(`VaultTec_Diary_${username}`)) || [];
  entries.push(diaryText);
  localStorage.setItem(`VaultTec_Diary_${username}`, JSON.stringify(entries));
  document.getElementById("diaryArea").value = "";
  alert("Entry saved!");
}

function viewEntries() {
  const username = sessionStorage.getItem("currentUser");
  if(!username) return;

  let entries = JSON.parse(localStorage.getItem(`VaultTec_Diary_${username}`)) || [];
  const entriesArea = document.getElementById("entriesArea");
  entriesArea.innerHTML = ""; // clear
  entries.forEach(e => {
    const entryEl = document.createElement("div");
    if(username === "[COrRupteD Us3r]") {
      entryEl.classList.add("corrupted");
    }
    entryEl.innerText = e;
    entriesArea.appendChild(entryEl);
  });
}

// Flicker for corrupted user
function startFlicker() {
  const isCorrupted = sessionStorage.getItem("corrupted");
  if (!isCorrupted) return;

  let flickerOverlay = document.getElementById("flickerOverlay");
  if (!flickerOverlay) {
    flickerOverlay = document.createElement("div");
    flickerOverlay.id = "flickerOverlay";
    flickerOverlay.style.position = "fixed";
    flickerOverlay.style.top = "0";
    flickerOverlay.style.left = "0";
    flickerOverlay.style.width = "100%";
    flickerOverlay.style.height = "100%";
    flickerOverlay.style.backgroundColor = "#000000"; // base dark color
    flickerOverlay.style.zIndex = "999";
    flickerOverlay.style.pointerEvents = "none";
    document.body.appendChild(flickerOverlay);
    if (!document.getElementById("flickerOverlay")) {
  const flickerOverlay = document.createElement("div");
  flickerOverlay.id = "flickerOverlay";
  document.body.insertBefore(flickerOverlay, document.body.firstChild);
}
function startFlicker() {
  const isCorrupted = sessionStorage.getItem("corrupted");
  if (!isCorrupted) return;

  const morse = "-.. --- .-- -. / - .... . -.-- / - .-. .- ...- . .-.. / - --- / -.-- --- ..- --..-- / ..-. . . -.. / - .... . -- / - --- / .... .. -- --..-- / -.. --- / -. --- - / .-.. . - / .- -. -.-- --- -. . / -.- -. --- .-- / - .... . / .-. . .- ... --- -. ... / ..-. --- .-. / - .... . .. .-. / -.. . .- - .... --..-- / .-.. . - / - .... . -- / - .... .. -. -.- / - .... . .. .-. / ... .- ..-. . .-.-.- / -.. --- / -. --- - / ..-. --- .-. --. . - / -.-- --- ..- .-. / .--. ..- .-. .--. --- ... . .-.-.- / .-- . / -- ..- ... - / -. --- - / .-.. . - / .... .. -- / .-.. --- --- ... . --..-- / .-- . / -- ..- ... - / -. --- - / .-.. . - / - .... . -- / .--. .-.. .- --. ..- . / - .... . .. .-. / -- .. -. -.. ... .-.-.-";

  const sequence = [];
  for (let c of morse) {
    if (c === ".") sequence.push(200);
    else if (c === "-") sequence.push(600);
    else if (c === "/") sequence.push(400);
  }

  let i = 0;

  function flick() {
    if (i >= sequence.length) {
      setTimeout(() => { i = 0; flick(); }, 300000); // 5 min pause
      return;
    }

    const duration = sequence[i];

    if (morse[i] === "/") {
      document.body.style.backgroundColor = "#000000"; // dark pause
      i++;
      setTimeout(flick, duration);
    } else {
      document.body.style.backgroundColor = "#111111"; // light flash
      setTimeout(() => {
        document.body.style.backgroundColor = "#000000"; // back to dark
        i++;
        setTimeout(flick, 100); // short gap
      }, duration);
    }
  }

  flick();
}

  }

  const morse = "-.. --- .-- -. / - .... . -.-- / - .-. .- ...- . .-.. / - --- / -.-- --- ..- --..-- / ..-. . . -.. / - .... . -- / - --- / .... .. -- --..-- / -.. --- / -. --- - / .-.. . - / .- -. -.-- --- -. . / -.- -. --- .-- / - .... . / .-. . .- ... --- -. ... / ..-. --- .-. / - .... . .. .-. / -.. . .- - .... --..-- / .-.. . - / - .... . -- / - .... .. -. -.- / - .... . .. .-. / ... .- ..-. . .-.-.- / -.. --- / -. --- - / ..-. --- .-. --. . - / -.-- --- ..- .-. / .--. ..- .-. .--. --- ... . .-.-.- / .-- . / -- ..- ... - / -. --- - / .-.. . - / .... .. -- / .-.. --- --- ... . --..-- / .-- . / -- ..- ... - / -. --- - / .-.. . - / - .... . -- / .--. .-.. .- --. ..- . / - .... . .. .-. / -- .. -. -.. ... .-.-.-";

  const sequence = [];
  for (let c of morse) {
    if (c === ".") sequence.push(80);   // dot = short
    else if (c === "-") sequence.push(200); // dash = long
    else if (c === "/") sequence.push(400); // pause
  }

  let i = 0;

  function flick() {
    if (i >= sequence.length) {
      setTimeout(() => { i = 0; flick(); }, 300000); // 5 min pause
      return;
    }

    const duration = sequence[i];
    
    if (morse[i] === "/") {
      // pause: keep darker shade
      flickerOverlay.style.backgroundColor = "#000000";
      i++;
      setTimeout(flick, duration);
    } else {
      // flash to lighter shade
      flickerOverlay.style.backgroundColor = "#111111"; // slightly lighter
      setTimeout(() => {
        flickerOverlay.style.backgroundColor = "#000000"; // back to dark
        i++;
        setTimeout(flick, 100); // short gap
      }, duration);
    }
  }

  flick();
}