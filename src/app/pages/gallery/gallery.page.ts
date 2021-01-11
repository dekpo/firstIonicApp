import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  gallery = [
    {
      image: '../../../assets/madison.jpg',
      subtitle: 'Destination',
      title: 'Madison, WI',
      content: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.'
    },
    {
      image: '../../../assets/building.jpg',
      subtitle: 'Pyramide',
      title: 'Louvre, Paris',
      content: 'A wonderfull building...'
    },
    {
      image: '../../../assets/mountain-landscape.jpg',
      subtitle: 'Strange',
      title: 'Road to Even',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    },
    {
      image: '../../../assets/road.jpg',
      subtitle: 'Automnale',
      title: 'Somewhere in the wood',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
