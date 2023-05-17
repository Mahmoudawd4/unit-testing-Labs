function evaluateStudentScore(score) {
    if (score < 0) {
      return "Invalid";
    } else if (score < 50) {
      return "Failed";
    } else if (score < 65) {
      return "Passed";
    } else if (score < 75) {
      return "Good";
    } else if (score < 85) {
      return "V.Good";
    } else if (score < 100) {
      return "Excellent";
    } else {
      return "Invalid";
    }
  }