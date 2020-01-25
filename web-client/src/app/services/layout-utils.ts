import { LayoutType } from 'src/app/services/layout-type.enum';

export class LayoutUtils {
  static getTitle(type: LayoutType): string {
    switch (type) {
      case LayoutType.News:
        return 'News & Analysis';
      case LayoutType.Features:
        return 'Features';
      case LayoutType.Listen:
        return 'Listen';
      case LayoutType.Opinion:
        return 'Opinion';
      case LayoutType.Watch:
        return 'Watch';
      case LayoutType.Authors:
        return 'Authors';
      case LayoutType.Analytics:
        return 'Analytics';
    }
  }

  static getPath(type: LayoutType): string {
    switch (type) {
      case LayoutType.News:
        return 'news';
      case LayoutType.Features:
        return 'features';
      case LayoutType.Listen:
        return 'listen';
      case LayoutType.Opinion:
        return 'opinion';
      case LayoutType.Watch:
        return 'watch';
      case LayoutType.Authors:
        return 'authors';
      case LayoutType.Analytics:
        return 'analytics';
    }
  }
}
