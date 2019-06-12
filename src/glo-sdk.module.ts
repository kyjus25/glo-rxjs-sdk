import { NgModule } from '@angular/core';
import {GloSDK} from './glo-sdk';
import {RequestService} from './request.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  exports: [

  ],
  declarations: [

  ],
  providers: [
    GloSDK,
    RequestService
  ]
})
export class GloSDKModule {}
