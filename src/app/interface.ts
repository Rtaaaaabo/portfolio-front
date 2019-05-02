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

export interface WorkElement {
    title: string;
    describe; string;
    color: string;
    cols: number;
    rows: number;
}
