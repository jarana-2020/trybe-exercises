const router = require('express').Router();


const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]


router.get('/',(req,res) => {
  if(posts.length === 0 ) return res.status(200).json({ posts: [] })
  res.status(200).json({ posts })
}
);

router.get(
  '/:id',
  (req,res) => {
    const { id } = req.params;
    const post = posts.find(item => item.id === Number(id));

    if(!post) return res.status(404).json({message: "post not found" });

    res.status(200).json(post);
  }
)

module.exports = router;