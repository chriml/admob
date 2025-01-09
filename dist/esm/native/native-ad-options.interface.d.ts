import type { AdOptions } from '../shared';
/**
 * This interface extends AdOptions
 */
export interface NativeAdOptions extends AdOptions {
    /**
     * Banner Ad Size, defaults to ADAPTIVE_BANNER.
     * IT can be: ADAPTIVE_BANNER, SMART_BANNER, BANNER,
     * MEDIUM_RECTANGLE, FULL_BANNER, LEADERBOARD
     *
     * @default ADAPTIVE_BANNER
     * @since 3.0.0
     */
    adSize?: any;
    /**
     * Set Banner Ad position.
     * TOP_CENTER or CENTER or BOTTOM_CENTER
     *
     * @default TOP_CENTER
     * @since 1.1.2
     */
    position?: any;
}
