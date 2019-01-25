import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'theme', loadChildren: './theme/theme.module#ThemeModule' },
            { path: 'base', loadChildren: './base/base.module#BaseModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
            { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule' },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
