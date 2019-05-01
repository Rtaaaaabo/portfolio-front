import { Links, ExperienceElemnt } from './interface';

export let LINKS: Links[] = [
    { name: 'Profile', urlPath: 'profile', activedTab: true },
    { name: 'Works', urlPath: 'works', activedTab: false },
    { name: 'Experience', urlPath: 'experience', activedTab: false },
    { name: 'Blogs', urlPath: 'blogs', activedTab: false },
];

export const EXPERIENCE: ExperienceElemnt[] = [
    {
        period: '2018年11月〜現在',
        describeTitle: '社内業務改善PJ',
        describe:
            '社内で業務改善が可能なところをヒアリングし、自動化もしくは簡易化でいるところをヒアリング、開発。',
        describeBusiness: ['ヒアリング', '要件定義', '実装'],
        skill: ['daab', 'Node.js', 'Angulat２系以上', 'AWS', 'Python', 'Flask'],
        role: ['リーダー']
    },
    {
        period: '2018年7月〜現在',
        describeTitle: '音声QnAサイネージPJ',
        describe:
            '百貨店向けの音声サイネージの開発',
        describeBusiness: ['設計', '実装', '改修'],
        skill: ['AWS', 'Ionic', 'Azure', 'GCP', 'Xcode'],
        role: ['マイルストーンの管理', 'フロント']
    },
    {
        period: '2018年6月〜2018年7月',
        describeTitle: '大手鉄道会社新入社員向けサービスの再発',
        describe:
            '新入社員はモバイルから質問事項の入力、写真の投稿が可能になり、上司はPCから質問に対して回答が可能になる。',
        describeBusiness: ['設計', '実装', '改修'],
        skill: ['AWS', 'Ionic', 'Azure', 'GCP', 'Xcode'],
        role: ['マイルストーンの管理', 'フロント']
    },
    {
        period: '2017年7月〜2018年1月',
        describeTitle: 'Alexa Skill開発',
        describe:
            'PoCで各お客さんの要望に合わせたAlexa Skillの開発',
        describeBusiness: ['設計', '実装'],
        skill: ['AWS', 'Amazon Develop'],
        role: ['開発']
    },

];


