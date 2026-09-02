// Authentication module.
// This is intentionally simple because Git/GitHub practice is the main goal.

function login(username) {
  if (!username) {
    return { success: false, message: "Username is required" };
  }

  return { success: true, username };
}

module.exports = { login };
