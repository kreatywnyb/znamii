// utils/botDetection.ts

/**
 * Comprehensive bot detection based on user agent strings
 * Includes major search engines and crawlers
 */
export function isBot(userAgent: string): boolean {
	const botPatterns = [
		// Google
		/googlebot/i,
		/google-structured-data-testing-tool/i,
		/google-ads-overview/i,
		
		// Other major search engines
		/bingbot/i,
		/slurp/i, // Yahoo
		/duckduckbot/i,
		/baiduspider/i,
		/yandexbot/i,
		
		// Social media crawlers
		/facebookexternalhit/i,
		/twitterbot/i,
		/linkedinbot/i,
		/whatsapp/i,
		/telegrambot/i,
		
		// Other common crawlers
		/crawler/i,
		/spider/i,
		/scraper/i,
		/bot/i,
		/crawling/i,
		/indexer/i,
		
		// Specific tools
		/lighthouse/i,
		/gtmetrix/i,
		/pingdom/i,
		/uptimerobot/i,
		/semrushbot/i,
		/ahrefsbot/i,
		
		// Headless browsers (often used by bots)
		/phantomjs/i,
		/headlesschrome/i,
		/puppeteer/i,
		/playwright/i,
	];

	return botPatterns.some(pattern => pattern.test(userAgent));
}

// Extended interfaces for bot detection
interface ExtendedNavigator extends Navigator {
	webdriver: boolean;
}

interface ExtendedWindow extends Window {
	callPhantom?: unknown;
	_phantom?: unknown;
	__nightmare?: unknown;
}

/**
 * Additional check for prerendering environments
 */
export function isPrerenderEnvironment(): boolean {
	// Check for server-side rendering
	if (typeof window === 'undefined') return true;
	
	// Check for prerender services
	if (typeof navigator !== 'undefined') {
		const extendedNavigator = navigator as ExtendedNavigator;
		const extendedWindow = window as ExtendedWindow;
		
		return !!(
			extendedNavigator.webdriver ||
			extendedWindow.callPhantom ||
			extendedWindow._phantom ||
			extendedWindow.__nightmare
		);
	}
	
	return false;
}