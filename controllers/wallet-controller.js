
const txListener = require("../listeners/tx-listener");
const TransactionListener = require("../listeners/listener");
const { TX_QR_EVENT } = require("../events");
// const EventEmitter = require("events").EventEmitter;
const TSIController = require("./tsi-controller");

const getAccounts = (cb, walletController) => {
    TSIController.getAccounts().then(accounts => {
        cb(null, accounts)
    }).catch(cb);
}

const signTransaction = (rawTx, cb) => {
    //Create files similar to DBListener for other listeners.
    // Seperated in order to support more listeners like TSI SASS listener
    const listener = new TransactionListener(txListener);
    listener.createTransaction(rawTx)
        .then(id => {
            TSIController.emit(TX_QR_EVENT, id);
            listener.start(id, cb);
        })
}

module.exports = {
    getAccounts,
    signTransaction
}