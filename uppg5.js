
function uppg5(tal1, tal2) {
    if (tal1 > tal2) {
        console.log("Det första talet är större än det andra");
    } if(tal1== tal2){
         console.log("Första talet är lika med det andra");
    }
    else {
        console.log("Det andra talet är större än det första");
    }
}

uppg5(tal1, tal2);

module.exports = { uppg5 };