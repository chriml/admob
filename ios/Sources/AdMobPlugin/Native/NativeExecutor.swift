import Foundation
import Capacitor
import GoogleMobileAds

class NativeExecutor: NSObject, GADNativeAdLoaderDelegate {
    weak var plugin: AdMobPlugin?
    var nativeAdLoader: GADAdLoader?
    var nativeAd: GADNativeAd?

    /// Load Native Ad
    func loadNativeAd(_ call: CAPPluginCall, _ request: GADRequest, _ adUnitID: String) {
        NSLog("loadNativeAd")

        guard let rootViewController = plugin?.getRootVC() else {
            call.reject("Root view controller not found.")
            return
        }

        // Define the ad types to load (Native Ad)
        let adTypes: [GADAdLoaderAdType] = [.native]

        // Initialize the ad loader
        self.nativeAdLoader = GADAdLoader(
            adUnitID: adUnitID,
            rootViewController: rootViewController,
            adTypes: adTypes,
            options: nil
        )

        self.nativeAdLoader?.delegate = self

        // Load the ad
        self.nativeAdLoader?.load(request)
    }

    /// Handle AdLoader Success
    func adLoader(_ adLoader: GADAdLoader, didReceive nativeAd: GADNativeAd) {
        NSLog("Native Ad Loaded")

        // Store the received native ad
        self.nativeAd = nativeAd

        // Extract native ad assets
        let adData: [String: Any] = [
            "headline": nativeAd.headline ?? "",
            "body": nativeAd.body ?? "",
            "callToAction": nativeAd.callToAction ?? "",
            "advertiser": nativeAd.advertiser ?? "",
            "icon": nativeAd.icon?.image?.toBase64String() ?? "",
            "mediaURL": nativeAd.mediaContent.mainImage?.toBase64String() ?? ""
        ]
        NSLog(String(nativeAd.body ?? ""))
        NSLog(nativeAd.headline ?? "")

        // Notify the web layer
        self.plugin?.notifyListeners("onNativeAdLoaded", data: adData)
    }

    /// Handle AdLoader Failure
    func adLoader(_ adLoader: GADAdLoader, didFailToReceiveAdWithError error: Error) {
        NSLog("Failed to load native ad: \(error.localizedDescription)")

        // Notify the web layer about the failure
        self.plugin?.notifyListeners("onNativeAdFailed", data: [
            "error": error.localizedDescription
        ])
    }

    /// Handle Ad Impression
    func nativeAdDidRecordImpression(_ nativeAd: GADNativeAd) {
        NSLog("Native Ad Recorded Impression")
        self.plugin?.notifyListeners("onNativeAdImpression", data: [:])
    }

    /// Handle Ad Click
    func nativeAdDidRecordClick(_ nativeAd: GADNativeAd) {
        NSLog("Native Ad Clicked")
        self.plugin?.notifyListeners("onNativeAdClicked", data: [:])
    }

    /// Handle Full-Screen Ad Opening
    func nativeAdWillPresentScreen(_ nativeAd: GADNativeAd) {
        NSLog("Native Ad Will Present Full Screen")
        self.plugin?.notifyListeners("onNativeAdOpened", data: [:])
    }

    /// Handle Full-Screen Ad Dismissal
    func nativeAdWillDismissScreen(_ nativeAd: GADNativeAd) {
        NSLog("Native Ad Will Dismiss Full Screen")
        self.plugin?.notifyListeners("onNativeAdClosed", data: [:])
    }

    /// Handle Ad Left Application
    func nativeAdDidDismissScreen(_ nativeAd: GADNativeAd) {
        NSLog("Native Ad Left Application")
        self.plugin?.notifyListeners("onNativeAdLeftApplication", data: [:])
    }
}

// MARK: - UIImage Extension for Base64 Conversion
extension UIImage {
    func toBase64String() -> String? {
        guard let imageData = self.pngData() else { return nil }
        return imageData.base64EncodedString(options: .lineLength64Characters)
    }
}
