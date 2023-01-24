export default{
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'obrazek',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'nazwa',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            
            }
        },
        {
            name: 'price',
            title: 'cena',
            type: 'number',
        },
        {
            name: 'details',
            title: 'opis',
            type: 'string',
        }
    ]
}