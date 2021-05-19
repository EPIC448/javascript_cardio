
let hashMap = []
function Account(name, balance, creditCardNum,) {
    this.name = name;
    this.balance = balance;
    this.creditCard = creditCardNum
}

//Charges increase the balance of card assoicated with Provided name by the amount specified.
// Need to include Validation with Luhn 10
Account.prototype.charge = function(amount) {
    if (this._isPositive(amount)) {
      this.balance += amount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
}
// decrease the balance of the card assoicated with the provided name by the amount specified.
// Need to include Validation with Luhn 10
Account.prototype.credit = function(amount) {
    if (this._isAllowed(amount)) {
      this.balance -= amount;
      console.info(`Charge: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
}
  

Account.prototype._isAllowed = function(amount) {
    if (!this._isPositive(amount)) return false;
  
    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
      console.error('You have insufficent funds!');
      return false;
    }
    return true;
}
  

Account.prototype._isPositive = function(amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
      console.error('Amount must be positive!');
      return false;
    }
    return true;
  }



const a = new Account('john', 1000, '3423425')
const b = new Account('lisa', 2000, '0000000')
a.charge(500)
hashMap.push(a)

console.log(`
 (${a.name}, ${a.balance}),
 (${b.name},${b.balance})
`)

console.log(a)
