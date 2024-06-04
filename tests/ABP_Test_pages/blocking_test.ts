export const utilsData = require('../../utils/utils.json');
import { blockingPage } from '../../pages/BlockingPage';

Feature('Blocking');


AfterSuite(({ I }) => {
  blockingPage.clearTopic("filters");
  I.see("OK");
  blockingPage.clearTopic("subscriptions");
  I.see("OK");
})

Scenario(
  'Test that a blocking filter describing a full path blocks its target.',
  ({ I }) => {
    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_FullPath);
    
    blockingPage.changeConfiguration("filters", "add", blockingPage.filter_FullPath);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_FullPath);
  }
).tag('@blocking');

Scenario(
  'Test that a blocking filter describing a partial path blocks its target.',
  ({ I }) => {
    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_PartialPath);
    
    blockingPage.changeConfiguration("filters", "add", blockingPage.filter_PartialPath);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_PartialPath);
  }
).tag('@blocking');

Scenario(
  'Test that a blocking filter describing a path with wildcards blocks its target.',
  ({ I }) => {
    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_Wildcard_1);
    I.seeElement(blockingPage.fail_Wildcard_2);
    
    blockingPage.changeConfiguration("filters", "add", blockingPage.filter_Wildcard);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_Wildcard_1);
    I.dontSeeElement(blockingPage.fail_Wildcard_2);
  }
).tag('@blocking');

Scenario(
  'Test that a blocking filter describing a path of a resource that is later dynamically added to the page blocks its target.',
  ({ I }) => {
    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_Dynamic);
    
    blockingPage.changeConfiguration("filters", "add", blockingPage.filter_Dynamic);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_Dynamic);
  }
).tag('@blocking');

Scenario(
  'Test that a blocking filter for a 3-component domain blocks a 4-component subdomain path.',
  ({ I }) => {
    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_DeepSubdomain);
    
    blockingPage.changeConfiguration("filters", "add", blockingPage.filter_DeepSubdomains);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_DeepSubdomain);
  }
).tag('@blocking');

Scenario(
  'Test that subscription list works correctly',
  ({ I }) => {
    blockingPage.clearTopic("filters");

    I.amOnPage(utilsData.blockingPageLink)
    I.seeElement(blockingPage.fail_DeepSubdomain);
    I.seeElement(blockingPage.fail_FullPath);
    I.seeElement(blockingPage.fail_Dynamic);
    I.seeElement(blockingPage.fail_PartialPath);
    I.seeElement(blockingPage.fail_Wildcard_1);
    I.seeElement(blockingPage.fail_Wildcard_2);
    
    blockingPage.changeConfiguration("subscriptions", "add", blockingPage.subscriptionList);
    I.see("OK");

    I.amOnPage(utilsData.blockingPageLink);
    I.refreshPage();

    I.dontSeeElement(blockingPage.fail_DeepSubdomain);
    I.dontSeeElement(blockingPage.fail_FullPath);
    I.dontSeeElement(blockingPage.fail_Dynamic);
    I.dontSeeElement(blockingPage.fail_PartialPath);
    I.dontSeeElement(blockingPage.fail_Wildcard_1);
    I.dontSeeElement(blockingPage.fail_Wildcard_2);
  }
).tag('@blocking');