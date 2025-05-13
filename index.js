
// 1️⃣ Importa a biblioteca do Telegram
const TelegramBot = require('node-telegram-bot-api');

// 2️⃣ Token do bot (gerado no BotFather)
const token = '8079491297:AAHGH82fftKAeTOcd8PQIPFyW7bF_k3eTTQ'; // ⚠️ Substitua por seu token real, mas nunca compartilhe

// 3️⃣ Cria o bot em modo "polling" (escuta ativa de mensagens)
const bot = new TelegramBot(token, { polling: true });

console.log('🤖 Bot iniciado e esperando mensagens...');

// 4️⃣ Quando o bot receber qualquer mensagem, executa essa função
bot.on('message', (msg) => {
  // Extrai dados da mensagem
  const userId = msg.from.id;
  const userName = msg.from.username || 'sem_username';
  const message = msg.text;
  const timestamp = msg.date;
  const platform = 'telegram';

  // 5️⃣ Exibe as informações no terminal (simulando o envio para backend)
  console.log('\n📥 Nova mensagem recebida:');
  console.log(`🧑 Usuário: ${userName}`);
  console.log(`🆔 ID do usuário: ${userId}`);
  console.log(`💬 Mensagem: ${message}`);
  console.log(`🕒 Timestamp: ${timestamp}`);
  console.log(`📱 Plataforma: ${platform}`);

  // 6️⃣ Aqui futuramente vamos enviar os dados para o backend (Parte 2)
});
