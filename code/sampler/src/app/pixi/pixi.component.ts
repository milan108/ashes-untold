import { OnInit, Component, ElementRef, NgZone } from '@angular/core';
import { Application, Graphics, Container } from 'pixi.js';

@Component({
  selector: 'app-pixi',
  template: ''
})

export class PIXIComponent implements OnInit {
  public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application({ width: 1200, height: 800});
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    let stage = new Container();

    let shapes = new Graphics();
    shapes.beginFill(0x66CCFF);
    shapes.drawRect(20,20,30,30);
    shapes.drawCircle(190,70,70);
    shapes.endFill();

    stage.addChild(shapes);
    this.app.stage.addChild(stage);
  }

}