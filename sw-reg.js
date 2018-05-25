/* To tell the browser where service worker JavaScript file lives */
/* This part has bene implemented by following https://developers.google.com/web/fundamentals/primers/service-workers/ */
document.addEventListener("DOMContentLoaded", event => {
	if (navigator.serviceWorker) {
		navigator.serviceWorker.register("sw.js")
		.then(registration => console.log("Service Worker Successfully Registered", registration.scope))
		.catch(err => console.log("Registration has been failed", err));
	}
});