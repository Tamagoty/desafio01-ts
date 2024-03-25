import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private balaceLoan: number
  
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    this.balaceLoan = 500
  }

  getLoan = (value: number): void => {
    if (this.validateStatus() && this.balaceLoan > value) {
      this.balaceLoan -= value
      console.log(`Você fez um empestimo de ${value} seu novo saldo de emprestimo é: R$ ${this.balaceLoan}`)
    } else {
      console.log(`Verifique a situação de sua`)
    }
  }
}
