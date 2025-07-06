import { InjectionToken } from "@angular/core";

export interface AutoScrollConfig {
    msPerMove: number,
    firstMoveDelayMultiplier: number 
}


export const AUTO_SCROLL_CONFIG = new InjectionToken<AutoScrollConfig>('AUTO_SCROLL_CONFIG');