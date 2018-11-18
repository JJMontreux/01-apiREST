import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Añadido
import { Proveedor1Provider } from '../providers/proveedor1/proveedor1'; // <-- Añadido automáticamente al crear el proveedor con el comando ionic g provider proveedor1
import { HttpClientModule } from '@angular/common/http'; // <-- Añadido manualmente

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule // <-- Añadido manualmente
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Proveedor1Provider // <-- Añadido automáticamente al crear el proveedor con el comando ionic g provider proveedor1
  ]
})
export class AppModule {}
