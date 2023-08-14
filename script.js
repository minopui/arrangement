function convertAndDisplay() {
  const inputText = document.getElementById("inputText").value;
  const dateEntries = inputText.split("\n").filter(entry => entry.trim() !== "");
  const entriesByDate = {};

  dateEntries.forEach(entry => {
    const parts = entry.match(/(\d+\/\d+)\((.+?)\)\s(\d+:\d+)/);
    if (parts) {
      const date = parts[1];
      const dayOfWeek = parts[2];
      const time = parts[3];

      if (!entriesByDate[date]) {
        entriesByDate[date] = [];
      }

      entriesByDate[date].push({ dayOfWeek, time });
    }
  });

  const sortedDates = Object.keys(entriesByDate).sort();
  let outputText = "";

  sortedDates.forEach(date => {
    const entries = entriesByDate[date];
    entries.forEach(entry => {
      const timesOfDay = ["朝", "昼", "夜"];
      timesOfDay.forEach(timeOfDay => {
        outputText += `${date}(${entry.dayOfWeek}) ${timeOfDay}\n`;
      });
    });
  });

  document.getElementById("outputText").value = outputText;
}


function copyOutput() {
  const outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
}
