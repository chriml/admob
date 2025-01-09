// This enum should be keep in sync with their native equivalents with the same name
export var NativeAdPluginEvents;
(function (NativeAdPluginEvents) {
    NativeAdPluginEvents["SizeChanged"] = "nativeAdSizeChanged";
    NativeAdPluginEvents["Loaded"] = "nativeAdLoaded";
    NativeAdPluginEvents["FailedToLoad"] = "nativeAdFailedToLoad";
    /**
     * Open "Adsense" Event after user click native
     */
    NativeAdPluginEvents["Opened"] = "nativeAdOpened";
    /**
     * Close "Adsense" Event after user click native
     */
    NativeAdPluginEvents["Closed"] = "nativeAdClosed";
    /**
     * Similarly, this method should be called when an impression is recorded for the ad by the mediated SDK.
     */
    NativeAdPluginEvents["AdImpression"] = "nativeAdImpression";
})(NativeAdPluginEvents || (NativeAdPluginEvents = {}));
//# sourceMappingURL=native-ad-plugin-events.enum.js.map