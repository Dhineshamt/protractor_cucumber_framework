import { browser, Config } from "protractor";
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    defaultConnect: false,
    ignoreUncaughtExceptions: true,
    params: {
        url: "https://www.w3schools.com/"
    },

    //Cucumber related config
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    SELENIUM_PROMISE_MANAGER: false,
    defaultTimeoutInterval: 300000,

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu", "--window-size=800,600" ]
        },
        // shardTestFiles: true,
     
    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    // maxInstances: 2,
    },
    
    // multiCapabilities: [
    //     {'browserName': 'chrome'},
    //     {'browserName': 'firefox'},
    // ],

    specs: ['../features/*.feature', ],

    cucumberOpts: {
        // tags: ['@smoke'],
        format: 'json:./cucumberreport.json',
        require: [
            './step-definitions/*.js'
        ]
    },

    onPrepare() {
        browser.waitForAngularEnabled(false);
    },

    onComplete: () => {
        let options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options)
    }
    
}