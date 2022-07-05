import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        icon: 'feather icon-home',
        classes: 'nav-item'
      },
     
    ]
  },
  
  {
    id: 'forms',
    title: 'Marques & Modèles',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      
      {
        id: 'bootstrap',
        title: 'Modèles',
        type: 'item',
        url: '/tbl-bootstrap/bt-basic',
        classes: 'nav-item',
        icon: 'feather icon-package'
      },
      {
        id: 'bootstrap',
        title: 'Marques',
        type: 'item',
        url: '/tbl-bootstrap/bt-sizing',
        classes: 'nav-item',
        icon: 'feather icon-package'
      }
    ]
  },
  {
    id: 'chart',
    title: 'Chart',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Charts',
        type: 'item',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  {
    id: 'credit',
    title: 'Credits',
    type: 'group',
    icon: 'feather icon-credit-card',
    children: [
      {
        id: 'creditstraiter',
        title: 'Credits à traiter ',
        type: 'item',
        url: '/layout/static',
        classes: 'nav-item',
        icon: 'feather icon-credit-card'
      },
      {
        id: 'creditsAcceptés',
        title: 'Credits Acceptés',
        type: 'item',
        url: '/layout/horizontal',
        classes: 'nav-item',
        icon: 'feather icon-credit-card'
      }
    ]
  }
  
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
