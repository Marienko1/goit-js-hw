const formatString = function(string) {
    let clearString = string.replace(/ {1,}/g, " ").trim();
  
    if (clearString.length > 40) {
      clearString = clearString.slice(0, 40) + "...";
    }
    return clearString;
  };
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  
  console.log(formatString("Curabitur ligula sapien."));
  
  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );