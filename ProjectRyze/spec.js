// spec.js

describe("ryze tests", function () {
  it("signin test", function () {
    browser.get("https://ryze-staging.formedix.com/sign-in");

    element(by.id("username")).sendKeys("testteamtechtest");
    element(by.id("password")).sendKeys("T3st3rT3ch");
    element(by.id("btnSubmit")).click();
    element(by.id("menuMdb")).click();
    element(by.id("menuMdbStudies")).click();
    element(
      by.xpath("(//span[@id='fdxMdbContainerListItem0MenuToggle'])[1]")
    ).click();
  });

  it("test", function () {
    element(by.id("fdxMdbContainerListItem0View")).click();

    element(by.id("dataAcquisitionName")).click();
    element(by.id("FORMTypeName")).click();

    element(by.xpath("(//div[@class='assetBrowseListItem'])[4]")).click();
    browser.sleep(3000);
    element(by.id("switchEditMode")).click();

    element(
      by.xpath("(//textarea[@id='assetLocaleEditTextTextareadescription'])[1]")
    ).click();
    // element(by.xpath("(//div[@id='editPropsAddEntrydescription'])[1]")).click();
    element(by.id("saveAsset")).click();

    browser.sleep(1000);
  });
});
