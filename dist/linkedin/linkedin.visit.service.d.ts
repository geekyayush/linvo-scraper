import { LinkedinAbstractService } from './linkedin.abstract.service';
import { CombinedData, LinkedinServicesInterface } from './linkedin.services.interface';
import { CDPSession, Page } from 'puppeteer-core';
interface RequiredData {
    url: string;
}
export declare class LinkedinVisitService extends LinkedinAbstractService implements LinkedinServicesInterface<RequiredData> {
    process(page: Page, cdp: CDPSession, data: CombinedData<RequiredData>): Promise<{
        url: string;
        linkedin_id: string;
    }>;
}
export {};
