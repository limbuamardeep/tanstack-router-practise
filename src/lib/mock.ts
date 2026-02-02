import { wait } from './utils'

type Data = {
  ecommerce: {
    categories: Array<{
      id: string
      name: string
      subcategories: Array<{
        id: string
        name: string
        products: Array<{
          id: string
          name: string
          description: string
          price: number
          categoryId: string
          subcategoryId: string
        }>
      }>
    }>
  }
  reports: {
    totalSales: number
    totalOrders: number
    totalCustomers: number
    totalProducts: number
  }
  contact: {
    countries: Array<{
      name: string
      cities: Array<string>
    }>
  }
}

export type Category = Data['ecommerce']['categories'][number]
export type Subcategory = Category['subcategories'][number]
export type Product = Subcategory['products'][number]
export type Reports = Data['reports']
export type Country = Data['contact']['countries'][number]

export const MockData: Data = {
  ecommerce: {
    categories: [
      {
        id: 'cat1',
        name: 'Electronics',
        subcategories: [
          {
            id: 'subcat1',
            name: 'Smartphones',
            products: [
              {
                id: 'prod1',
                name: 'XPhone 14 Pro',
                description:
                  'Latest flagship smartphone with advanced camera system',
                price: 999.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat1',
              },
              {
                id: 'prod2',
                name: 'Galaxy Ultra S23',
                description:
                  'Premium Android smartphone with exceptional battery life',
                price: 1199.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat1',
              },
            ],
          },
          {
            id: 'subcat2',
            name: 'Laptops',
            products: [
              {
                id: 'prod3',
                name: 'MacBook Air M2',
                description: 'Thin and light laptop with powerful performance',
                price: 1299.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat2',
              },
              {
                id: 'prod4',
                name: 'UltraBook Pro',
                description: 'High-performance laptop for professionals',
                price: 1499.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat2',
              },
            ],
          },
          {
            id: 'subcat3',
            name: 'Audio',
            products: [
              {
                id: 'prod5',
                name: 'SoundMax Pro Headphones',
                description:
                  'Wireless noise-cancelling headphones with premium sound',
                price: 349.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat3',
              },
              {
                id: 'prod6',
                name: 'AudioBlast Speaker',
                description: 'Portable Bluetooth speaker with deep bass',
                price: 129.99,
                categoryId: 'cat1',
                subcategoryId: 'subcat3',
              },
            ],
          },
        ],
      },
      {
        id: 'cat2',
        name: 'Clothing',
        subcategories: [
          {
            id: 'subcat4',
            name: "Men's Clothing",
            products: [
              {
                id: 'prod7',
                name: 'Classic Fit Dress Shirt',
                description: 'Professional dress shirt for formal occasions',
                price: 59.99,
                categoryId: 'cat2',
                subcategoryId: 'subcat4',
              },
              {
                id: 'prod8',
                name: 'Slim Fit Jeans',
                description: 'Comfortable everyday jeans with modern fit',
                price: 79.99,
                categoryId: 'cat2',
                subcategoryId: 'subcat4',
              },
            ],
          },
          {
            id: 'subcat5',
            name: "Women's Clothing",
            products: [
              {
                id: 'prod9',
                name: 'Summer Floral Dress',
                description: 'Lightweight floral pattern dress for summer',
                price: 79.99,
                categoryId: 'cat2',
                subcategoryId: 'subcat5',
              },
              {
                id: 'prod10',
                name: 'Business Blazer',
                description: 'Professional blazer for office wear',
                price: 129.99,
                categoryId: 'cat2',
                subcategoryId: 'subcat5',
              },
            ],
          },
        ],
      },
      {
        id: 'cat3',
        name: 'Home & Kitchen',
        subcategories: [
          {
            id: 'subcat6',
            name: 'Kitchen Appliances',
            products: [
              {
                id: 'prod11',
                name: 'Pro Blender',
                description: 'High-power blender for smoothies and food prep',
                price: 149.99,
                categoryId: 'cat3',
                subcategoryId: 'subcat6',
              },
              {
                id: 'prod12',
                name: 'Smart Coffee Maker',
                description:
                  'Programmable coffee maker with mobile app control',
                price: 99.99,
                categoryId: 'cat3',
                subcategoryId: 'subcat6',
              },
            ],
          },
          {
            id: 'subcat7',
            name: 'Furniture',
            products: [
              {
                id: 'prod13',
                name: 'Ergonomic Office Chair',
                description: 'Comfortable chair with lumbar support',
                price: 249.99,
                categoryId: 'cat3',
                subcategoryId: 'subcat7',
              },
              {
                id: 'prod14',
                name: 'Modular Sofa',
                description: 'Customizable sofa for modern living rooms',
                price: 899.99,
                categoryId: 'cat3',
                subcategoryId: 'subcat7',
              },
            ],
          },
        ],
      },
    ],
  },
  reports: {
    totalSales: 2345678,
    totalOrders: 34567,
    totalCustomers: 12345,
    totalProducts: 456,
  },
  contact: {
    countries: [
      {
        name: 'USA',
        cities: ['New York', 'LA', 'Chicago'],
      },
      {
        name: 'France',
        cities: ['Madrid', 'Barcelona', 'Paris'],
      },
      {
        name: 'England',
        cities: ['London', 'Manchester', 'Liverpool'],
      },
    ],
  },
}

