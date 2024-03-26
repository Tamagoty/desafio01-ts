import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  depositPlus = (value: number): void => {
    if(this.validateStatus()) {
      this.deposit(value + 10)
      console.log(`Valor depositado com sucesso!`)
    }
  }
} 