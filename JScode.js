const NFTs = [];
const transitionID = 12344321;
function metaNFTs(nameis,section,gender,age){
    const objects = {
        "_mame": nameis,
        "_sectionis": section,
        "_genderis": gender,
        "_ageis": age
    }
    NFTs.push(objects);
    console.log("these are names : "+ nameis);
    
}

function listNFTs(){
    for(let i=0;i<NFTs.length;i++){
        console.log(NFTs[i]);
    }
}
function getTotalSupply(){
    console.log(NFTs.length);
}

metaNFTs("boni",4,"M",12);
metaNFTs("jhoni",4,"M",13);
metaNFTs("honey",4,"M",12);
metaNFTs("sunny",4,"M",14);
metaNFTs("naini",4,"F",13);
listNFTs();
getTotalSupply();
console.log(transitionID);
