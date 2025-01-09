import type { PluginListenerHandle } from '@capacitor/core';
import type { ValidateAllEventsEnumAreImplemented } from '../private/validate-all-events-implemented.type';
import type { AdMobError } from '../shared';
import type { NativeAdOptions } from './native-ad-options.interface';
import type { NativeAdPluginEvents } from './native-ad-plugin-events.enum';
export declare type NativeDefinitionsHasAllEvents = ValidateAllEventsEnumAreImplemented<NativeAdPluginEvents, NativeDefinitions>;
export interface NativeDefinitions {
    /**
     * Show a banner Ad
     *
     * @group Banner
     * @param options AdOptions
     * @since 1.1.2
     */
    loadNativeAd(options: NativeAdOptions): Promise<void>;
    /**
     * Hide the banner, remove it from screen, but can show it later
     *
     * @group Banner
     * @since 1.1.2
     */
    hideBanner(): Promise<void>;
    /**
     * Resume the banner, show it after hide
     *
     * @group Banner
     * @since 1.1.2
     */
    resumeBanner(): Promise<void>;
    /**
     * Destroy the banner, remove it from screen.
     *
     * @group Banner
     * @since 1.1.2
     */
    removeBanner(): Promise<void>;
    /**
     *
     * @group Banner
     * @param eventName bannerAdSizeChanged
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.SizeChanged, listenerFunc: (info: any) => void): Promise<PluginListenerHandle>;
    /**
     * Notice: request loaded Banner ad
     *
     * @group Banner
     * @param eventName bannerAdLoaded
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.Loaded, listenerFunc: () => void): Promise<PluginListenerHandle>;
    /**
     * Notice: request failed Banner ad
     *
     * @group Banner
     * @param eventName bannerAdFailedToLoad
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.FailedToLoad, listenerFunc: (info: AdMobError) => void): Promise<PluginListenerHandle>;
    /**
     * Notice: full-screen banner view will be presented in response to the user clicking on an ad.
     *
     * @group Banner
     * @param eventName bannerAdOpened
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.Opened, listenerFunc: () => void): Promise<PluginListenerHandle>;
    /**
     * Notice: The full-screen banner view will been dismissed.
     *
     * @group Banner
     * @param eventName bannerAdClosed
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.Closed, listenerFunc: () => void): Promise<PluginListenerHandle>;
    /**
     * Unimplemented
     *
     * @group Banner
     * @param eventName AdImpression
     * @param listenerFunc
     * @since 3.0.0
     */
    addListener(eventName: NativeAdPluginEvents.AdImpression, listenerFunc: () => void): Promise<PluginListenerHandle>;
}
