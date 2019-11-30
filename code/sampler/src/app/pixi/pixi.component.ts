import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Application } from 'pixi.js';

@Component({
  selector: 'app-pixi',
  template: ''
})
export class PIXIComponent implements OnInit {
  public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({width: 1200, height: 800});
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
  }
}