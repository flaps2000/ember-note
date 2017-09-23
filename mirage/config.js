export default function() {
  this.post('/users');
  this.get('/notebooks', (schema, request) => {
    const userId = request.queryParams.user;
    return schema.notebooks.where({ userId: userId });
  });
  this.get('/notebooks/:id');
  this.put('/notebooks/:id');
  this.post('/notebooks');
  this.del('/notebooks/:id');
  this.get('/notes', (schema, request) => {
    const notebookId = request.queryParams.notebook;
    return schema.notes.where({ notebookId: notebookId });
  });
  this.get('/notes/:id');
  this.put('/notes/:id');
  this.patch('/notes/:id');
  this.post('/notes');
  this.del('/notes/:id');
  this.get('/users', (schema, request) => {
    return schema.users.findBy({name: request.queryParams.name})
  })
}
