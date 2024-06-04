const I = actor();
export const utilsData = require('../utils/utils.json');

export const blockingPage = {
  filter_FullPath: "||abptestpages.org/testfiles/blocking/full-path.png",
  filter_PartialPath: "/testfiles/blocking/partial-path/",
  filter_Wildcard: "/testfiles/blocking/wildcard/*/wildcard.png",
  filter_Dynamic: "/testfiles/blocking/dynamic.png",
  filter_DeepSubdomains: "||subdomain.abptestpages.org/testfiles/blocking/subdomain.png",
  subscriptionList: "https://abptestpages.org/en/abp-testcase-subscription.txt",
  fail_FullPath: '#full-path-fail-1',
  fail_PartialPath: '#partial-path-fail-1',
  fail_Wildcard_1: '#wildcard-fail-1',
  fail_Wildcard_2: '#wildcard-fail-1',
  fail_Dynamic: '#dynamic-fail-1',
  fail_DeepSubdomain: '#deep-subdomains-fail-1',
  
  changeConfiguration(topic, action, name) {
    I.amOnPage("https://adblock.test.data/" + topic + "/" + action + "/" + `${encodeURIComponent(name)}`);
  },
  clearTopic(topic) {
    I.amOnPage("https://adblock.test.data/" + topic + "/clear");
  }
};
