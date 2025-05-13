// Importando bot e configurando token
const TelegramBot = require('node-telegram-bot-api');
const token = '8079491297:AAHGH82fftKAeTOcd8PQIPFyW7bF_k3eTTQ';

const bot = new TelegramBot(token, { polling: true });
console.log('Bot está rodando!');

// Função principal que recebe as mensagens
bot.on('message', (msg) => {
    const userId = msg.from.id;
    const userName = msg.from.username || 'sem_username';
    const message = msg.text;
    const timestamp = msg.date;
    const platform = 'telegram';

    console.log('Chegou mensagem nova:');
    console.log('Usuario:', userName);
    console.log('ID:', userId);
    console.log('Mensagem:', message);
    console.log('Hora:', timestamp);
    console.log('De onde:', platform);

    // TODO: implementar lógica adicional aqui
});
