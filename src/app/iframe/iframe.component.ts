import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { injectedScript } from '../../assets/js/iframeInjected';

declare let window: any;

@Component({
  selector: 'app-iframe',
  templateUrl: 'iframe.component.html'
})
export class IFrameComponent implements OnInit, AfterViewInit {
  @ViewChild('iframe') iframe: any;
  public url = 'https://www.genox.io/';

  constructor(public sanitizer: DomSanitizer, private platform: Platform) {
    platform.ready().then(() => {
      // console.log(WKUserScript);
      console.log(window.WKUserScript);
      const bootstrappedScript = `${injectedScript.toString()}; ${
        injectedScript.name
      }();`;
      const now = new Date().getTime();
      window.WKUserScript.addScript({
        id: `ionicInjectedCode${now}`,
        code: bootstrappedScript
      });
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    // bind the onLoad method after the iframe page has been attached to the document
    this.iframe.nativeElement.addEventListener('load', this.onLoad.bind(this));
  }

  onLoad() {
    // console.log('iframe on load');
    // const iframe = document.getElementById('iframe');
    // // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    // const win = (<HTMLIFrameElement>iframe).contentWindow;
    // // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    // const doc = <HTMLDocument>win.document;
    // const genoxLogo = doc.querySelectorAll()
  }
}
