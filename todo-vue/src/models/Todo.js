export default class Todo {
  title = '';
  description = '';
  deadline = new Date().toJSON().split('T')[0];
}
