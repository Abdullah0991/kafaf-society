"use client"; // only needed if you choose App Router
import { Admin, defaultTheme, RaThemeOptions, Resource } from "react-admin";
import {
    CampaignEdit,
    CampaignsCreate,
    CampaignsList,
    NewsCreate,
    NewsEdit,
    NewsList,
    ServicesCreate,
    ServicesEdit,
    ServicesList,
    StatisticsCreate,
    StatisticsEdit,
    StatisticsList
} from "@/components/admin";
import arabicMessages from "@/lib/react-admin-ar";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { TranslationMessages } from "ra-core";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { adminDataProvider } from "@/lib/admin-data-provider";
import CampaignIcon from '@mui/icons-material/Campaign';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BarChartIcon from '@mui/icons-material/BarChart';
import CategoryIcon from '@mui/icons-material/Category';

const messages: Record<string, TranslationMessages> = {
    'ar': arabicMessages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale], 'ar');

const theme: RaThemeOptions = {
    ...defaultTheme,
    direction: 'rtl'
};

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props: any) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const AdminApp = () => (
    <RTL>
        <Admin dataProvider={adminDataProvider} i18nProvider={i18nProvider} theme={theme}>
            <Resource
                name="statistics"
                list={StatisticsList}
                edit={StatisticsEdit}
                create={StatisticsCreate}
                icon={BarChartIcon}
                options={{ label: 'الإحصائيات' }}
            />
            <Resource
                name="services"
                list={ServicesList}
                edit={ServicesEdit}
                create={ServicesCreate}
                icon={CategoryIcon}
                options={{ label: 'الخدمات' }}
                recordRepresentation="title"
            />
            <Resource
                name="campaigns"
                list={CampaignsList}
                edit={CampaignEdit}
                create={CampaignsCreate}
                icon={CampaignIcon}
                options={{ label: 'الحملات' }}
                recordRepresentation="title"
            />
            <Resource
                name="news"
                list={NewsList}
                edit={NewsEdit}
                create={NewsCreate}
                icon={NewspaperIcon}
                options={{ label: 'آخر الأخبار' }}
                recordRepresentation="title"
            />
        </Admin>
    </RTL>
);

export default AdminApp;