// Demonstração: Automação com Playwright usando o Chrome

const { chromium } = require('playwright');

(async () => {
  console.log('🚀 PLAYWRIGHT NO CHROME');

  // ===== CONFIGURAÇÃO DO NAVEGADOR =====
  const browser = await chromium.launch({
    headless: false,     // Mostra o navegador (modo visível)
    channel: 'chrome',   // Força o uso do Google Chrome
  });

  const page = await browser.newPage()

  // ===== NAVEGAÇÃO E INTERAÇÃO =====
  console.time('Navegação Chrome'); // Marca o tempo da execução

  await page.goto('https://github.com/login');        // Acessa a página de login
  await page.fill('#login_field', 'matheus121gamer@gmail.com');   // Preenche o campo de usuário
  await page.fill('#password', '');        // Preenche o campo de senha
  await page.click('input[type="submit"]');           // Clica no botão de login
  await page.waitForTimeout(2002000);                    // Espera 2 segundos

  console.timeEnd('Navegação Chrome'); // Exibe o tempo de navegação

  // ===== ENCERRAMENTO =====
  await browser.close();
})();