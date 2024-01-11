import enData from "./../locales/en.json";
import khData from "./../locales/kh.json";

export const defaultLang = 'en';

export const trans = (key, lang = defaultLang) =>
{
    // key: page.home.title => ['page']['home']['title']
    let value = '';
    const locales = lang === 'en' ? enData : khData;
    const arrKey = key.split('.');
    value = locales;
    for (const item of arrKey)
    {
        value = value[item];
    }
    return value;
}
