describe('WebdriverIO', () => { 
it('Comparación de imágenes con página de WebdriverIO', async () => {
   await browser.url('https://webdriver.io');
   await $(".navbar--fixed-top").waitForDisplayed();
   expect(
       await browser.checkElement(await $(".navbar--fixed-top"), "wdio-headerContainer", {
           /* opciones de configuración para el elemento */
       }),
       "Error: la barra de navegación de WebdriverIO no coincide con la original"
   ).equal(0);

   await browser.url('https://webdriver.io/blog/');
   await $('.navbar--fixed-top').waitForDisplayed();
   expect(await browser.checkElement(await $('.navbar--fixed-top'), 'wdio-headerContainer', {})).to.not.equal(0);
});
});