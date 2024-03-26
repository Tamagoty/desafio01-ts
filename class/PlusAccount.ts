import { DioAccount } from "./DioAccount"

export class PlusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    if(this.validateStatus()) {
      
      console.log(`Valor depositado com sucesso!`)
    }
  }
} 