export async function getCategories() {
  await wait()
  return MockData.ecommerce.categories
}

export async function getSubcategories(categoryId: string) {
  await wait()
  const category = MockData.ecommerce.categories.find(
    (cat) => cat.id === categoryId,
  )
  return category ? category.subcategories : []
}

export async function getSubcategory(subcategoryId: string) {
  await wait()
  for (const category of MockData.ecommerce.categories) {
    const subcategory = category.subcategories.find(
      (sub) => sub.id === subcategoryId,
    )
    if (subcategory) return subcategory
  }
  return undefined
}

export async function getCategory(categoryId: string) {
  await wait()
  return MockData.ecommerce.categories.find((cat) => cat.id === categoryId)
}

export async function getProducts(subcategoryId: string) {
  await wait()
  const subcategory = await getSubcategory(subcategoryId)
  return subcategory ? subcategory.products : []
}

export async function getProduct(productId: string) {
  await wait()
  for (const category of MockData.ecommerce.categories) {
    for (const subcategory of category.subcategories) {
      const product = subcategory.products.find((prod) => prod.id === productId)
      if (product) return product
    }
  }
  return undefined
}

export async function searchProducts(params: {
  page: number
  filter: string
  sort: 'alphabeticalAsc' | 'alphabeticalDesc'
}) {
  await wait()

  const { filter, sort, page } = params
  const pageSize = 5

  const results: Array<Product> = []
  const lowercaseFilter = filter.toLowerCase()

  for (const category of MockData.ecommerce.categories) {
    for (const subcategory of category.subcategories) {
      const matchingProducts = subcategory.products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercaseFilter) ||
          product.description.toLowerCase().includes(lowercaseFilter),
      )
      results.push(...matchingProducts)
    }
  }

  if (sort === 'alphabeticalAsc') {
    results.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    results.sort((a, b) => b.name.localeCompare(a.name))
  }

  const totalProducts = results.length
  const totalPages = Math.ceil(totalProducts / pageSize)
  const safetyPage = Math.max(1, Math.min(page, totalPages || 1))

  const startIndex = (safetyPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, totalProducts)
  const paginatedProducts = results.slice(startIndex, endIndex)

  return paginatedProducts
}

export async function getReports() {
  await wait()
  return MockData.reports
}

export async function getCountries() {
  await wait()
  return MockData.contact.countries
}

export async function getCities(countryName: string) {
  await wait()
  const country = MockData.contact.countries.find((c) => c.name === countryName)
  return country ? country.cities : []
}
