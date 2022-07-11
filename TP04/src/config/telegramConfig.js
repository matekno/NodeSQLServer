import 'dotenv/config'

const options = {
    token: "5468921162:AAE6RG_VJeCC95xCNog4-DGWPzEBDR-cUxM",
    chatId: "-669689205",
    formatMessage: (message) => {return JSON.stringify(message, null, "\t")},
};

export default options;