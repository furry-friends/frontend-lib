type Gender = 'boy' | 'girl' | '';

interface CatPropos {
  readonly id: number;
  readonly name: string;
  readonly gender: Gender;
  readonly birthday: string;
  readonly bio: string;
  readonly picture: string;
}

class Cat implements CatPropos {
  readonly id: number;
  readonly name: string;
  readonly gender: Gender;
  readonly birthday: string;
  readonly bio: string;
  readonly picture: string;

  constructor({ id, name, gender, birthday, bio, picture }: CatPropos) {
    this.id = id;
    this.gender = gender;
    this.name = name;
    this.birthday = birthday;
    this.bio = bio;
    this.picture = picture;
  }

  /**
   * Returns true if the cat is new which has not been saved to the database.
   */
  get isNew(): boolean {
    return this.id === -1;
  }

  /**
   * Returns the age of the cat in days.
   * If the birthday is not set or invalid, returns 0.
   */
  get age(): number {
    if (this.birthday === '') {
      return 0;
    }

    try {
      const birthDate = new Date(this.birthday);
      return Math.round(
        (new Date().getTime() - birthDate.getTime()) / 86400000
      );
    } catch (e) {
      return 0;
    }
  }

  copyWith = (props: Partial<CatPropos>): Cat =>
    new Cat({
      ...this,
      ...props,
    });

  toString = (): string =>
    JSON.stringify({
      id: this.id,
      name: this.name,
      gender: this.gender,
      birthday: this.birthday,
      bio: this.bio,
      picture: this.picture,
    });

  static empty = (): Cat =>
    new Cat({
      id: -1,
      name: '',
      gender: '',
      birthday: '',
      bio: '',
      picture: '',
    });

  static fromJson = (json: Record<string, any>): Cat => {
    if (
      this.isValidBirthday(json.birthday) === false ||
      ['boy', 'girl'].indexOf(json.gender) === -1
    ) {
      throw new Error('Invalid cat data');
    }

    return new Cat({
      id: json.id,
      name: json.name,
      gender: json.gender,
      birthday: json.birthday,
      bio: json.bio,
      picture: json.picture,
    });
  };

  static isValidBirthday = (birthday: string): boolean =>
    /^\d{4}-\d{2}-\d{2}$/.test(birthday);
}

export { Cat };
export type { Gender };
