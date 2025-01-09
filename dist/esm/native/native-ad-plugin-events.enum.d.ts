export declare enum NativeAdPluginEvents {
  SizeChanged = 'nativeAdSizeChanged',
  Loaded = 'nativeAdLoaded',
  FailedToLoad = 'nativeAdFailedToLoad',
  /**
   * Open "Adsense" Event after user click native
   */
  Opened = 'nativeAdOpened',
  /**
   * Close "Adsense" Event after user click native
   */
  Closed = 'nativeAdClosed',
  /**
   * Similarly, this method should be called when an impression is recorded for the ad by the mediated SDK.
   */
  AdImpression = 'nativeAdImpression',
}
