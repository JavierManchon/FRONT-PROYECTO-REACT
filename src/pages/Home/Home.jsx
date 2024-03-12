
function Home() {
  return (
    <article className="home-container">
    <section className="access-container">
        <img src='https://res.cloudinary.com/dbckjkikz/image/upload/v1705873900/e8xl9gszcbx6rc6oj10f.png' alt='Logo de game Vault' className='logo-home'/>
      </section>
      <section className="demo-container">
        <img src="https://res.cloudinary.com/dbckjkikz/image/upload/v1705872171/lj7jranmogsdbsxs3dbn.png" alt="Imagen ordenador y el texto manage your games" />
        {/*<p className='home-text-demo'>En Game Vault podrás tener un registro de todos tus juegos, hacer valoraciones y dejar comentarios sobre ellos, y controlar en todo momento aquellas misiones o tareas relacionadas con cada videojuego. Cuando ya tengas tu juegos registrado pulsa el botón TrackIt! y accede a las misiones que has fijado en tu perfil.</p>*/}
      </section>
      <section className="features-container">
      <img src="https://res.cloudinary.com/dbckjkikz/image/upload/v1705872188/reyphbvymyv06q0xo8is.png" alt="Imagen movil y el texto track your missions" />
          {/*<p className='home-text-features'>Planifica tu sesión de gaming definiendo aquellas cosas que tienes pendientes para avanzar en la historia, reune aquellos materiales necesarios para craftear tu arma favorita o completa quests para llegar a esa parte del juego secreta que pocos saben. ¡La decision es tuya!</p>*/}
      </section>
    </article>
  )
}

export default Home
