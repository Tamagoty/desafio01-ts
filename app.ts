import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PlusAccount } from './class/PlusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getBalance())
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
peopleAccount.withdraw(300)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(150)
console.log(companyAccount)
companyAccount.getLoan(100)

const plusAccount: PlusAccount = new PlusAccount('UltraPop', 30)
plusAccount.depositPlus(50)