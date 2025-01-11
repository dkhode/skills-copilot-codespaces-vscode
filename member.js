function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'object',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role'
      },
      {
        name: 'image',
        type: 'mainImage',
        title: 'Image'
      }
    ]
  }
}