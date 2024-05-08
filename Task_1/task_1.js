//TODO: A colleague is stuck because his script spits out an error. 
//Help him/her find the error and solve it. (See Code below)


//this function returns back if the phone number is from germany(+49) or spain(+34)
//this function also accepts calling codes with a plus in front. Nevertheless, they need to send a boolean for that.
function telNCountry(tn, plusInTN) {

    if (plusInTN === true) {
      if (tn.substring(1) == 3) {
        return 'spain';
      }
      if (tn.substring(1) == 4) return 'germany';
    }
  
  
  
    if (plusInTN == false) {
      if (tn.substring(2) == 3) {
        return 'spain';
      }
      if (tn.substring(2) == 4) return 'germany';
    }
  }