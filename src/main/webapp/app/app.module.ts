import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleMonolithicApplication1SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleMonolithicApplication1HomeModule } from './home/home.module';
import { JhipsterSampleMonolithicApplication1AdminModule } from './admin/admin.module';
import { JhipsterSampleMonolithicApplication1AccountModule } from './account/account.module';
import { JhipsterSampleMonolithicApplication1EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleMonolithicApplication1SharedModule,
        JhipsterSampleMonolithicApplication1HomeModule,
        JhipsterSampleMonolithicApplication1AdminModule,
        JhipsterSampleMonolithicApplication1AccountModule,
        JhipsterSampleMonolithicApplication1EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleMonolithicApplication1AppModule {}
