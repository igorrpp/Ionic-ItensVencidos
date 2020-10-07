import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'itensVencidos',
      url: '/itensvencidos',
      icon: 'data'
    },
    {
      title: 'Novo Item',
      url: '/itens-vencidos-novo',
      icon: 'data'
    },
    
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Maps Geolocation',
      url: '/maps-geolocation',
      icon: 'location'
    },
    
    {
      title: 'Sair',
      url: '/logoff',
      icon: 'power'
    },
    
    
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
