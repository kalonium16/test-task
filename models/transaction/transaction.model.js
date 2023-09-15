const transactionData = require('./transaction.mongo');

async function getUserTotalSpend(userId){
    let userTransactions = await transactionData.find({user:userId,destination:"lead_buy"}).select("amount");
    let totalSpend = userTransactions.reduce((acc, curr) => {
        return acc + curr.amount;
    },0)
    
    return totalSpend;
};

async function getUserTotalRefund(userId){
    let userTransactions = await transactionData.find({user:userId,destination:"order_refund"}).select("amount");
    let totalRefund = userTransactions.reduce((acc, curr) => {
            return acc + curr.amount;
        },0)
    return totalRefund;
};

module.exports = {
    getUserTotalSpend,
    getUserTotalRefund
}