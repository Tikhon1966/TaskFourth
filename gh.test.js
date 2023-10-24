let page;

beforeEach(async () => {
    page = await browser.newPage();
}, 60000);

afterEach(() => {
    page.close();
});

describe("Github page tests", () => {
    beforeEach(async () => {
        await page.goto("https://github.com/team");
    });
    test("The h1 header content'", async () => {
        const firstLink = await page.$("header div div a");
        await firstLink.click();
        await page.waitForSelector("h1");
        const title2 = await page.title();
        expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
    }, 60000);

    test("The first link attribute", async () => {
        const actual = await page.$eval("a", (link) =>
            link.getAttribute("href")
        );
        expect(actual).toEqual("#start-of-content");
    }, 60000);

    test("The page contains Sign in button", async () => {
        const btnSelector = ".btn-large-mktg.btn-mktg";
        await page.waitForSelector(btnSelector, {
            visible: true,
        });
        const actual = await page.$eval(
            btnSelector,
            (link) => link.textContent
        );
        expect(actual).toContain("Get started with Team");
    }, 60000);
});
describe("Github start page tests", () => {
    beforeEach(async () => {
        await page.goto("https://github.com/");
    }, 7000);
    test("The title is 'GitHab:...'", async () => {
        const actual = await page.title();
        expect(actual).toEqual("GitHub: Let’s build from here · GitHub");
    }, 60000);

    test("The first link text 'Pricing'", async () => {
        await page.click("nav > ul > li:nth-child(4) > a");
        await page.waitForSelector("h1");
        const actual = await page.title();
        expect(actual).toContain(
            "Pricing · Plans for every developer · GitHub"
        );
    }, 60000);

    test("The second link text 'Features'", async () => {
        await page.click("footer ul > li:nth-child(1) > a");
        await page.waitForSelector("h1");
        const actual = await page.title();
        expect(actual).toContain("Features | GitHub · GitHub");
    }, 60000);
}, 60000);
