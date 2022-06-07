import 'dotenv/config'

const options = {
    token: process.env.TELEGRAM_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
    formatMessage: (message) => {return JSON.stringify(message, null, "\t")},
};

export default options;