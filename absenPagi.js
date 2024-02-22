const { Builder, By } = require("selenium-webdriver");
const cron = require('node-cron');

async function absenPagi() {
  const driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("ISI_URL_DISINI");
    
    await delay(2000);

    await driver.findElement(By.className('button-presence')).click();

    await delay(2000);
    
    await driver.findElement(By.css('input[type="number"]')).sendKeys('ISI_ID/USERNAME_DISINI')
    
    await driver.findElement(By.css('input[type="password"]')).sendKeys('ISI_PASSWORD_DISINI');

    await delay(2000);
    
    await driver.findElement(By.className('button-send')).click();

    await delay(2000);

    await driver.findElement(By.className('check')).click();

    await delay(2000);

    await driver.findElement(By.css('textarea')).sendKeys('Pembekalan Online');
    
    await delay(2000);

    await driver.findElement(By.xpath('//button[.//span[text()="Konfirmasi"]]')).click();

  } catch (e) {
        console.log(e);
  } finally {
    console.log("Absen pagi berhasil!");
    // await driver.quit();
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
cron.schedule('30 7 * * *', () => {
    absenPagi();
},{
    timezone: "Asia/Jakarta"
});
