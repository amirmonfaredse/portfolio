import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  fullName: Yup.string("نام وارد شده معتبر نیست").required(
    "وارد کردن نام اجباری است"
  ),
  email: Yup.string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("وارد کردن ایمیل اجباری است"),
  subject: Yup.string("موضوع وارد شده معتبر نیست ").required(
    "وارد کردن موضوع اجباری است"
  ),
  textArea: Yup.string("متن پیام معتبر نیست").required(
    "وارد کردن متن پیام اجباری است"
  ),
});
