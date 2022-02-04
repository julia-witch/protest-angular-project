import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {HeaderNoticeComponent} from './header-notice/header-notice.component'
import {HeaderComponent} from './header/header.component'
import {PromoComponent} from './promo/promo.component';
import { PopularComponent } from './popular/popular.component';
import { WinterClothesComponent } from './winter-clothes/winter-clothes.component';
import { EmptyComponent } from './empty/empty.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderNoticeComponent,
    HeaderComponent,
    PromoComponent,
    PopularComponent,
    WinterClothesComponent,
    EmptyComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
