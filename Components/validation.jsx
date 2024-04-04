import { string, object, ref, setLocale } from 'yup';

/* // Türkçe hata mesajları
const trMessages = {
    string: {
        email: 'Geçerli bir email adresi giriniz',
        min: '${path} en az ${min} karakter olmalı',
        lowercase: '${path} küçük harflerden oluşmalıdır',
        uppercase: '${path} büyük harflerden oluşmalıdır',
    },
    mixed: {
        oneOf: '${path} alanı, ${values} değerlerinden biri olmalıdır',
    },
};

// İngilizce hata mesajları
const enMessages = {
    string: {
        email: 'Enter a valid email address',
        min: '${path} must be at least ${min} characters',
        lowercase: '${path} must consist of lowercase letters',
        uppercase: '${path} must consist of uppercase letters',
    },
    mixed: {
        oneOf: '${path} must be one of the following values: ${values}',
    },
}; */

// Varsayılan olarak Türkçe mesajları ayarla
// setLocale(trMessages);

const userSchema = object().shape({
    email: string().email().required(),
    password: string().min(5).lowercase().uppercase().required(),
    passwordCheck: string()
        .oneOf([ref('password')], 'Password must match ')
        .required(),
});

export default userSchema;
