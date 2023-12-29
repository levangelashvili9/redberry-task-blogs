import { z } from 'zod'

export const blogFormValidations = z.object({
  image: z.any(),
  author: z
    .string()
    .min(4, { message: 'მინიმუმ 4 სიმბოლო' })
    .regex(new RegExp('^[ა-ჰ ]+$'), 'მხოლოდ ქართული სიმბოლოები')
    .refine(
      (value) => {
        const words = value.trim().split(' ')
        return words.length >= 2
      },
      {
        message: 'მინიმუმ ორი სიტყვა'
      }
    ),
  title: z.string().min(4, { message: 'მინიმუმ 4 სიმბოლო' }),
  description: z.string().min(2, { message: 'მინიმუმ 2 სიმბოლო' }),
  publish_date: z.string().refine((value) => value),
  categories: z.array(z.number()).refine((categories) => categories.length > 0, {
    message: 'გთხოვთ, აირჩიეთ კატეგორია'
  }),
  email: z
    .string()
    .endsWith('@redberry.ge', { message: 'მეილი უნდა მთავრდებოდეს @redberry.ge-ით' })
    .refine(
      (value) => {
        return value.length !== 12
      },
      {
        message: 'გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა'
      }
    )
})
