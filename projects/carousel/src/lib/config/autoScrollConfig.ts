import { InjectionToken } from "@angular/core";

export interface AutoScrollConfig {
    msPerMove: number, /* Should be positive and gt 1000 */
    firstMoveDelayMultiplier: number /* Should be positive */
}


export const AUTO_SCROLL_CONFIG = new InjectionToken<AutoScrollConfig>('AUTO_SCROLL_CONFIG');