export default {
    name: 'blogs',
    type: 'document',
    title: 'Blogs',
    fields: [
        {
            name: 'blogtitle',
            type: 'string',
            title: 'Blog Title',
        },
        {
            name: 'content',
            type: 'string',
            title: 'Blog Content',
        },
        {
            name: 'blogimage',
            type: 'image',
            title: 'Blog Image',
            options: {
                hotspot: true,
              },
        },
        
        {
            name: 'author',
            type: 'reference',
            title: 'Author',
            required: true,
            to: [{ type: 'author' }],
          },
          

    ]
}