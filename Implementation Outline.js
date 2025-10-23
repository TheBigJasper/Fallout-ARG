// Example vault registration logic
function registerVault() {
  const selectedId = parseInt(document.getElementById("vaultSelect").value);
  const username = document.getElementById("username").value.trim();
  const corrupted = username === "[COrRupteD Us3r]";

  // Corrupted user alert
  if(corrupted){
    alert("Its'y lt yt ymj 4ym kqttw, wzs wzs wzs wzs wzs wzs wzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzswzs");
  }

  if(selectedId <= 112){
    alert("Vault is full.");
  } else if(selectedId === 113 || selectedId === 123){
    alert(`Vault ${selectedId} registered successfully for ${username}`);
  } else if(selectedId === 114){
    // handle 6-click sequence Easter egg
    handleVault114Clicks();
  }
}

// Diary initialization per user
const diaryEntries = {};

function initDiary(username) {
  const numEntries = username === "[COrRupteD Us3r]" ? 5 : 20;
  diaryEntries[username] = [];

  for(let i=0;i<numEntries;i++){
    // randomly decide if entry is encrypted with three-number scheme
    const encrypted = Math.random() < 0.5 ? generateRandomEncryption() : "";
    diaryEntries[username].push({text:"", encrypted});
  }
}

// Helper: generate a random three-number encryption placeholder
function generateRandomEncryption(){
  let arr = [];
  for(let i=0;i<3;i++){
    arr.push(Math.floor(Math.random()*900 + 100)); // random 100-999
  }
  return arr.join("-");
}

// Usage:
// After login:
initDiary(loggedInUser); // will generate entries
