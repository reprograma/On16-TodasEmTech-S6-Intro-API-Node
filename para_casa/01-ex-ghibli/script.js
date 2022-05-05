//Apresente no console cada um dos atributos desse JS

const movies = [{
    title: 'Castle in the Sky',
    description: 'The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputas science to make himself ruler of the world.'
  },
  {
    title: 'Grave of the Fireflies',
    description: 'In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.'
  },
  {
    title: 'My Neighbor Totoro',
    description: 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.'
  },
  {
    title: 'Kikis Delivery Service',
    description: 'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.'
  },
  {
    title: 'Only Yesterday',
    description: 'Its 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.'
  }
]

// FAÇA O EXERCÍCIO ABAIXO:
// 01: Apresente os dados dos JS no console :
// [Exercício Ghibli]: o título de cada filme e a descrição de cada filme.


// Mostra no console a lista de títulos de todos os filmes

const listMovies = movies.map(movie => movie.title)
console.table(listMovies)

// Mostra no console a lista de descrição de todos os filmes.

const listDescription = movies.map(movie => movie.description)
console.table(listDescription)

// Mostra no console a lista de títulos e descrição dos filmes juntamente.

console.table(movies)