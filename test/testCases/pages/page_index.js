import webdriver from 'selenium-webdriver';

import { httpsPort } from '../../../config/env';


export default driver => {
    const By    = webdriver.By;
    const until = webdriver.until;
    const elements = {
        amountInput:          By.name('amount'),
        fromInput:            By.name('from'),
        toInput:              By.name('to'),
        dateFromInput:        By.name('dateFrom'),
        dateToInput:          By.name('dateTo'),
        advancedSearchButton: By.name('advancedSearch'),
        searchButton:         By.name('search'),
        toggleSignupButton:   By.name('toggleSignup'),
        mailInput:            By.name('mail'),
        signupButton:         By.name('signup'),
    };

    return {
        url:  `https://localhost:${httpsPort}/`,
        elements: elements,
        waitUntilVisible: () => driver.wait(until.elementLocated(elements.toggleSignupButton)),
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },
        enterMail: value => driver.findElement(elements.mailInput).sendKeys(value),
        toggleSignup: () => driver.findElement(elements.toggleSignupButton).click(),
        signup: () => driver.findElement(elements.signupButton).click(),
    };
};
