type Gender = 'boy' | 'girl' | '';
interface CatPropos {
    readonly id: number;
    readonly name: string;
    readonly gender: Gender;
    readonly birthday: string;
    readonly bio: string;
    readonly picture: string;
}
declare class Cat implements CatPropos {
    readonly id: number;
    readonly name: string;
    readonly gender: Gender;
    readonly birthday: string;
    readonly bio: string;
    readonly picture: string;
    constructor({ id, name, gender, birthday, bio, picture }: CatPropos);
    /**
     * Returns true if the cat is new which has not been saved to the database.
     */
    get isNew(): boolean;
    /**
     * Returns the age of the cat in days.
     * If the birthday is not set or invalid, returns 0.
     */
    get age(): number;
    copyWith: (props: Partial<CatPropos>) => Cat;
    toString: () => string;
    static empty: () => Cat;
    static fromJson: (json: Record<string, any>) => Cat;
    static isValidBirthday: (birthday: string) => boolean;
}
export { Cat };
export type { Gender };
