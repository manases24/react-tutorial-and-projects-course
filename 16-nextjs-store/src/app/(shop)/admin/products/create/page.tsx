
// import { faker } from '@faker-js/faker';

// export default function AdminCreateProductPage() {
//   const name = faker.commerce.productName();
//   const company = faker.company.name();
//   const description = faker.lorem.paragraph({ min: 10, max: 12 });
//   return (
//     <section>
//       <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
//       <div className='border p-8 rounded-md'>
//         <FormContainer action={createProductAction}>
//           <div className='grid gap-4 md:grid-cols-2 my-4'>
//             <FormInput
//               type='text'
//               name='name'
//               label='product name'
//               defaultValue={name}
//             />
//             <FormInput
//               type='text'
//               name='company'
//               label='company'
//               defaultValue={company}
//             />
//             <PriceInput />
//             <ImageInput />
//           </div>
//           <TextAreaInput
//             name='description'
//             labelText='product description'
//             defaultValue={description}
//           />
//           <div className='mt-6'>
//             <CheckboxInput name='featured' label='featured' />
//           </div>
//           <SubmitButton text='create product' className='mt-8' />
//         </FormContainer>
//       </div>
//     </section>
//   );
// }