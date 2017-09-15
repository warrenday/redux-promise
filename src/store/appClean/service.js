const wait = time => new Promise((resolve) => setTimeout(resolve, time))

export const fetchPeople = () => (
  wait(1000).then(() => (
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => (res.json())
  )))
)
