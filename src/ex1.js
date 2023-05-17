function evaluateCarSpeed(speed) {
    if (speed < 0) {
      return "Invalid";
    } else if (speed < 40) {
      return "Low";
    } else if (speed < 120) {
      return "Normal";
    } else if (speed < 200) {
      return "High";
    } else if (speed < 220) {
      return "V.High";
    } else {
      return "Invalid";
    }
  }