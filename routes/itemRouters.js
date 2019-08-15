import express from 'express';
import itemControllers from '../controllers/itemControllers';
const puppeteer = require('puppeteer');
const request = require('request');
const cheerio = require('cheerio');
const Router = express.Router();

Router.get('/get-all', itemControllers.getAllItem);
Router.get('/get-hot', itemControllers.getHotItem);
Router.get('/get-html', async (req, res, next) => {
    const args = [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "'
    ];

    const options = {
        args,
        headless: false,
        ignoreHTTPSErrors: true,
        userDataDir: 'C:/Users/Ngan Heo/AppData/Local/Google/Chrome/User Data/Default',
        executablePath: "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe"
    };
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height:720 });
    await page.goto('https://onlineservices.immigration.govt.nz/?WHS');
    await page.screenshot({
        path: 'example.png'
    });
});

export default Router;
