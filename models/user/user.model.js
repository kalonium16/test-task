const userData = require('./user.mongo');
const { getUserTotalSpend, getUserTotalRefund } = require('../transaction/transaction.model')
const ITEMS_PER_PAGE = 10;

async function getUsers(page, amount) {
    let itemsOnPage = amount ? amount : ITEMS_PER_PAGE;
    const options = {
        page: page,
        limit: itemsOnPage,
      };
    let users = await userData.paginate({},options);
    let response = [];
    response = await setUpResponseData(itemsOnPage, users.docs);
    return response;

}

async function setUpResponseData(itemsOnPage, users) {
    let spendAndRefundPromises = [];
    for (let i = 0; i < itemsOnPage; i++) {
        spendAndRefundPromises.push(getTotalSpendAndRefund(users, i));
    }
    let spendAndRefund = await Promise.all(spendAndRefundPromises);
    let response = [];
    for (let i = 0; i < itemsOnPage; i++) {
        response.push({ email: users[i].email, totalSpend: spendAndRefund[i][0], totalRefund: spendAndRefund[i][1] });
    }
    return response;
}

async function getTotalSpendAndRefund(users, i) {
    let spendAndReturn = await Promise.all([getUserTotalSpend(users[i]._id),getUserTotalRefund(users[i]._id)])  
    return  spendAndReturn;
}


module.exports = {
    getUsers
};

