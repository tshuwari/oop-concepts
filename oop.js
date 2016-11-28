// Laptop class
function Laptop(brand, model, ram, os){
  this.brand      = brand;
  this.model      = model;
  this.ramSize    = ram;
  this.os         = os;
  this.computer   = true;
}
// Parent methods
Laptop.prototype.playMovie = function(movieName){
    return "Playing " + movieName + " with " + this.brand;
};
Laptop.prototype.installSoftware = function(){
    if(this.ramSize > 2){
        return "You can proceed with your download";
    }
    else{
        return "Installation failed, you need more than " + this.ramSize + " gb of ram to proceed with installation";
    }
};

Laptop.prototype.displayResolution = function(screen_size){
    switch(screen_size){
        case "11'":
            console.log ("Screen Resolution: 1366 x 768");
        break;
        case "12'":
            console.log ("Screen Resolution: 1280 x 800");
        break;
        case "13'":
            console.log ("Screen Resolution: 1440 x 900");
        break;
        case "14'":
            console.log ("Screen Resolution: 1400 x 1050");
        break;
        case "15'":
            console.log ("Screen Resolution: 1600 x 1200");
        break;
      default:
         console.log ("Screen Resolution: 1024 x 768");
    }
  };

  Laptop.prototype.sendToPrinter = function(){
      return "Sending documents to printer";
  };

//Hp class calls the laptop class
  function Hp(brand, model, ram, os){
      Laptop.call(this, brand, model, ram, os);
  }
// Hp class extends Laptop class 
  Hp.prototype               = Object.create(Laptop.prototype);
  Hp.prototype.constructor   = Hp;
//Hp method overides the laptop sendToPrinter method 
  Hp.prototype.sendToPrinter = function(){
      return "Documents has been sent to the printer";
  };
// Macbook class calls the laptop class
  function Macbook(brand, model, ram, os){
      Laptop.call(this, brand, model, ram, os);
      var productId     = "43599-OEM-6492087-00284"; //private variable
  }  
      this.getProductId = function(productId){
        return productId;
 };

// Macbook class extends Laptop class   
 Macbook.prototype             = Object.create(Laptop.prototype);
 Macbook.prototype.constructor = Macbook;
 
// creates instances 
  var myHp    = new Hp("HEWLETT-PACKARD", "Envy 360", "8", "Windows 10");
  var yourMac = new Macbook("MACINTOSH", "Mac air", "32", "Mac OS", "43599-OEM-6492087-00284");

console.log("--------------HP-------------");
console.log("Brand: "             +myHp.brand);
console.log("Model: "             +myHp.model);
console.log("RAM: "               +myHp.ramSize);
console.log("OS: "                +myHp.os);
console.log("Computer: "          +myHp.computer);
console.log("Play movie: "        +myHp.playMovie("Deadpool"));
console.log("Installation info: " +myHp.installSoftware());
console.log("Printer info: "      +myHp.sendToPrinter());
console.log("");

console.log("--------------MACBOOK-------------");
console.log("Brand: "             +yourMac.brand);
console.log("Model: "             +yourMac.model);
console.log("RAM: "               +yourMac.ramSize);
console.log("OS: "                +yourMac.os);
console.log("Computer: "          +yourMac.computer);
console.log("Play movie: "        +yourMac.playMovie("Deadpool"));
console.log("Installation info: " +yourMac.installSoftware());
console.log("Printer info: "      +yourMac.sendToPrinter());

