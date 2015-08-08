var qsHomePage = require('../pages/qsHomePage');

describe('Quality Shepherd blog', function() {
	beforeEach(function() {
		qsHomePage.to();
	});

	it('should display 5 posts per page', function() {
		expect(qsHomePage.posts.count()).toBe(5);
	});

	it('should return search results', function() {
		qsHomePage.searchFor('protractor');

		expect(qsHomePage.searchResultsPage.isPresent()).toBe(true);
		expect(qsHomePage.posts.count()).toBeGreaterThan(0);
	});

	it('unfound search term should return no results', function() {
		qsHomePage.searchFor('sfdslkjsfkjslkdf');

		expect(qsHomePage.noSearchResultsMsg.isDisplayed()).toBe(true);
	});
});