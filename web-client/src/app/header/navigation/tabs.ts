
export class Tab {
  public static readonly tabs = [
    new Tab(0, '/home', 'Home', 'home'),
    new Tab(1, '/news', 'News', 'folder'),
    new Tab(2, '/opinion', 'Opinion', 'receipt'),
    new Tab(3, '/listen', 'Listen', 'hearing'),
    new Tab(4, '/analytics', 'Analytics', 'search'),
    new Tab(5, '/watch', 'Watch', 'video_library'),
    new Tab(6, '/about', 'About', 'help'),
    new Tab(7, '/authors', 'Authors', 'people')
  ];

  active = false;
  constructor(public index: number, public link: string, public label: string, public icon: string) { }
}
