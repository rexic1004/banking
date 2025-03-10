import * as Sentry from "@sentry/nextjs";

Sentry.init({
	dsn: "https://e300b41df2ffb6d4592972400a25c0d3@o4506876178464768.ingest.us.sentry.io/4507159179034624",

	tracesSampleRate: 1,

	debug: false,

	replaysOnErrorSampleRate: 1.0,

	replaysSessionSampleRate: 0.1,

	integrations: [
		Sentry.replayIntegration({
			maskAllText: true,
			blockAllMedia: true,
		}),
	],
});
