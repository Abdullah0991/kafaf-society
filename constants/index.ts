export const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//

type NavBarItem = {
    href: string,
    key: string,
    label: string,
    children: Omit<NavBarItem, 'children'>[]
}
export const NAV_LINKS: NavBarItem[] = [
    { href: '/', key: 'home', label: 'الرئيسية', children: [] },
    { href: '/box', key: 'box', label: 'صندوق المستقبل بأيدينا', children: [] },
    { href: '/campaign', key: 'campaigns', label: 'الحملات', children: [] },
    {
        href: '/achievements', key: 'achievements', label: 'إنجازاتنا', children: [
            { label: 'القسم الطبي', key: 'medical', href: '/achievements/medical' },
            { label: 'قسم الأنشطة', key: 'activities', href: '/achievements/activities' },
            { label: 'قسم الحالات الخاصة', key: 'special', href: '/achievements/special' },
            { label: 'المخيمات', key: 'camps', href: '/achievements/camps' },
            { label: 'البرامج والتدريبات التعليمية', key: 'education', href: '/achievements/education' },
            { label: 'صالة الألبسة', key: 'clothes', href: '/achievements/clothes' },
        ]
    },
];

export const APP_TITLE = 'جمعية كفاف للأعمال الإنسانية';
export const HERO_SUB_TITLE = `
جمعية كفاف للأعمال الإنسانية جمعية خيرية غير ربحية نشأت في عام 2019 من قبل مجموعة
من الشبان أصحاب الهم والمسؤولية والاحساس بالانتماء الى تحسين الواقع بعد مرور عشر سنوات
على الحرب في سوريا تسعى جمعية كفاف لدعم مشاريع التنمية والخدمات الأساسية التي تلبي
الاحتياجات اليومية للسوريين بحيث يكون لها اثار طويلة الأمد تتطلع جمعية كفاف لدعم السوريين في
داخل وخارج سوريا من خلال التنسيق مع الجهات المحلية الفاعلة تعمل كفاف على توظيف المنح
المتطلبة للتمويل والتي تقدمها منظمات المجتمع الدولي للمشاريع التنموية داخل سوريا.
`;

export const SERVICES = [
    { title: 'القسم الطبي', key: 'medical', href: '/achievements/medical', icon: '/medical.png' },
    { title: 'قسم الأنشطة', key: 'activities', href: '/achievements/activities', icon: '/activities.png' },
    { title: 'قسم الحالات الخاصة', key: 'special', href: '/achievements/special', icon: '/special.png' },
    { title: 'المخيمات', key: 'camps', href: '/achievements/camps', icon: '/camps.png' },
    {
        title: 'البرامج والتدريبات التعليمية',
        key: 'education',
        href: '/achievements/education',
        icon: '/education.png'
    },
    { title: 'صالة الألبسة', key: 'clothes', href: '/achievements/clothes', icon: '/clothes.png' },
];

export const FOOTER_LINKS = [
    {
        title: 'مواقع التواصل',
        links: [
            { label: 'Facebook', href: 'https://www.facebook.com/KAFAF.SY' },
            { label: 'Youtube', href: 'https://www.youtube.com/@user-vp6hn6cb9j' },
            { label: 'Instagram', href: 'https://www.instagram.com/kafafsy' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@kafafassociation' },
        ]
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'تواصل معنا',
    links: [
        { label: 'واتساب', value: '+90 505 440 30 79', href: 'tel:+905054403079' },
        { label: 'بريد إلكتروني', value: 'kafafassociation@gmail.com', href: 'mailto:kafafassociation@gmail.com' },
    ]
}

export const ACHIEVEMENTS: { [p: string]: { title: string, media: string }[] } = {
    medical: [
        { title: 'Medical Post 1', media: 'https://www.youtube.com/watch?v=LCY9JMWNZQs' },
        { title: 'Medical Post 2', media: 'https://www.youtube.com/watch?v=zSnJXWz2xAA' },
        { title: 'Medical Post 3', media: '/case.png' },
        { title: 'Medical Post 4', media: '/bg_1.jpg' },
        { title: 'Medical Post 5', media: 'https://www.youtube.com/watch?v=W9jeUuqxpaI' },
    ],
    activities: [
        { title: 'نشاط لإسعاد المؤنسات الغاليات', media: 'https://youtu.be/iSdx0bymFEQ' },
        { title: 'نشاط الرسم لإضافة لمسة جمالية للحياة', media: 'https://youtu.be/nAIUkvTdujg' },
        { title: 'من أبسط حقوق الأطفال اللعب والتعلم', media: 'https://youtu.be/r3qNqsg2tzA' },
        { title: 'في عيد العمال', media: 'https://youtu.be/kcF_zOT7_8s' },
        { title: 'في ذكرى اليوم العالمي لليتيم', media: 'https://youtu.be/pD-87yW3SXc' },
        { title: 'فرحتكم عيدنا', media: 'https://youtu.be/1enbzjZ0S7E' },
    ],
    special: [],
    camps: [
        { title: 'البنات سكر نبات', media: 'https://youtu.be/_zGkYs9O08g' },
        { title: 'الاستجابة الطارئة لعائلة مهجرة شمال حلب', media: 'https://youtu.be/kurWI_oUVj4' },
    ],
    education: [],
    clothes: [],
}

export const CAMPAIGNS: { title: string, media: string }[] = [];