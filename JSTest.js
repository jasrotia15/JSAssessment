/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_Name , _Uid , _Section , _CGPA) {
   const nft = {
      "Name" : _Name,
      "UID" : _Uid,
      "Section" : _Section,
      "CGPA" : _CGPA

   }
   nfts.push(nft);
   console.log("Minted: " + _Name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i<nfts.length; i++){
      console.log("\nName: "+nfts[i].Name);
      console.log("UID: "+nfts[i].UID);
      console.log("Section: "+nfts[i].Section);
      console.log("CGPA: "+nfts[i].CGPA);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total Supply: "+nfts.length);
}

// call your functions below this line
mintNFT("Divya", "21BCS10446", "614", "8.68");
mintNFT("Nikhil", "21BCS10385", "651", "8.32");
mintNFT("Joelin", "21BCS10384", "651", "8.80");
mintNFT("Jyoti", "21BCS10616", "651", "7.99");
mintNFT("Aaina", "21BCS4620", "902", "8.43");
mintNFT("Ruchika", "21BCS10537", "614", "8.06");
mintNFT("Sudeep", "21BCS10773", "614", "7.75");

listNFTs();
console.log("\n");
getTotalSupply();
