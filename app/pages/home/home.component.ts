import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: `./home.component.html`
})
export class HomeComponent {

    public image: any;

  constructor(
      private router: ActivatedRoute
  ) {

  }

  ngOnInit() {
      this.router.params.subscribe(
          param => {
              this.image = param['image']
          }
      );

  }

}