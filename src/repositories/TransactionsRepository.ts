import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const incomeBalance = (await this.find())
      .filter(transaction => transaction.type === 'income')
      .reduce((accumulator, transaction) => accumulator + transaction.value, 0);
    const outcomeBalance = (await this.find())
      .filter(transaction => transaction.type === 'outcome')
      .reduce((accumulator, transaction) => accumulator + transaction.value, 0);

    return {
      income: incomeBalance,
      outcome: outcomeBalance,
      total: incomeBalance - outcomeBalance,
    };
  }
}

export default TransactionsRepository;
