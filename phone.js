// 1. Observer Class
class Observer {
    notify(phoneNumber) {
      // Default observer just prints the phone number
      console.log(`Phone Number Dialed: ${phoneNumber}`);
    }
  }
  
  // 2. Another Observer Class
  class DialingObserver {
    notify(phoneNumber) {
      // Observer prints a custom message along with the phone number
      console.log(`Now Dialing: ${phoneNumber}`);
    }
  }
  
  // 3. Telephone Class with Observer Pattern
  class Telephone {
    constructor() {
      this.observers = [];
    }
  
    // Method to add observers
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Method to remove observers
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Method to notify observers when a phone number is dialed
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.notify(phoneNumber));
    }
  
    // Public method to dial a phone number
    dialPhoneNumber(phoneNumber) {
      // Notify observers when a phone number is dialed
      this.notifyObservers(phoneNumber);
    }
  }
  
  // Example usage
  const telephone = new Telephone();
  
  // Create observers
  const phoneNumberObserver = new Observer();
  const dialingObserver = new DialingObserver();
  
  // Add observers to the telephone
  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(dialingObserver);
  
  // Dial a phone number
  telephone.dialPhoneNumber('2347023232');
  