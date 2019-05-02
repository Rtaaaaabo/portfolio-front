export class Links {
    name: string;
    urlPath: string;
    activedTab: boolean;
}

export interface ExperienceElemnt {
    companyId: number;
    period: string;
    describeTitle: string;
    describe: string;
    describeBusiness: string[];
    skill: string[];
    role: string[];
}
