/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeeks {
  Montag = "Montag",
  Dienstag = "Dienstag",
  Mittwoch = "Mittwoch",
  Donnerstag = "Donnerstag",
  Freitag = "Freitag",
  Samstag = "Samstag",
  Sonntag = "Sonntag"
}


function isWeekend(day: DayOfWeeks): boolean {
  return day === DayOfWeeks.Samstag || day === DayOfWeeks.Sonntag
}

console.log(isWeekend(DayOfWeeks.Samstag));
console.log((isWeekend(DayOfWeeks.Dienstag)));

