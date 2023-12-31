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
    { href: '/cases', key: 'cases', label: 'الحالات', children: [] },
    { href: '/campaigns', key: 'campaigns', label: 'الحملات', children: [] },
    {
        href: '/services', key: 'services', label: 'الأعمال المنجزة', children: [
            { label: 'القسم الطبي', key: 'medical', href: '/services/medical' },
            { label: 'قسم الأنشطة', key: 'activities', href: '/services/activities' },
            { label: 'قسم الحالات الخاصة', key: 'special', href: '/services/special' },
            { label: 'المخيمات', key: 'camps', href: '/services/camps' },
            { label: 'البرامج والتدريبات التعليمية', key: 'education', href: '/services/education' },
            { label: 'صالة الألبسة', key: 'clothes', href: '/services/clothes' },
        ]
    },
    { href: '/news', key: 'news', label: 'آخر الأخبار', children: [] },
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
    { title: 'القسم الطبي', key: 'medical', href: '/services/medical', icon: '/medical.png' },
    { title: 'قسم الأنشطة', key: 'activities', href: '/services/activities', icon: '/activities.png' },
    { title: 'قسم الحالات الخاصة', key: 'special', href: '/services/special', icon: '/special.png' },
    { title: 'المخيمات', key: 'camps', href: '/services/camps', icon: '/camps.png' },
    {
        title: 'البرامج والتدريبات التعليمية',
        key: 'education',
        href: '/services/education',
        icon: '/education.png'
    },
    { title: 'صالة الألبسة', key: 'clothes', href: '/services/clothes', icon: '/clothes.png' },
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

export const ServiceCategories: { id: number, name: string, key: string }[] = [
    {
        id: 0,
        name: 'القسم الطبي',
        key: 'medical',
    },
    {
        id: 1,
        name: 'قسم الأنشطة',
        key: 'activities',
    },
    {
        id: 2,
        name: 'قسم المخيمات',
        key: 'camps',
    },
    {
        id: 3,
        name: 'قسم الألبسة',
        key: 'clothes',
    },
    {
        id: 4,
        name: 'القسم التعليمي',
        key: 'education',
    },
    {
        id: 5,
        name: 'قسم الحالات الخاصة',
        key: 'special',
    },
];

export const STATS = [
    {
        name: 'البرنامج الطبي',
        key: 'medical'
    },
    {
        name: 'الأنشطة والحالات الخاصة',
        key: 'activity'
    },
    {
        name: 'برنامج سوء التغذية',
        key: 'food'
    },
    {
        name: 'الدعم الميداني',
        key: 'logistic'
    },
    {
        name: 'صالة الالبسة',
        key: 'clothes'
    },
    {
        name: 'برنامج الاستجابة الطارئة',
        key: 'emergency'
    }
];

export const TaskCategories: { id: number, name: string }[] = [
    { id: 0, name: 'حالات خاصة' },
    { id: 1, name: 'حالات طبية' },
    { id: 2, name: 'كفالة يتيم' },
    { id: 3, name: 'كفالة طالب' },
    { id: 4, name: 'تأمين سكن' },
    { id: 5, name: 'قضاء دين' },
];

export const BOX_DESC = `
هل فكرت أنو الليرة ممكن تنقذ روح إنسان أو ممكن تدفي عائلة أو ممكن تعلم طالب أو ممكن تساعد يتيم ؟

صندوق المستقبل بأيدينا يعمل ليكون صلة الوصل بينك وبين صاحب الحاجة فما عليك سوى اختيار الحالة التي تريد مساعدتها من خلال منصة جمعية كفاف للأعمال الإنسانية على الإنترنت والتبرع لها عن طريق التواصل المباشر معنا أو عن طريق صناديقنا المنتشرة في العديد من الأماكن.
`