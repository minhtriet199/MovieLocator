export class DataStorage {
  public static getUserLocale():string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('locale') || 'en';
    } else {
      return 'en';
    }
  }
  public static setUserLocale(locale:string) {
     localStorage?.setItem('locale',locale)
  }
}
