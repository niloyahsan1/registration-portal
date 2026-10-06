const EVENT_CONFIG = {
  title: "Scriptwriting Workshop with Ayman Asib Shadhin",
  subtitle: "Organized by BRAC University Film Club",
  date: "November 10, 2025",
  time: "05:30 PM",
  venue: "Club Activity Room 4",
  fee: "BDT 100",
  bkashNumber: "01821833200",
  
  registrationDeadline: "November 9, 2025 10:00:00",
  deadlineLabel: "Registration open till 9th November 10:00 PM",
  
  googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbwU6CyFjh6T5116ChaDu6X2vVw6g4JUo_irVVayrxJE-XOV25kL9Wz9ocAvKT2s_7rk/exec"
};

function isRegistrationOpen() {
  const deadline = new Date(EVENT_CONFIG.registrationDeadline).getTime();
  const now = new Date().getTime();
  return deadline > now;
}
