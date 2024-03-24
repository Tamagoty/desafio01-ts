export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance+=value
      console.log(`Valor depositado com sucesso, seu novo saldo é: R$ ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && value<=this.balance){
      this.balance -= value
      console.log(`Saque efetuado com sucesso, seu novo saldo é: R$ ${this.balance}`)
    } else {
      console.log(`Não foi possivel efetuar o saque, verifique o status de sua conta e o seu saldo`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
