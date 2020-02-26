const calculateEngravingPrice = function(message, pricePerWord) {
    let clearMessage = message.replace(/ {1,}/g, " ").trim(); //убирает лишние пробелы в строке
    let totalPrice = clearMessage.split(" ").length * pricePerWord;
  
    return `Цена гравировки всех слов состовляет ${totalPrice}`;
  };
  
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  );
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus", //160
      20
    )
  );
  console.log(
    calculateEngravingPrice(
      "Proin   sociis    natoque        et magnis      parturient montes mus", //160
      20
    )
  );
  console.log(
    calculateEngravingPrice(
      "Donec                           orci                  lectus aliquam est                magnis",
      40
    )
  );
  
  console.log(
    calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
  );