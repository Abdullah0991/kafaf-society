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
        href: '/achievements', key: 'achievements', label: 'الأقسام', children: [
            { label: 'القسم الطبي', key: 'medical', href: '/achievements/medical' },
            { label: 'قسم الأنشطة', key: 'activities', href: '/achievements/activities' },
            { label: 'قسم الحالات الخاصة', key: 'special', href: '/achievements/special' },
            { label: 'المخيمات', key: 'camps', href: '/achievements/camps' },
            { label: 'البرامج والتدريبات التعليمية', key: 'education', href: '/achievements/education' },
            { label: 'صالة الألبسة', key: 'clothes', href: '/achievements/clothes' },
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

export const ACHIEVEMENTS: { [p: string]: { title: string, posts: { title: string, media: string }[] } } = {
    medical: {
        title: 'القسم الطبي',
        posts: [
            { title: '135 عملية جراحية رحلة علاج الشاب مجد', media: 'https://youtu.be/hJ_NRNcN1eg' },
            { title: 'انب من عمل قسم التغذية في جمعية كفاف شمال حلب', media: 'https://youtu.be/tQNWUk-3f70' },
        ]
    },
    activities: {
        title: 'قسم الأنشطة',
        posts: [
            { title: 'نشاط لإسعاد المؤنسات الغاليات', media: 'https://youtu.be/iSdx0bymFEQ' },
            { title: 'نشاط الرسم لإضافة لمسة جمالية للحياة', media: 'https://youtu.be/nAIUkvTdujg' },
            { title: 'من أبسط حقوق الأطفال اللعب والتعلم', media: 'https://youtu.be/r3qNqsg2tzA' },
            { title: 'في عيد العمال', media: 'https://youtu.be/kcF_zOT7_8s' },
            { title: 'في ذكرى اليوم العالمي لليتيم', media: 'https://youtu.be/pD-87yW3SXc' },
            { title: 'فرحتكم عيدنا', media: 'https://youtu.be/1enbzjZ0S7E' },
        ]
    },
    special: {
        title: 'قسم الحالات الخاصة',
        posts: []
    },
    camps: {
        title: 'المخيمات',
        posts: [
            { title: 'البنات سكر نبات', media: 'https://youtu.be/_zGkYs9O08g' },
            { title: 'الاستجابة الطارئة لعائلة مهجرة شمال حلب', media: 'https://youtu.be/kurWI_oUVj4' },
        ]
    },
    education: {
        title: 'البرامج والتدريبات التعليمية',
        posts: []
    },
    clothes: {
        title: 'صالة الألبسة',
        posts: []
    },
}

export const CAMPAIGNS: { id: string, title: string, media: string, content: string }[] = [
    {
        id: '1234',
        title: 'حملة مساعدة متضرري الزلزال',
        media: '/bg_1.jpg',
        content: `في 6 من شباط 2023 ضرب زلزال مزدوج ومدمًّر مناطق مختلفة من شمال سوريا وجنوب تركيا، كان مركزه ولايتي مرعش وغازي عينتاب وإقليم هاتاي الحدوي مع سوريا، ما تسبب في دمار واسع النطاق وأثّر على حياة عدد لا يحصى من الأفراد، وحول المنطقة إلى مدن منكوبة بثوان فقط!

ترك الزّلزال الذي بلغت قوته 7.8 على مقياس ريختر المتضرّرين في حاجة ماسة إلى المساعدة والدعم، في “كفاف”، امتلأت مستشفياتنا جميعها وعلى الفور بادرنا إلى القيام بالإسعافات الأولية وإنقاذ الجرحى الواصلين، في صباح اليوم التالي للكارثة كنا ملتزمين وقمنا بتقدير كامل للاحتياجات في هذه الحالة الطارئة لتقديم المعونات الإغاثية وإنشاء مخيمات الإقامة المؤقتة وتجهيزها بالتدفئة والأثاث كل ذلك بالتوازي مع استمرار خدماتنا الطبية المنقذة للحياة في مشافينا.`
    },
    {
        id: '2345',
        content: 'test',
        title: 'حملة تنظيف شاطئ بحيرة ميدنكي',
        media: '/bg_1.jpg'
    }
];

export const NEWS: { title: string, date: Date, content: string, media?: string }[] = [
    {
        title: 'اكتمال مشروع إنارة مخيف كفاف 2',
        date: new Date(),
        content: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1'
    },
    {
        title: 'افتتاح مخيم كفاف 2',
        date: new Date(),
        content: 'Test 2 Test 2 Test 2 Test 2 Test 2 Test 2 Test 2 Test 2'
    },
    {
        title: 'اطلاق حملة مساعدة متضرري الزلزال',
        date: new Date(),
        content: 'Test 3 Test 3 Test 3 Test 3 Test 3 Test 3 Test 3 Test 3'
    },
    {
        title: 'بدء استقبال تبرعاتكم في صندوق المستقبل بأيدينا في منطقة عفرين',
        date: new Date(),
        content: 'Test 4 Test 4 Test 4 Test 4 Test 4 Test 4 Test 4 Test 4'
    }
];