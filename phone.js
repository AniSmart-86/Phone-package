// ==========> The Observer Class ===========
class Observer {
    notify(phoneNumber) {
      // ==========> The Default observer just prints the phone number ======
      console.log(`Phone Number Dialed: ${phoneNumber}`);
    }
  }
  
  // ==========> The Another Observer Class =========
  class DialingObserver {
    notify(phoneNumber) {
      // =========> The Observer that prints a custom message along with the phone number =====
      console.log(`Now Dialing: ${phoneNumber}`);
    }
  }
  
  // ========> The Telephone Class with Observer Pattern =======
  class Telephone {
    constructor() {
      this.observers = [];
    }
  
    // ======== The Method to add observers ========
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // ========> The Method to remove observers ========
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    //=========> The Method to notify observers when a phone number is dialed =======
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.notify(phoneNumber));
    }
  
    //==========> Public method to dial a phone number ========
    dialPhoneNumber(phoneNumber) {
      // ======= Notify observers when a phone number is dialed =======
      this.notifyObservers(phoneNumber);
    }
  }
  
  // ======= > calling usage
  const telephone = new Telephone();
  
  // ======= > To Create observers
  const phoneNumberObserver = new Observer();
  const dialingObserver = new DialingObserver();
  
  // =========> To Add observers to the telephone
  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(dialingObserver);
  
  // ===========> To Dial a phone number
  telephone.dialPhoneNumber('+234-70232326');
  