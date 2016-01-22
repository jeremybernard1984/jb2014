
	var ftf = new ftf();
 
	// This would be the actual instance name. Look at the var name above.
	ftf.instance_name 	= "ftf"; 
 
	// We currently only have three sizes. "large" = 48x48, "regular" = 32x32, "small" = 16x16. 
	// All other values will default to regular.
	ftf.icon_size 	 	= "large";
 
	// This will write the HTML to a specific object on the page. 
	ftf.output_to 	 	= "ftf_link"; 
 
	// Look for version 2.0 to include other languages. 
	// "en" is the default language. For supported languages, see below.
	ftf.lang	 	 	= "fr"; //THIS FEATURE IS DEPRECIATED IN VERSION 2.0 
 
	// This feature is a Version 2.0 feature. It is the upgrade of the above localization option. 
	// This must be a valid JSON file with the appropriate language translations. You can find the English version here:
	// http://freethefoxes.googlecode.com/svn/trunk/lang/en.json
	// You must upload the language JSON file to your website for use. (ie. ftf.lang_external = "includes/cs.json";)
	// Please refer to our localization page for all the languages already translated. 
	ftf.lang_external	 	 = "fr.json";
 
	// If users browser has a 3(failed) rating.
	// Would you like the script to automatically popup onload?
	ftf.onload 			= true;
 
	// We continuously store your website users specifications (OS, Browser, Version, etc)
	// and is available for your viewing in Version 2.0.
	// You can enable or disable this feature.
	ftf.analytics 		= true;
 
	// This will only display the popup onload once and is not persistent throughout the site.
	// Requires onload to be set to true as well.
	ftf.onlyonce 		= false;
 
	// You can download our default css here: http://code.freethefoxes.com/latest.css
	ftf.css_external 		= "latest.css";
 
	/*
	The following are the three different approval levels you may set to specific browsers:
		1 = Pass/Recommended
		2 = Pass/Acceptable
		3 = Fail
 
	The following are the default values for each browser but can be easily changed by 
	resetting the values using the following method.
	*/
	ftf.rate_firefox		= 1; // FireFox
	ftf.rate_chrome			= 1; // Chrome
	ftf.rate_safari			= 1; // Safari
	ftf.rate_opera			= 2; // Opera
	ftf.rate_ie6 			= 3; // Internet Explorer 6.0
	ftf.rate_ie7 			= 3; // Internet Explorer 7.0
	ftf.rate_ie8 			= 2; // Internet Explorer 8.0
 
	// Execute
	ftf.init();
