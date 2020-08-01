import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/categorias?_embed=videos`;

function getAllWithVideos(){
  return fetch(`${URL_VIDEOS}?_embed=videos`)
      .then(async(respostaDoServidor) => {
      if (respostaDoServidor.ok){
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados : (')
    });
  }
export default {
  getAllWithVideos,
}