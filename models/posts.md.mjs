const posts = [
  { id: "1", title: "Hello World!" },
  { id: "2", title: "Hello Planet!" },
  { id: "3", title: "Hello Universe!" },
  { id: "4", title: "Hello Galaxy!" },
];

export default class Posts {
  static get() {
    return posts;
  }

  static find(id) {
    const post = this.get().find((post) => post.id === id);
    return post;
  }

  static create(post) {
    this.get().push(post);
  }

  static update(id, post) {
    const index = this.get().findIndex((post) => post.id === id);
    this.get()[index] = {
      ...this.get()[index],
      ...post,
    };
  }

  static delete(id) {
    const index = this.get().findIndex((post) => post.id === id);
    if (index > -1) {
      this.get().splice(index, 1);
    }
  }

  static search(term) {
    return this.get().filter((post) => post.title.includes(term));
  }
}
